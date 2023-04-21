var app = angular.module("indexModule", ['ngRoute'])
    .config(function ($routeProvider) {
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
            .otherwise({
                redirectTo: '/home'
            });

        console.log("Route configuration:", $routeProvider);

    });
   