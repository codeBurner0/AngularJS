var app=angular.module("myModule",[]);
app.controller("myController",function($scope){
    $scope.name="Hello! My name is Ankit Anand";
    $scope.name2="welcome";
    $scope.obj={name:'Ankit',rollNo:09,sec:'D'};
    $scope.list=["Ankit","Anand","Anuj","Sahil"];
    
})