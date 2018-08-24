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
            console.log('reading', filename);

            readme += `
## ${index} - ${filename}

\`\`\`javascript
    ${contents}
\`\`\`

### Flowchart
![${filename}-svg image][${filename}-svg]

[${filename}-svg]: https://raw.githubusercontent.com/jonniespratley/js-leetcode/master/flowcharts/${filename.replace('./examples/', '').replace('.js', '.svg')} "Logo Title Text 2"


---
`;
        })
        saveReadme(readme);
    });

    //concact into template

    //write to file
}

const action = process.argv[2];
switch (action) {
    case 'clean':
        cleanSvgs();
        break;
    case 'generate':
        generateSvgs();
        break;
    case 'readme':
        createReadme();
        break;
        default:
        console.log('Please choose an action');
        break;
}

console.log(process.argv);