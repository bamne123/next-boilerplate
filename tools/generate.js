/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */

const { generateTemplateFiles } = require('generate-template-files');
const openEditor = require('open-editor');
const index = require('create-index');
const fs = require('fs');

const callback = async (results, currPath) => {
  try {
    fs.unlinkSync(`${currPath}/index.js`);
    openEditor(results.output.files, 'vscode');
    index.writeIndex([currPath]);
    console.log(`results`, results);
  } catch (e) {
    console.log(e.message);
  }
};

generateTemplateFiles([
  // Example of generating multiple files
  {
    option: 'Create Page',
    defaultCase: '(titleCase)',
    entry: {
      folderPath: './tools/templates/pages',
    },
    stringReplacers: ['__store__'],
    output: {
      path: './pages/__store__(lowerCase)',
      pathAndFileNameDefaultCase: '(titleCase)',
    },
    onComplete: (results) => {
      console.log(`results`, results);
      openEditor(results.output.files, 'vscode');
    },
  },
  {
    option: 'Create Atom',
    defaultCase: '(titleCase)',
    entry: {
      folderPath: './tools/templates/atom',
    },
    stringReplacers: ['__store__'],
    output: {
      path: './src/components/Atoms/__store__(titleCase)',
      pathAndFileNameDefaultCase: '(titleCase)',
    },
    onComplete: (results) => {
      const currPath = './src/components/Atoms';
      callback(results, currPath);
    },
  },
  {
    option: 'Create Molecules',
    defaultCase: '(titleCase)',
    entry: {
      folderPath: './tools/templates/molecule',
    },
    stringReplacers: ['__store__'],
    output: {
      path: './src/components/Molecules/__store__(titleCase)',
      pathAndFileNameDefaultCase: '(titleCase)',
    },
    onComplete: (results) => {
      const currPath = './src/components/Molecules';
      callback(results, currPath);
    },
  },
  {
    option: 'Create Organism',
    defaultCase: '(titleCase)',
    entry: {
      folderPath: './tools/templates/organism',
    },
    stringReplacers: ['__store__'],
    output: {
      path: './src/components/Organisms/__store__(titleCase)',
      pathAndFileNameDefaultCase: '(titleCase)',
    },
    onComplete: (results) => {
      const currPath = './src/components/Organisms';
      callback(results, currPath);
    },
  },
]);
