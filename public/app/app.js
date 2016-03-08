
app = angular.module('sample-app', ['ui.router']);

app.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
});

app.controller('SampleAppController', function($scope){
    $scope.appName='MyAngularApp';

    //$scope.contact2 = $scope.contacts[1];
});


