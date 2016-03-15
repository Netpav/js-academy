/**
 * Created by Pavel on 03/03/2016.
 */

var app = angular.module('sample-app');

app.config(function($stateProvider){
  $stateProvider.state('layout',{
    //pouziti abstract --- znovupouziti
    // nesmi byt zaroven url a abstract
    abstract:true,
    templateUrl:'app/layout/layout.html'
  })
});



