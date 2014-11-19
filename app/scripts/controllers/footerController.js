'use strict';

/**
 * @ngdoc function
 * @name vita.controller:footerController
 * @description
 * # footerController
 * Controller of the vita
 */
angular.module('vita')
  .controller('footerController', function ($rootScope,$timeout){
    var footer=this;
    footer.footerContent='views/footer.html';
  });
