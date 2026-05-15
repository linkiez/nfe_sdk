import { generateTemplateClassesFromXSD } from 'xsd2ts';
import * as fs from 'fs';

const xsdPath = 'PL_010c_NT2022_002v1.30/nfe_v4.00.xsd';

if (fs.existsSync(xsdPath)) {
    console.log('Generating for:', xsdPath);
    try {
        generateTemplateClassesFromXSD(xsdPath);
        console.log('Success!');
    } catch (e) {
        console.error('Error generating:', e);
    }
} else {
    console.error('File not found:', xsdPath);
}
