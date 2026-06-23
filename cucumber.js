import { format } from "node:path";

module.exports = {
    default: {
        require:['Features-bbd/step-definations/*.js'],
        format: ['progress', 'html:reports/cucumber-report.html']
    }
}


// export default {
//    default: {
//     require: ["Features-bbd/step-definations/**/*.js"],
//     paths: ["Features-bbd/**/*.feature"],
//     format: ["progress"],
//     publishQuiet: true,
//   },
// };