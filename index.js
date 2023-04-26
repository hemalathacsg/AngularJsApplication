var app = angular.module("indexModule", ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: "templates/home.html",
            controller: "homeController"
        })
        .when("/courses", {
            templateUrl: "templates/course.html",
            controller: "courseController"
        })
        .when("/faculty", {
            templateUrl: "templates/faculty.html",
            controller: "facultyController"
        })
});
app.controller("homeController", function ($scope) {
    console.log("entered home contoller");
    $scope.message = "home page";
});
app.controller("courseController", function ($scope) {
    console.log("entered course contoller");
    $scope.courses = [".net", "c#", "power bi", "devops"];
});
app.controller("facultyController", function ($scope) {
    console.log("entered employee contoller");
    $scope.employees = ["ethan", "nick", "Caleb", "ambrose", "putin"]
})
