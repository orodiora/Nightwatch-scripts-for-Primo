/*
* Author: Rachelle Orodio
* Date: 12/11/15 
* Name: advanced_search_any.js
* Purpose: This scripts perform a search for each of the values
* within the 'Any' limits box
*/

module.exports = 
{
  'Primo Advanced Search: Any limits' : function (browser)
  {
	var anyValues = ["any","title","creator","sub"];

	browser.useCss()
	browser.windowMaximize()

	/* Specify the Primo URL here */
	/* open the advanced search page */
	browser.url('http://search.lib.monash.edu/primo_library/libweb/action/search.do?menuitem=1&mode=Advanced&amp;vid=MON')
	
	/* wait for the page to load */
	browser.waitForElementVisible('body', 1000)

	/* enter a search term */
	browser.setValue('input[type=text]', 'specify_search_term_here')

	/* iterate through values in the 'Any' limits box */
	for (var i = 0; i < anyValues.length; i++)
	{
		/* select a limit */
		browser.click("option[value=" + anyValues[i] + "]")

		/* perform the search */
		browser.click('input[id=goButton]')

		/* wait for the results to load */
		browser.waitForElementVisible('div[id=resultsNumbersTile]', 1000)

		/* report if no results found */
		.assert.elementNotPresent('div[class=EXLNoResultsDivTitle]')
	}	
	browser.end();	
  }
};