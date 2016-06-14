# Nightwatch-scripts-for-Primo


What is Nightwatch?
Nightwatch.js is an automated testing framework for web applications and websites, written in Node.js and using the Selenium WebDriver API.
It is a complete browser automation (End-to-End) solution which aims to simplify the process of setting up Continuous Integration and writing of automated tests.

========
These scripts are run on a Windows server that has Nightwatch installed.

To install nightwatch following instructions on this page:http://nightwatchjs.org/guide#installation
Once nightwatch is installed together with it's pre-requisites you will be able to install the scripts on this page.

Example way of running the scripts:  D:\Projects>node nightwatch.js -t tests/sample.js

Will generate these results if successful:

Starting selenium server... started - PID:  3328

[Sample] Test Suite
-----------------
Running:  Demo test Google
 ? Element <body> was visible after 133 milliseconds.
 ? Element <button[name=btnG]> was visible after 96 milliseconds.
 ? Testing if element <#main> contains text: "Night Watch".

OK. 3 assertions passed. (15.193s)

