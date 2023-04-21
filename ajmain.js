var myApp=angular.module("mainModule",["ngRoute"]);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/first-msg',{
        template: '<strong>this is the first message</strong>'
        // templateUrl: 'ajconnectsb.html',
        // controller:'mainController'
    })
    .when('/second-msg',{
        template:'<strong>this is the second messasge</strong>'
    });
}]);



// myApp.controller('mainController',[$scope],function($scope){
//     $scope.a=10;
//     $scope.b=20;
// })