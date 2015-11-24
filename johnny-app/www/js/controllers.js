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



  $scope.toggleChangeBlue = function() {

    if($scope.blueLed == false){
      $scope.blueLed = true;
      $.post('http://192.168.0.101:3000/action/blue/on');
    }else{
      $scope.blueLed = false;
      $.post('http://192.168.0.101:3000/action/blue/off');
    }
  }

    $scope.toggleChangeGreen = function() {

    if($scope.greenLed == false){
      $scope.greenLed = true;
      $.post('http://192.168.0.101:3000/action/green/on');
    }else{
      $scope.greenLed = false;
      $.post('http://192.168.0.101:3000/action/green/off');
    }
  }

    $scope.toggleChangeRed = function() {

    if($scope.redLed == false){
      $scope.redLed = true;
      $.post('http://192.168.0.101:3000/action/red/on');
    }else{
      $scope.redLed = false;
      $.post('http://192.168.0.101:3000/action/red/off');
    }
  }
 
});
