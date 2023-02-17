var app=angular.module("MyMod",[]);
app.controller("myContro2",function($scope){
    $scope.number=0;
});

var app=angular.module("MyMod",[]);
app.controller("myContro2",function($scope){
    $scope.number=0;
    $scope.func=function(){
        $scope.number++;
    };
});


