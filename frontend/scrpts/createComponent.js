// Using ESM import statements
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Getting directory name from module URL (necessary because __dirname is not available in ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Retrieve component name from the command line arguments
const componentName = process.argv[2];

if (!componentName) {
    console.error('Please specify the component name');
    process.exit(1);
}

// Define the directory where the component will be created
const componentDir = path.join(__dirname, '..', 'src', 'components', componentName);

// Ensure the directory exists
if (!fs.existsSync(componentDir)) {
    fs.mkdirSync(componentDir, { recursive: true });
}

// Component template
const componentTemplate = `import React from 'react';

const ${componentName} = () => {
  return <div>${componentName}</div>;
};

export default ${componentName};
`;

// Path for the new component file
const filePath = path.join(componentDir, `${componentName}.jsx`);

// Write the component file
fs.writeFile(filePath, componentTemplate, 'utf8', (err) => {
    if (err) {
        return console.error(err);
    }
    console.log(`${componentName} component created at ${filePath}`);
});
