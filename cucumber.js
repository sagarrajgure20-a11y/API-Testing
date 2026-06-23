export default {
  default: {
    require: ['Features-bbd/step-definations/*.js'],
    path: ['Features-bbd/*.feature'],
    format: ['progress', 'html:reports/cucumber-report.html'],
  },
};