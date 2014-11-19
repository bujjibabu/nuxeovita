'use strict';

/**
 * @ngdoc function
 * @name vita.controller:headerController
 * @description
 * # headerController
 * Controller of the vita
 */
angular.module('vita')
	.controller('headerController', function($scope, localize) {
		var header = this;
		header.setEnglishLanguage = function() {
			localize.setLanguage('en-US');
		};

		header.setPigLatinLanguage = function() {
			localize.setLanguage('es-es');
		};
		header.headerContent = 'views/header.html';
	});