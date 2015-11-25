angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {


  $scope.blueLed  = false;
  $scope.greenLed = false;
  $scope.redLed = false;

  postLedAction = function(led,action){
    $.post('http://192.168.0.106:3000/action/'+led+'/'+action);
  }

  $scope.toggleChangeBlue = function() {

    if($scope.blueLed == false){
      $scope.blueLed = true;
      postLedAction('blue','on');
    }else{
      $scope.blueLed = false;
      postLedAction('blue','off');
    }
  }

    $scope.toggleChangeGreen = function() {

    if($scope.greenLed == false){
      $scope.greenLed = true;
      postLedAction('green','on');
    }else{
      $scope.greenLed = false;
      postLedAction('green','off');
    }
  }

  $scope.toggleChangeRed = function() {

    if($scope.redLed == false){
      $scope.redLed = true;
      postLedAction('red','on');
    }else{
      $scope.redLed = false;
      postLedAction('red','off');
    }
  }    
 
});
