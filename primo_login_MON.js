/*
* Author: Rachelle Orodio
* Purpose: This script allows testing of Logging in Primo
*/

module.exports =
{
	'Primo Login' : function (browser)
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

		/* Sign-in user here */
		.click('li[id="exlidSignIn"]')
		.pause(iDelay)
		.waitForElementVisible('body', 1000)
		
		/* Specify credentials here */
      	.setValue('input[name=bor_id]', 'specify_username')
       	.setValue('input[type=password]', 'specify_password')
		
		.waitForElementVisible('select[name=institute]', iDelay)	
		.click('select[name=institute]')
		.pause(500)
		
      	.setValue('option[value="specify_ALMA_InstitutionCode"]','specify_ALMA_InstitutionCode')
	  	.click('input[type=submit]')
      	.pause(1000)


		.end();
  	}
};