
app = angular.module('sample-app', ['ui.router']);

app.config(function($urlRouterProvider){
  $urlRouterProvider.otherwise('/');
});

app.controller('SampleAppController', function($scope){
    $scope.appName='MyAngularApp';

    $scope.contacts =[

      {name: 'Donald Black', company: 'Topicware', phone: '6-(880)062-6935', email: 'dblack0@mashable.com', address:'NY, Avenue 55', note: 'Lorem ipsum', jobTitle:'Accountant'},
      {name: 'Frank Little', company: 'Browseblab', phone: '9-(804)406-9373', email: 'flittle2@tumblr.com', address:'NY, Avenue 5',note: 'Lorem ipsum',jobTitle:'Developer'}

    ];
    $scope.contact = $scope.contacts[0];
    //$scope.contact2 = $scope.contacts[1];
});


