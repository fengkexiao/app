
angular.module("myapp").controller("destinationCtrl", function ($scope,$http,$ionicPopup,$ionicSlideBoxDelegate) {

    $scope.imgs=[
        {"english":"atsckhl","city":"里约热内卢","imgsrc":"images/be1.jpg","chinese":"一个地方"},
        {"english":"locaktinn","city":"乌镇","imgsrc":"images/be2.jpg","chinese":"一个地方"},
        {"english":"earction","city":"三亚","imgsrc":"images/be3.jpg","chinese":"一个地方"},
        {"english":"casktrfg","city":"威尔士城堡","imgsrc":"images/be4.jpg","chinese":"一个地方"}
    ];
    $scope.imgsl=[
        {"english":"atsckhl","country":"马来西亚","imgsrc":"images/banner1.jpg","chinese":"2个目的地"},
        {"english":"locaktinn","country":"新加坡","imgsrc":"images/banner2.jpg","chinese":"3个目的地"},
        {"english":"earction","country":"英国","imgsrc":"images/banner3.jpg","chinese":"6个目的地"},
        {"english":"casktrfg","country":"德国","imgsrc":"images/banner4.jpg","chinese":"8个目的地"}
    ];
    $scope.showAlert = function () {
        $ionicPopup.alert({
            title: '提示',
            template: '不好意思只有这些数据!',
            buttons: [{text:"确定"}]
        });
    };
    $scope.num=1;
    $scope.loadMore = function(){
        // 使用ajax请求服务器端的商品数据
        $http.get("host807782665.hk01.user88.com/app/tour/data/img.json")
            .success(function(data){

                if($scope.num==2){
                    $scope.showAlert();
                }else{
                    // 将返回的data追加到products数组上
                    // 下面的语法相当于在$scope.products上调用push(data)方法
                    Array.prototype.push.apply($scope.imgs,data);

                }
                $scope.num++;
            })
            .finally(function(){
                // 通知框架，上拉刷新结束
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };

    $scope.num1=1;
    $scope.loadMore1 = function(){
        // 使用ajax请求服务器端的商品数据
        $http.get("host807782665.hk01.user88.com/app/tour/data/imgsl.json")
            .success(function(data){

                if($scope.num1==2){
                    $scope.showAlert();
                }else{
                    // 将返回的data追加到products数组上
                    // 下面的语法相当于在$scope.products上调用push(data)方法
                    Array.prototype.push.apply($scope.imgsl,data);

                }
                $scope.num1++;
            })
            .finally(function(){
                // 通知框架，上拉刷新结束
                $scope.$broadcast("scroll.infiniteScrollComplete");
            });
    };
    $scope.flag=true;
    $scope.se= function (index) {
        if(index==0){
            $scope.flag=true;
        }else{
            $scope.flag=false;
        }
    }
    $scope.tiao= function (index) {
        if(index==0){
            $ionicSlideBoxDelegate.slide(index,1000);
            $scope.flag=true;
        }else{
            $ionicSlideBoxDelegate.slide(index,1000);
            $scope.flag=false;
        }

    }




})/**
 * Created by Administrator on 2016/10/2.
 */
