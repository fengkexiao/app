/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp").controller("mineCtrl", function ($scope,$ionicSideMenuDelegate,$ionicSlideBoxDelegate) {
    $scope.toggle = function() {
        $ionicSideMenuDelegate.toggleRight();
    };


    $scope.flage=true;
    $scope.se= function (index) {
        if(index==0){
            $scope.flage=true;
        }else{
            $scope.flage=false;
        }
    }

    $scope.tiao= function (index) {
        if(index==0){
            $ionicSlideBoxDelegate.slide(index,1000);
            $scope.flage=true;
        }else{
            $ionicSlideBoxDelegate.slide(index,1000);
            $scope.flage=false;
        }

    }

})