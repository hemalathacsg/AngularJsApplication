
// $http.get('localhost:8080/getAllEmpList')

// $http.get('localhost:8080/getProdOfCustById/4')
// .then(function(response) {
//     $scope.product = response.data;
//     console.log($scope.product)
// });


var myApp = angular.module("myModule", [])
    .controller("myController", function ($scope, $http) {

        // retrieve all employees
        $http.get('http://localhost:8080/getAllEmpList', {
            withCredentials: true
        }).then(function (response) {
            $scope.employees = response.data;
            console.log($scope.employees);
        });

        // delete an employee
        $scope.deleteclick = function (empId) {
            $http.delete('http://localhost:8080/deleteEmp/' + empId, {
                withCredentials: true
            }).then(function (response) {
                console.log(response);
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

        //update an employee
        $scope.updateclick=function(emp){
            $http.put('http://localhost:8080/updateEmp/'+empId,{
                withCredentials:true
            }).then(function (response){
                console.log()
            }
            )
        }

    });
