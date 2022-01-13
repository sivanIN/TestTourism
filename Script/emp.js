var app = angular.module('tourism',['ngRoute'])

app.config(function($routeProvider){
    $routeProvider
    .when('/',{
       templateUrl:"HomePage.html"
    })
    
})

app.controller('empCtrl',function($scope,$http){
    

    $http(
        {
            method:"GET",
            url:"/modal/emp.json"
        }
    ).then((response)=>{
        
        $scope.records=response.data;
        
    })
})


app.controller('cardCtrl',function($scope,$http){
    

    $http(
        {
            method:"GET",
            url:"/modal/cards.json"
        }
    ).then((response)=>{
        
        $scope.records=response.data;
        
    })
})



app .controller('navCtrl',  function($scope) {
    
    $scope.myFunc = function() {
      alert("hello")
    };
    $scope.myFunc2 = function() {
        alert("hell")
      };
      $scope.myFunc3 = function() {
        alert("hel")
      };
  });
