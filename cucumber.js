export default {
  default: {
    require: ['Features-bbd/step-definations/*.js',
        'Features-bbd/support/*.js'
    ],
    path: ['Features-bbd/*.feature'],
    format: ['progress', 'html:reports/cucumber-report.html'],
  },
};