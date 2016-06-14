/*
* Author: Rachelle Orodio
* Date: 11/11/15 
* Name: basic_search_all.js
* Purpose: This scripts allows testing of searching in the All resources scope 
*/

module.exports = 
{
  'Primo Basic Search - All resources' : function (browser)
  {
	browser
	.useCss()
	.windowMaximize()

	/* Specify the Primo URL here */
	/* open Primo */
	.url('http://search.lib.monash.edu/primo_library/libweb/action/search.do?menuitem=0&mode=Basic&vid=MON')

	/* wait for the page to load */
	.waitForElementVisible('body', 1000)

	/* Specify search term here */
	/* search for 'english' under all resources */
	.setValue('input[type=text]', 'specify_search_term_here')
	.click('input[id=goButton]')

	/* wait for the results to load */
	.waitForElementVisible('div[id=resultsNumbersTile]', 1000)

	/* report if no results found */
	.assert.elementNotPresent('div[class=EXLNoResultsDivTitle]')

	.end();
  }
};