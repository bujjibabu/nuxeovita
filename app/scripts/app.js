'use strict';

/**
 * @ngdoc overview
 * @name vita
 * @description
 * # vita
 *
 * Main module of the application.
 */
angular.module('vita', ['ui.router', 'ui.bootstrap', 'ngynSelect2','localization'])
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/welcome');
		$stateProvider
			.state('welcome', {
				url: '/welcome',
				templateUrl: 'views/welcome.html',
				controller: 'welcomeController as welcome',
				resolve: {
				}
			})
			.state('entryForm', {
				url: '/entryForm',
				templateUrl: 'views/entryForm.html',
				controller: 'entryFormController as entryForm',
				resolve: {
				}
			});
	});
