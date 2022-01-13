var app = angular.module('tourism',[''])

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