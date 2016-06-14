/*
* Author: Rachelle Orodio
* Date: 18/11/15 
* Name: page_load_time.js
* Purpose: Script is used to check how quickly Primo loads
*/

module.exports = 
{
  'Primo load time' : function (browser)
  {
	browser
	.useCss()
	.windowMaximize()

	/* Specify the Primo URL here */
	/* open Primo */
	.url('http://search.lib.monash.edu/primo_library/libweb/action/search.do?menuitem=0&mode=Basic&vid=MON')

	/* wait for the page to load */
	.waitForElementVisible('body', 1000)

	.end();
  }
};