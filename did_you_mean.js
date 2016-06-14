/*
* Author: Rachelle Orodio
* Date: 15/11/15 
* Name: did_you_mean.js
* Purpose: This script allows testing of spell check system alert message
*/

module.exports = 
{
  'Primo: did you mean' : function (browser)
  {
	browser
	.useCss()
	.windowMaximize()

	/* Specify the Primo URL */
	/* open Primo (basic search) */
	.url('http://search.lib.monash.edu/primo_library/libweb/action/search.do?menuitem=0&mode=Basic&vid=MON')

	/* wait for the page to load */
	.waitForElementVisible('body', 1000)

	/* enter a search term with incorrect spelling ex. "shakspear"*/
	.setValue('input[type=text]', 'specify_the_search_term')
	.click('input[id=goButton]')

	/* wait for the results to load */
	.waitForElementVisible('div[id=resultsNumbersTile]', 1000)

	/* system alert message */	
	.assert.elementPresent('div[id=exlidHeaderSystemFeedbackContent]')

	.end();
  }
};