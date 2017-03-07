/**
 * Created by 风可削 on 2016/10/2.
 */
angular.module("myapp").controller("marketsCtrl",function($scope,$ionicPopup, $timeout){
    $scope.data1={"img":"images/005_02.png"};
    $scope.showPopup = function () {
        $scope.data = {};

        // 一个精心制作的自定义弹出窗口
        var myPopup = $ionicPopup.show({
            template: '<input type="text" ng-model="data.wifi">',
            title: '请输入你想说的话!',
            subTitle: '（文明用语）',
            scope: $scope,
            buttons: [
                {text: '取消'},
                {
                    text: '<b>保存</b>',
                    type: 'button-positive',
                    onTap: function (e) {
                        if (!$scope.data.wifi) {
                            // 不允许用户关闭，除非输入wifi密码
                            e.preventDefault();
                        } else {
                            return $scope.data.wifi;
                        }
                    }
                }
            ]
        })
    };
    $scope.collection=function(){
        alert("收藏成功")
    };
});