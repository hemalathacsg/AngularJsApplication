var myApp=angular.module("mainModule",["ngRoute"]);

myApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/first-msg',{
        template: '<strong>this is the first message</strong>'
    })
    .when('/second-msg',{
        template:'<strong>this is the second messasge</strong>'
    })
}])


// myApp.controller("myController",function($scope){
//     $scope.message="angularjs is working fine";
// })