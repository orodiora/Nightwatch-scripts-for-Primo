/*
* Author: Rachelle Orodio
* Name: bx_results.js
* Date: 19-11-15
* Purpose: Check if the bX Hot Articles works
*/

module.exports =
{
	'Primo bX Hot Articles' : function (browser)
	{	
		var iDelay = 1500;

		browser

		.useCss()
		.windowMaximize()

		/* Specify the Primo URL here */
		/* open Primo */
      		.url('http://search.lib.monash.edu/primo_library/libweb/action/search.do?menuitem=0&vid=MON')
      		.waitForElementVisible('body', iDelay)
		
		/* perform a basic search */
		.setValue('input[type=text]', 'specify_search_term_here')
		.click('input[id=goButton]')
		.click('span[id="showhide"]')
		.pause(iDelay)
		.end();
  	}
};