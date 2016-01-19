(function(){

var app = angular.module('starter', ['ionic', 'ngCordova']);

app.controller('DeviceCtrl', function($scope, $cordovaDevice, $ionicPlatform) {
   
    $ionicPlatform.ready(function() {
      $scope.$apply(function(){
          $scope.device = $cordovaDevice.getDevice();
      });
      
   });
    
});

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

}())