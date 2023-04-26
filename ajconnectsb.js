var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope, $http) {
        function getAllEmployees() {
            $http.get('http://localhost:8080/getAllEmpList', {
                withCredentials: true
            }).then(function (response) {
                $scope.employees = response.data;
                console.log($scope.employees);
            });
        }
        getAllEmployees();
        // delete an employee
        $scope.deleteclick = function (empId) {
            $http.delete('http://localhost:8080/deleteEmp/' + empId, {
                withCredentials: true
            }).then(function (response) {
                console.log(response);
                getAllEmployees();
                var index = $scope.employees.findIndex(function (e) {
                    return e.id === empId;
                });
                if (index !== -1) {
                    $scope.employees.splice(index, 1);
                }
            }, function (error) {
                console.log(error);
            });
        };

        $scope.toggleForm2 = function (emp) {
            console.log("toggleForm2 function started");
            console.log(emp);
            $scope.myVar = !$scope.myVar;
            $scope.selectedEmp = {
                id: "",
                empname: "",
                location: "",
                mobileno: "",
                designation: ""
            };
            angular.copy(emp, $scope.selectedEmp);

            console.log($scope.selectedEmp);
            console.log("toggleForm2 function ended");
        };


        //update employee details

        $scope.updateEmp = function (selectedEmp) {
            console.log("updateEmp method entered");
            console.log("emp details below");
            console.log(selectedEmp);
            $http.put('http://localhost:8080/updateEmp/' + selectedEmp.id, selectedEmp, {
                withCredentials: true
            }).then(function (response) {
                console.log("updateEmp method successfull");
                console.log(response);
                getAllEmployees();
                $scope.selectedEmp = null;
                console.log("updateEmp method ended");
            }, function (error) {
                console.log(error);
                console.log("updateEmp method ended");
            });
        }
        document.getElementById("submitBtn").addEventListener("click", function () {
            document.getElementById("myForm").style.display = "none";
        });


        //add an employee
        $scope.addEmpForm = false;
        $scope.toggleForm1 = function () {
            $scope.addEmpForm = !$scope.addEmpForm;
        }

        $scope.addEmp = function (emp) {
            $http.post('http://localhost:8080/addEmp', emp, {
                withCredentials: true
            }).then(function (response) {
                console.log(response);
                getAllEmployees();
                $scope.emp = {}; // clear form after successful submit
            }, function (error) {
                console.log(error);
            });
        };
        $scope.sample = [{
            id: '1',
            name: 'Bangalore'
        }, {
            id: '2',
            name: 'Chennai'
        }, {
            id: '3',
            name: 'Kolkata'
        }, {
            id: '4',
            name: 'Mumbai'
        }, {
            id: '5',
            name: 'Delhi'
        }, {
            id: '6',
            name: 'Pune'
        }];
        
        // myModule.config($routeProvider,function($routeProvider){
        //     $routeProvider
        //     .when('/first-mesg',{
        //         template:'<strong>this is the first message</strong>'
        //     })
        //     .when('/second-mesg',{
        //         template:'<i>this is the second message</i>'
        //     })
        // })

    });
