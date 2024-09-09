// import CracoAlias from 'craco-alias';

// export default {
//     plugins: [
//         {
//             plugin: CracoAlias,
//             options: {
//                 source: 'tsconfig',
//                 baseUrl: './src',
//                 tsConfigPath: './tsconfig.json',
//             },
//         },
//     ],
// };
const path = require('path');

module.exports = {
    webpack: {
        alias: {
            src: path.resolve(__dirname, 'src/'),
        },
    },
};
