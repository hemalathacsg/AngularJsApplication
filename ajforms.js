var myApp=angular.module("myModule",[])
                    .controller("myController",function($scope){
                        $scope.myVar = false;
    
                        $scope.toggleForm = function() {
                          $scope.myVar = !$scope.myVar;
                        };
                        var message="successfull message";
                        $scope.message=message;
                        var coursedetails=[{name:"java"},
                        {name:"powerbi"},
                        {name:"adf"},
                        {name:".net"},
                        {name:"devops"},
                    ];
                    $scope.coursedetails=coursedetails;
                    $scope.reset=function(){
                        $scope.name="";
                        $scope.email="";
                        $scope.phoneno="";
                        $scope.dateofbirth="";
                        $scope.gender="";
                        $scope.address="";
                        $scope.selectedCourse="";
                    }

                                    });