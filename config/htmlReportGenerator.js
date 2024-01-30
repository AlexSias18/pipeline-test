const reporter= require('cucumber-html-reporter');
const path= require('path').resolve('./')
var date=new Date();
var currentDate=date.getDate() + '_'+ date.getMilliseconds();

var options={
    brandTitle:"Scenarios",
    theme: 'bootstrap',
    jsonFile:path+'/test-results/reports/cucumber-report.json',
    output: path+'/test-results/reports/cucumber-report.html',
    reportSuiteAsScenarios:true,
    scenarioTimestamp:true,
    launchReport:true,
    metadata:{
        "Test Enviroment":"Prueba Pipeline"
    }
}

reporter.generate(options);