(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.food = "";
    $scope.checkStatus = function() {
      var lunch = $scope.food;
      if (lunch.length == 0) {
       $scope.msg = "Please enter data";
       return -1;
     }
      var lunchArr = lunch.split(",")
      var count = 0;
      for(var i = 0; i < lunchArr.length; i++) {
        if(lunchArr[i] === ""){
          count = count + 1;
        }
      }
      var total = lunchArr.length - count;
      if(total > 3) {
        $scope.msg = "Too Much!";
      }else {
        $scope.msg = "Enjoy!";
      }
    };
  }
})();
