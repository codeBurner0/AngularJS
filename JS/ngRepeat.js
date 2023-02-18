var app=angular.module("myModule",[]);
app.controller("myContro",function($scope){
    $scope.lists=["Ankit","Anand","Anuj","Sahil"];
    $scope.obj={name:'Ankit',rollNo:09,sec:'D'};
    $scope.stu_record=[
        {name:'raju',Age:57,Designation:'Driver',Salary:90000},
        {name:'Ankit',Age:22,Designation:'SDE',Salary:10000000},
        {name:'Aman',Age:32,Designation:'Technical trainee',Salary:800000},
        {name:'Madhav',Age:34,Designation:'Intern',Salary:500000},];
});