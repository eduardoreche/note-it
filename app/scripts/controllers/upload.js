'use strict';

/**
 * @ngdoc function
 * @name noteItApp.controller:UploadCtrl
 * @description
 * # UploadCtrl
 * Controller of the noteItApp
 */
angular.module('noteItApp')
.controller('UploadCtrl', ['$scope', 'Upload', 'Firebase', 'FIREBASE_URL', '$firebaseArray', function ($scope, Upload, Firebase, FIREBASE_URL, $firebaseArray) {

  var ref = new Firebase(FIREBASE_URL + '/files');

  $scope.file = null;
  $scope.images = $firebaseArray(ref);

  $scope.myImage = '';
  $scope.myCroppedImage = '';

  var handleFileSelect=function(evt) {
      var file=evt.currentTarget.files[0];
      var reader = new FileReader();
      reader.onload = function (evt) {
        $scope.$apply(function($scope){
          $scope.myImage=evt.target.result;
        });
      };
      reader.readAsDataURL(file);
  };

  angular.element(document.querySelector('#fileInput')).on('change',handleFileSelect);

  $scope.upload = function() {
    _upload($scope.file)
  }

  $scope.cropUpload = function() {
    ref.push({
      image: $scope.myCroppedImage
    }, function(error) {
      console.log("Error: ", error);
    })
  }

  var _upload = function(imageFile) {
    Upload.base64DataUrl(imageFile).then(
      function(base64Urls){
        ref.push({
          image: base64Urls
        },function(error){
          console.log("Error:",error);
        })
      }
    );
  }

}]);
