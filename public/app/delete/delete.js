/**
 * Created by Pavel on 15/03/2016.
 */
var app = angular.module('sample-app');

app.config(function($stateProvider){
  $stateProvider.state('delete',{
    parent:'layout',
    url:'/delete/:id',
    templateUrl:'app/delete/delete.html',
    //vlastni scope pro zobrazeni
    controller: function($scope, $stateParams,$state, contactsService){
/*      contactsService.delete($stateParams.id)
        .then(function(contact){
          $scope.contact=contact;
          $state.go('home');
        });*/

      //TODO: DELETE
      // po pokliku na delete delete
      $scope.delete = function() {
        contactsService.delete($scope.contact)
          .then(function () {
            $state.go('home')
          });
      }

    }
  })
});
