/*
* Author: Rachelle Orodio
* Purpose: This script is used to test Login and My Account features on Primo
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

		/* sign-in user */
		.click('li[id="exlidSignIn"]')
		.pause(iDelay)
		.waitForElementVisible('body', 1000)
      	.setValue('input[name=bor_id]', 'specify_username_here')
       	.setValue('input[type=password]', 'specify_password_here')
		.waitForElementVisible('select[name=institute]', iDelay)	
		.click('select[name=institute]')
		.pause(500)
      	.setValue('option[value="specify_ALMA_Institutioncode"]','specify_ALMA_Institutecode')
	  	.click('input[type=submit]')
      	.pause(1000)

		/*test my account*/
		.click('li[id="exlidMyAccount"]')
		.click('li[id="exlidMyAccountTab"]')
		.click('a[title="Loans "]')
		.waitForElementVisible('a[id=renewAllButton]', 1000)
		.click('a[title="Requests"]')
		.waitForElementVisible('table[id=requestList]', 1000)
		.click('a[title="Fines & Fees"]')
		.waitForElementVisible('table[id=FinesAndFeesTable]', 1000)
		.click('a[title="Blocks & Messages"]')
		.waitForElementVisible('div[class="EXLMyAccountMessage "]', 1000)
		.click('a[title="Account Settings"]')
		.waitForElementVisible('a[id=editPersonalDetails]', 1000)
		.click('a[id=editPersonalDetails]')
		.setValue('input[id=address_1]',5)
		.click('input[id=exlidMyAccountPeronalFormSubmit]')
		.pause(1000)
		.end();
  	}
};