 
    // <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>


// var myApp=angular.module("myModule",[]);

// myApp.controller("myController", function($scope){
//     var employee={
//         firstName:"david",
//         lastName:"Hastings",
//         gender:"Male"
//     }
    // $scope.message="anguarjs application"
//     $scope.employee=employee
// })
var myApp=angular
                .module("myModule",[])
                .controller("myController",function($scope){
                    // var employee={firstName:"david",
                    //             lastName:"Hastings",
                    //             gender:"Male",
                    //             profilepic:"/images/img1.jpg"
                    //         };
                    //         $scope.employee=employee;
                    //         $scope.message="anguarjs application"
                    var employees=[
                        {firstName:"david",lastName:"Hastings",gender:"Male",profilepic:"/images/img1.jpg",salary:5023000.3246273,dateOfBirth: new Date("November 23 1980"),city:"london"},
                        {firstName:"emma",lastName:"watson",gender:"feMale",profilepic:"/images/img1.jpg",salary:60000.234700,dateOfBirth: new Date("December 13 1989"),city:"milan"},
                        {firstName:"nick",lastName:"jonas",gender:"Male",profilepic:"/images/img1.jpg",salary:30000.3458,dateOfBirth: new Date("January 15 1980"),city:"palermo"},
                        {firstName:"david",lastName:"wilson",gender:"Male",profilepic:"/images/img1.jpg",salary:70000.237,dateOfBirth: new Date("November 10 1984"),city:"venice"},
                        {firstName:"tyler",lastName:"Hastings",gender:"feMale",profilepic:"/images/img1.jpg",salary:40000.7,dateOfBirth: new Date("February 19 1990"),city:"newyork"},
                        {firstName:"amber",lastName:"heard",gender:"feMale",profilepic:"/images/img1.jpg",salary:500009.328,dateOfBirth: new Date("March 2 2000"),city:"canada"},
                        {firstName:"harry",lastName:"styles",gender:"Male",profilepic:"/images/img1.jpg",salary:44000.23,dateOfBirth: new Date("April 3 1989"),city:"delhi"},
                        {firstName:"emma",lastName:"clark",gender:"feMale",profilepic:"/images/img1.jpg",salary:45000.34,dateOfBirth: new Date("May 22 1996"),city:"mumbai"},

                    ];
                    var countries=[
                        {
                            name:"uk",
                            cities:[
                                {name:"london"},
                                {name:"manchester"},
                                {name:"birminghan"},
                            ]
                        },
                        {
                            name:"india",
                            cities:[
                                {name:"delhi"},
                                {name:"hyderabad"},
                                {name:"bangalore"},
                            ]
                        },
                        {
                            name:"italy",
                            cities:[
                                {name:"rome"},
                                {name:"florence"},
                                {name:"venice"},
                                {name:"milan"},
                                {name:"palermo"},

                            ]
                        },
                    ];
                    $scope.employees=employees;
                    $scope.countries=countries;

                    var technologies=[
                        {name:"java",likes:0,dislikes:0},
                        {name:".net",likes:0,dislikes:0},
                        {name:"powerbi ",likes:0,dislikes:0},
                        {name:"devops",likes:0,dislikes:0},
                    ]
                    $scope.technologies=technologies;
                    $scope.incrementLikes=function(technology){
                        technology.likes++;
                    }
                    $scope.incrementDislikes=function(technology){
                        technology.dislikes++;
                    }
                    $scope.rowLimit=3;
                    $scope.sortColumn="firstName"
                    
                });