var assert = require('assert');
require('../server/customerService');

describe('Application Test',function(){
	before(ngModule('customerService'));
	
	it('Test Mocha',function(){
		assert(customerService.getUsers().length,0)
	});
})