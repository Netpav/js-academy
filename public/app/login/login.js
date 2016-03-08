/**
 * Created by Pavel on 03/03/2016.
 */

var app = angular.module('sample-app');

app.config(function($stateProvider){
  $stateProvider.state('login',{
    url:'/login',
    templateUrl:'app/login/login.html'
  })
});
