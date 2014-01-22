module.exports = function (config) {
    'use strict';
    
    config.set({
        basePath: '../',

        files: [
           '../vendor/angular/angular.js',
           '../vendor/angular/angular-*.js',
           '../src/common/controller/*.js',      
            '../src/app/*.js',            
            'unit/*Spec.js'
        ],

        exclude: [
            '../vendor/angular/angular-loader.js',
            '../vendor/angular/*.min.js',
            '../vendor/angular/angular-scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],
        //browsers: ['PhantomJS','Firefox', 'IE'],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        },

        plugins: [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-ie-launcher',
            'karma-phantomjs-launcher',
            'karma-script-launcher',
            'karma-jasmine'
        ]
    });
};
