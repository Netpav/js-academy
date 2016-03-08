/**
 * Created by Pavel on 03/03/2016.
 */

var app = angular.module('sample-app');

app.config(function($stateProvider){
  $stateProvider.state('edit',{
    parent:'layout',
    url:'/edit/:id',
    templateUrl:'app/edit/edit.html',
    //vlastni scope pro zobrazeni
    controller: function($scope, $stateParams, contactsService){
      $scope.contact = contactsService.find( $stateParams.id);
      // po pokliku na save update
      $scope.save = function(){
        contactsService.update($scope.contact);
        $state.go('show',{id: $scope.contact.id});
      };
    }
  })
});

