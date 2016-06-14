/*
* Author: Rachelle Orodio
* Date: 11/11/15 
* Name: basic_search_libres.js
* Purpose: This scripts allows to test saerching within library collections 
*/

module.exports = 
{
  'Primo Basic Search - Library collections' : function (browser)
  {
	browser
	.useCss()
	.windowMaximize()

	/* Specify Primo URL here */
	/* open Primo (basic search) */
	.url('http://search.lib.monash.edu/primo_library/libweb/action/search.do?menuitem=0&mode=Basic&vid=MON')
	
	/* wait for the page to load */
	.waitForElementVisible('body', 1000)

	/* search for 'search term here' */
	.setValue('input[type=text]', 'specify_search_term_here')

	/* select library collections then run the search */
	.click('a[id=showMoreOptions]')
	.click('label[for=exlidDynamicSelectBodyRadio1]')	
	.click('input[id=goButton]')

	/* wait for the results to load */
	.waitForElementVisible('div[id=resultsNumbersTile]', 1000)

	/* report if no results found */
	.assert.elementNotPresent('div[class=EXLNoResultsDivTitle]')

	.end();
  }
};



