const fs = require('fs');
const path = require('path');
const glob = require('glob');
const js2flowchart = require('js2flowchart');
const {
    convertCodeToFlowTree,
    convertFlowTreeToSvg,
    createPresentationGenerator
} = js2flowchart;




function getExampleJSFiles() {
    return new Promise((resolve, reject) => {
        glob('./examples/*.js', (err, files) => {
            if (err) {
                reject(err);
            }
            resolve(files);
        });
    });
}


function generateSvgs() {
    glob('./examples/*.js', (err, files) => {
        files.forEach((file, i) => {
            try {
                const code = fs.readFileSync(file, 'utf8');
                const flowTree = convertCodeToFlowTree(code);
                const svg = convertFlowTreeToSvg(flowTree);
                let filename = path.basename(file.replace('.js', '.svg'));
                fs.writeFileSync(`flowcharts/${filename}`, svg);

                console.log(`${i} - ${file} => ${filename}`);
            } catch (err) {
                console.log(err);
            }
        });
    });
}

function cleanSvgs() {
    glob('./flowcharts/*.svg', (err, files) => {
        files.forEach((file, i) => {
            console.log('Remove', file);
            fs.unlinkSync(file);
        });

    });

}


const codeCommentsRegEx = /(\/\*([^*]|[\r\n]|(\*+([^*/]|[\r\n])))*\*+\/)|(\/\/.*)/gm


function saveFile(filename, contents){
    //let contents = fs.readFileSync('README.md');
    fs.writeFileSync(filename, [contents].join(''), 'utf8');
    return Promise.resolve(filename);
}



function writeFileToMarkdown(file){
    return new Promise((resolve, reject) => {
        
        let filename = file;
        let newFilename = path.basename(filename).replace('.js', '.md');

        console.log('writeFileToMarkdown', file, '=>', newFilename);
        
        let contents = fs.readFileSync(filename);
        
        let result;
        let readme = '';
        let codeComments = '';
        while(result = codeCommentsRegEx.exec(contents)){
            codeComments += result[1]
        }
        //console.log(codeComments);

        readme += `
# ${path.basename(filename)}

${codeComments}

**Solution:**

<!-- js-console -->
\`\`\`javascript
${contents}
\`\`\`

> Reference: ..

`;

        saveFile(path.join(__dirname, '../out', newFilename), readme);
    });
}

async function writeAllFiles(){
    let files = await getExampleJSFiles();
    files.forEach((file, index) => {
        console.log(index, file);
        writeFileToMarkdown(file);
    })
}






function createReadme(){
    let readme = '';
    let readmeFilename = 'README_ALL.md';

    function saveReadme(d){
        let contents = fs.readFileSync('README.md');
        fs.writeFileSync(readmeFilename, [contents, d].join(''), 'utf8');
        return Promise.resolve(readmeFilename);
    }

    //get files
    getExampleJSFiles().then(files => {
        files.forEach((file, index) => {
            let filename = file;
            let contents = fs.readFileSync(filename);

            //TODO - extract code comments.

            let codeComments = '';
            console.log('reading', filename);
            readme += `
# ${filename}
${codeComments}

**Solution:**

<!-- js-console -->
\`\`\`javascript
    ${contents}
\`\`\`

> Reference: ..

---
`;
        })
        saveReadme(readme);
    });
}








const action = process.argv[2];
switch (action) {
    case 'clean':
        cleanSvgs();
        break;
    case 'svg':
        generateSvgs();
        break;
    case 'writeAll':
        writeAllFiles();
        break;
    case 'readme':
        createReadme();
        break;
        default:
        console.log('Please choose an action', 'clean', 'svg', 'readme');
        break;
}

