(function(){
var app = angular.module('app', ['ionic'])

app.controller('AppCtrl',function($q, $scope){
    
    function add(x,y){
       var q = $q.defer();
       setTimeout(function(){
           var result = x + y;
           if(result >= 0){
               q.resolve(x + y);
           }else {
               q.reject('negative value: ' + result);
           }
           
        }, 100);
        return q.promise;
    }
    
    var startTime = Date.now();
    var promise = add(5,2);
    promise
    .then(function(result){
        return add(result, -10);
    })
    .then(function(result){
        return add(result, 3);
    })
    .then(function(result){
        $scope.result = result;
    }).catch(function(failure){
       $scope.failure = failure; 
    })
    .finally(function(){
        $scope.elapsedTime = Date.now() - startTime;
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
}());