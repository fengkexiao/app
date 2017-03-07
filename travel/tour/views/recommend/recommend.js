/**
 * Created by hxsd on 2016/9/29.
 */
angular.module("myapp").controller("recommendCtrl", function ($scope,$ionicSideMenuDelegate,$http,$ionicPopup) {

    $scope.toggle = function() {
        $ionicSideMenuDelegate.toggleRight();
    };
    $scope.datas=[
        {"title":"巴西旅行笔记","city":"里约热内卢","imgsrc":"images/be1.jpg","person":"1"},
        {"title":"江南的水乡","city":"乌镇","imgsrc":"images/be2.jpg","person":"2"},
        {"title":"大海的","city":"三亚","imgsrc":"images/be3.jpg","person":"4"},
        {"title":"欧洲旅行笔记","city":"威尔士城堡","imgsrc":"images/be4.jpg","person":"3"}
    ];
    //$scope.imgsrc={"background-image" : "url(images/banner1.jpg)"};
    $scope.select= function (index) {
        $scope.imgsrc={"background-image" : "url(images/banner"+(index+1)+".jpg)"};

    };


    $scope.smallimgsrc= function (indeximg) {
        var string={"background-image" : "url("+indeximg+")"};
        return string;
    };
    $scope.showAlert = function () {
        $ionicPopup.alert({
            title: '提示',
            template: '不好意思只有这些数据!',
            buttons: [{text:"确定"}]
        });
    };
    $scope.showSorry = function () {
        $ionicPopup.alert({
            title: '提示',
            template: '不好意思该功能还没有完善!',
            buttons: [{text:"确定"}]
        });
    };
    $scope.num=1;
    $scope.loadMore = function(){
        // 使用ajax请求服务器端的商品数据
        $http.get("host807782665.hk01.user88.com/app/tour/data/inde.json")
            .success(function(data){

                if($scope.num==2){
                    $scope.showAlert();
                }else{
                    // 将返回的data追加到products数组上
                    // 下面的语法相当于在$scope.products上调用push(data)方法
                    Array.prototype.push.apply($scope.datas,data);

                }
                $scope.num++;
            })
            .finally(function(){
                // 通知框架，上拉刷新结束
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };
    $scope.teams = [
        { id: 0, name: "Red",  players:[
            { id:1, username:"城市"},
            { id:2, username:"建筑"},
            { id:3, username:"民俗"}
        ]},

        { id: 1, name: "Blue", players:[
            { id:4, username:"美食"},
            { id:5, username:"宗教"},
            { id:6, username:"艺术"}
        ]},

        { id: 2, name: "Green", players:[
            { id:7, username:"海岛"},
            { id:8, username:"动物"},
            { id:9, username:"奇观"}
        ]},

        { id: 3, name: "Yellow", players:[
            { id:10, username:"亚洲"},
            { id:11, username:"欧洲"},
            { id:12, username:"大洋洲"}
        ]},

        { id: 4, name: "Orange", players:[
            { id:13, username:"休闲"},
            { id:14, username:"文化"},
            { id:15, username:"探险"}
        ]},

        { id: 5, name: "Purple", players:[
            { id:16, username:"运动"},
            { id:17, username:"蜜月"},
            { id:18, username:"亲子"}
        ]}
    ];



})