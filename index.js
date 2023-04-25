var app = angular.module("indexModule", ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
            .when("/courses", {
                templateUrl: "templates/course.html",
                controller: "courseController"
            })
            .when("/faculty", {
                templateUrl: "templates/faculty.html",
                controller: "facultyController"
            });
    });
   