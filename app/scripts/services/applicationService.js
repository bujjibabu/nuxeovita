'use strict';

angular.module('vita')
  .factory('applicationService', function($q, $http) {
    var applicationService = {};
    applicationService.pageNumberObject=null;
    applicationService.DynamicPath=null;
    return applicationService;
  });
