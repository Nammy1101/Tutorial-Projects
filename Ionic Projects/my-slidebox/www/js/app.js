(function(){
   
var app = angular.module('starter', ['ionic'])

app.controller('SlideCtrl', function($scope){
   
   $scope.slides = [];
   for(var i = 1; i <= 5; i++){
       $scope.slides.push({
          title: 'Slide #' + i,
          description: 'This is the slide number ' + i 
       });
   }
   
   $scope.activeSlide = 0;
   $scope.setSlide = function(index){
     $scope.activeSlide = index;  
   };
    
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
}());