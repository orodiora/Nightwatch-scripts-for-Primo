/*
* Author: Rachelle Orodio
* Name: primo_menu_links.js
* Date: 06-11-15
* Purpose: This script checks the Primo menu links eg. Databases, Basic, Advanced)
*/

module.exports =
{
	'Primo menu links' : function (browser)
	{	
		var iDelay = 1500;

		browser

		.useCss()
		.windowMaximize()

		/* Specify Primo URL here */
		/* open Primo */
      	.url('http://search.lib.monash.edu/primo_library/libweb/action/search.do?menuitem=0&vid=MON')
      	.waitForElementVisible('body', iDelay)
		
		/* check main menu */
		.waitForElementVisible('ul[id=exlidMainMenuRibbon]', iDelay)

		/* check databases */
		.waitForElementVisible('a[title="Find Databases"]', iDelay)
		.click('a[title="Find Databases"]')
		.pause(iDelay*2)
		.waitForElementVisible('span[class=EXLFindDBHeaderButtonClose]', iDelay)
		.click('span[class="EXLFindDBHeaderButtonClose"]')
		.pause(iDelay)

		/* check basic search */
		.waitForElementVisible('a[title=basic]', iDelay)
		.click('a[title=basic]')
		.pause(iDelay)

		/* check advanced search */
		.waitForElementVisible('a[title="advanced search"]', iDelay)
		.click('a[title="advanced search"]')
		.pause(iDelay)

		/* check citation */
		.waitForElementVisible('a[title="citationlinker"]', iDelay)
		.click('a[title="citationlinker"]')
		.pause(iDelay)
		.waitForElementVisible('span[class=EXLCitationLinkerHeaderButtonClose]', iDelay)
		.click('span[class="EXLCitationLinkerHeaderButtonClose"]')
		.pause(iDelay)

		/* check browse search */
		.waitForElementVisible('a[title="browse search"]', iDelay)
		.click('a[title="browse search"]')
		.pause(iDelay)

		/* check a-z ejournals */
		.waitForElementVisible('a[title="a z ejournals"]', iDelay)
		.click('a[title="a z ejournals"]')
		.pause(iDelay)

		/* check tags */
		.waitForElementVisible('a[title=Tags]', iDelay)
		.click('a[title=Tags]')
		.pause(iDelay)

		/* check help */
		.waitForElementVisible('a[title="Get help using this portal"]', iDelay)
		.click('a[title="Get help using this portal"]')
		.pause(iDelay*3) /* wait for the help page to load */

		.end();
  	}
};