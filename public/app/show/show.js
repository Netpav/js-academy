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

       // Delete scope -- usage function for delete
      /* When i click delete, after that come to home page*/
       $scope.delete = function() {
        contactsService
          .delete($stateParams.id)
          .then(function() {
            $state.go('home');
          });
      };
    }
  });
});



