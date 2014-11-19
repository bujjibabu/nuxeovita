'use strict';

/**
 * @ngdoc function
 * @name vita.controller:wcController
 * @description
 * # wcController
 * Controller of the vita
 */
angular.module('vita')
	.controller('welcomeController', function($scope, $location, $http, $rootScope, applicationService) {
		$scope.wc = {};
		$scope.wc.path='';
		$scope.wc.fnStartWorkflow = function() {
			$scope.wc.fnInit();
		};

		$scope.wc.fnCreateClient = function() {
			console.log('create cliented');
			$scope.wc.client = new nuxeo.Client({
				baseURL: 'http://192.168.208.88:8081/nuxeo',
				username: 'Administrator',
				password: 'Administrator'
			});
			//$scope.wc.client.repositoryName('undefined');
		};
		$scope.wc.fnClientConnect = function() {
			$scope.wc.client.connect(function(error, client) {
				if (error) {
					// cannot connect
					throw error;
				} else {
					// OK, the returned client is connected
					console.log('Client is connected: ' + client.connected);
					$scope.wc.fnCreateDoc();
				}
			});
		};

		$scope.wc.fnCreateDoc=function(){
			$scope.wc.client.operation('Document.Create')
			  .params({
			    type: 'VITA',
			    name: 'NewDoc',
			    properties: 'dc:title=NewDoc'
			  })
			  .input('doc:/default-domain/UserWorkspaces/Administrator/')
			  .execute(function(error, Docdata) {
			    if (error) {
			      // something went wrong
			      throw error;
			    }else{
			    	$scope.wc.path = Docdata.path;
			    	applicationService.DynamicPath = angular.copy($scope.wc.path);
			    	if($scope.wc.path !=''){
			    	$scope.wc.fnInitialSatrtWorkflow();
			    	}
			   	 console.log('New Dynamic Document Created' + Docdata.path)
			    }
			  });
			};

		$scope.wc.fnInitialSatrtWorkflow = function() {
			var data = {"params":{"start":true,"id":"Family"}};
				$http({'method': 'POST', 'url': 'http://192.168.208.88:8081/nuxeo/api/v1/path'+$scope.wc.path+'/@op/REST_WORKFLOW', 'data':data})
				.success(function(result) {
					console.log('basic info call Success');
					$scope.wc.fnWorkflowFirstStep();
				})
				.error(function(result){
					alert('initial step error');
				});
		};

		$scope.wc.fnWorkflowFirstStep = function() {
			var data = {"params":{"start":true,"id":"Family"}};
				$http({'method': 'POST', 'url': 'http://192.168.208.88:8081/nuxeo/api/v1/path'+$scope.wc.path+'/@op/REST_TASK', 'data':data})
				.success(function(result) {
					var currentTaskId = result.entries[0].title.split('.');
					$scope.showFirstPage = currentTaskId[0];
					applicationService.pageNumberObject=$scope.showFirstPage;
					console.log('Get First Node Id', $scope.showFirstPage);
					if(result){
						$location.path('/entryForm');
					}
				})
				.error(function(result){
					alert('first next step error');
				});
		};

		$scope.wc.fnInit = function() {
			$scope.wc.fnCreateClient();
			$scope.wc.fnClientConnect();
		};
	});