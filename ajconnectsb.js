


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

    
        $scope.toggleForm2=function(emp){
            console.log(emp);
            $scope.myVar=!$scope.myVar;
            var selectedEmp={  // uncomment this line
                id:"",
                empName:"",
                location:"",
                mobileno:"",
                designation:""
            } // uncomment this line
            $scope.selectedEmp=angular.copy(emp);
            console.log(emp);
            console.log(selectedEmp); // you can now log selectedEmp to the console
        }
        

        $scope.updateEmp = function (empdata) {
            console.log(empdata);
            $http.put('http://localhost:8080/updateEmp/' + empdata.id, empdata, {
                withCredentials: true
            }).then(function (response) {
                console.log(response);
                getAllEmployees();
                $scope.selectedEmp = null;
            }, function (error) {
                console.log(error);
            });
        }
        
        //add an employee
       $scope.addEmpForm=false;
       $scope.toggleForm1=function(){
        $scope.addEmpForm=!$scope.addEmpForm;
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


    });
