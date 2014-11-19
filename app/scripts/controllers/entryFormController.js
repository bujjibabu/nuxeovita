'use strict';

/**
 * @ngdoc function
 * @name vita.controller:entryFormController
 * @description
 * # entryFormController
 * Controller of the vita
 */
angular.module('vita')
	.controller('entryFormController', function($scope,$http,applicationService) {
		$scope.efc = {};

		$scope.pageNum = applicationService.pageNumberObject;
		$scope.efc.pageNumber = $scope.pageNum;
		$scope.efc.currentPath = applicationService.DynamicPath;

		$scope.efc.fnSubmitPersonal = function(data) {
			/*var formData = new FormData();
			var CitizenShip= $('.CitizenShip').val();
			var Relationship= $('.Relationship').val();

			formData.append("username", "Groucho");
			formData.append("CitizenShip", CitizenShip);
			formData.append("Relationship", Relationship);*/
			$scope.efc.saveBascicform();
		};

		$scope.efc.saveBascicform = function() {
var formData = new FormData(); 
var CitizenShip= $('.CitizenShip').val();
var Relationship= $('.Relationship').val();   
formData.append("CitizenShip", CitizenShip);
formData.append("Relationship", Relationship);
formData.append("path", $scope.efc.currentPath);
$.ajax({
  url: 'http://192.168.208.88:8082/vita/services/document/save',
  data: formData,
  processData: false,
  contentType: false,
  type: 'POST',
  success: function(data){
  	$scope.efc.pageNumber = 2;
    //alert(data);
  }
});


			/*$http({'method': 'POST', 'url': 'http://192.168.208.88:8082/vita/services/document/save', 'data':data})
				.success(function(result) {
					console.log('suuuuuuuuuuuuuuuuuuuuuuuuuuuuccccccccccccc');
				})
				.error(function(result){
				});*/
			};



/*		$scope.efc.fnSubmitFormDetails = function() {
			$scope.efc.pageNumber = 3;
		};
		$scope.efc.fnCreateAccount = function() {
			$scope.efc.pageNumber = 4;
		};
		$scope.efc.fnSubmitDashboard = function() {
			$scope.efc.pageNumber = 5;
		};
		$scope.efc.fnSubmitMoreDetails = function() {
			//$scope.efc.pageNumber=6;
		};*/


/*		$scope.wc.fnWorkflowFirstStep = function() {
			var data = {"params":{"start":true,"id":"Family"}};
				$http({'method': 'POST', 'url': 'http://192.168.208.88:8081/nuxeo/api/v1/path'+$scope.wc.path+'/@op/REST_TASK', 'data':data})
				.success(function(result) {
					var currentTaskId = result.entries[0].title.split('.');
					$scope.showFirstPage = currentTaskId[0];
					applicationService.pageNumberObject=$scope.showFirstPage;
					console.log('first next step',result);
					if(result){
						$location.path('/entryForm');
					}
				})
				.error(function(result){
					alert('first next step error');
				});
		};*/

/*		$scope.efc.fnSubmitPersonal = function() {
			$scope.efc.pageNumber = 2;
		};
		$scope.efc.fnSubmitFormDetails = function() {
			$scope.efc.pageNumber = 3;
		};
		$scope.efc.fnCreateAccount = function() {
			$scope.efc.pageNumber = 4;
		};
		$scope.efc.fnSubmitDashboard = function() {
			$scope.efc.pageNumber = 5;
		};
		$scope.efc.fnSubmitMoreDetails = function() {
			//$scope.efc.pageNumber=6;
		};*/
/*		$scope.efc.fnCreateClient = function() {
			$scope.efc.client = new nuxeo.Client({
				baseURL: 'http://192.168.208.88:8081/nuxeo',
				automationPath: 'site/automation/',
				username: 'Administrator',
				password: 'Administrator'
			});
		};
		$scope.efc.fnClientConnect = function() {
			$scope.efc.client.connect(function(error, client) {
				if (error) {
					// cannot connect
					throw error;
				}else{
					// OK, the returned client is connected
					console.log('Client is connected: ' + client.connected);
					$scope.efc.fnGetDetails();
				}				
			});
		};
		$scope.efc.fnGetDetails = function() {
			$scope.efc.client.header('X-NXDocumentProperties', "*");
			$scope.efc.client.request('path/default-domain/UserWorkspaces/Administrator/Test')
				.get(function(error, data) {
					if (error) {
						// something went wrong
						throw error;
					}
					console.log(JSON.stringify(data))
					//console.log('Fetched ' + root + ' document')
				});
		};
		$scope.efc.fnInit=function(){
			$scope.efc.fnCreateClient();
			$scope.efc.fnClientConnect();
		};
		$scope.efc.fnInit();*/
	});