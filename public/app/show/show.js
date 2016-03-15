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
    //TODO: K cemu $state
    controller: function($scope, $stateParams,$state, contactsService){

      contactsService.find($stateParams.id)
        .then(function(contact){
          $scope.contact=contact;
        });

/* TODO: DELETE
     // po pokliku na delete delete
      $scope.delete = function() {
        contactsService.delete($scope.contact)
          .then(function () {
            $state.go('home')
          });
      }*/

      //$scope.contact = contactsService.find( $stateParams.id);

    }
  })
});



