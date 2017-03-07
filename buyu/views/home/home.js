/**
 * Created by hxsd on 2016/9/28.
 */
myapp.controller('homeCtrl',function($scope,$ionicSideMenuDelegate){

    //点击标题滑出副标题导航栏
    $scope.subheadOn=function(){
        $('#subhead_home').slideToggle()
    };


});