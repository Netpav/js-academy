/**
 * Created by Pavel on 03/03/2016.
 */

var app = angular.module('sample-app');

app.config(function($stateProvider){
  $stateProvider.state('show',{
    parent:'layout',
    url:'/show/:id',
    templateUrl:'app/show/show.html',
    //vlastni scope pro zobrazeni
    controller: function($scope, $stateParams, contactsService){

      contactsService.find($stateParams.id)
        .then(function(contact){
          $scope.contact=contact;
        });

      //$scope.contact = contactsService.find( $stateParams.id);

    }
  })
});



