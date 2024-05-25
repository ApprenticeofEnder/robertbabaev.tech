import * as fs from 'node:fs';
import * as yaml from 'yaml';

const yamlData = fs.readFileSync('src/lib/assets/resume_data.yml').toString();
const resumeData = yaml.parse(yamlData);
fs.writeFileSync('src/lib/assets/resume_data.json', JSON.stringify(resumeData));
