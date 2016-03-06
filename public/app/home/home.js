/**
 * Created by Pavel on 03/03/2016.
 */

var app = angular.module('sample-app');

app.config(function($stateProvider){
  $stateProvider.state('home',{
    url:'/',
    templateUrl:'app/home/home.html'
  })
});



