(function()(){
  'use strict'
 
let CustomerService = function(){
	
	 angular.module('meanshop')
       .factory('customerService',customerService);

function customerService(){
	  return {
		  getUsers:getUsers
	  }
	  
	 function getUsers(){
		 return [];
	 };
}
}
module.exports = CustomerService;
}());
