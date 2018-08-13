const glob = require('glob');
const js2flowchart = require('js2flowchart');
const fs = require('fs');
const {convertCodeToFlowTree, convertFlowTreeToSvg, createPresentationGenerator} = js2flowchart;

glob('./flowcharts/*.js', (err, files) => {
    files.forEach((file, i) => {
        
        const code = fs.readFileSync(file, 'utf8');
        const flowTree = convertCodeToFlowTree(code);
        const svg = convertFlowTreeToSvg(flowTree);

        //const presentationGenerator = createPresentationGenerator(code);
        //const slides = presentationGenerator.buildSlides();//array of SVGs

        //console.log(svg);
        fs.writeFileSync(`${file}.svg`, svg);
        console.log(`${i} - ${file} => ${file}.svg`);
    });
    
});