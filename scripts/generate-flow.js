const fs = require('fs');
const path = require('path');
const glob = require('glob');
const js2flowchart = require('js2flowchart');
const {
    convertCodeToFlowTree,
    convertFlowTreeToSvg,
    createPresentationGenerator
} = js2flowchart;

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


const action = process.argv[2];
switch (action) {
    case 'clean':
        cleanSvgs();
        break;
    case 'generate':
        generateSvgs();
        break;
}

console.log(process.argv);