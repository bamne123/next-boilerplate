const path = require('path');

module.exports = {
  resolve: {
    alias: {
      Atoms: path.resolve(__dirname, '..', 'src', 'components', 'Atoms'),
      Molecules: path.resolve(__dirname, '..', 'src', 'components', 'Molecules'),
      Organisms: path.resolve(__dirname, '..', 'src', 'components', 'Organisms'),
      Pages: path.resolve(__dirname, '..', 'pages'),
      Components: path.resolve(__dirname, '..', 'src', 'components'),
      Services: path.resolve(__dirname, '..', 'src', 'services'),
      Styles: path.resolve(__dirname, '..', 'src', 'styles'),
      Lib: path.resolve(__dirname, '..', 'src', 'lib'),
    },
  },
};
