/**
 * Created by hxsd on 2016/9/28.
 */

myapp.controller('productsCtrl',function($scope,$http,$ionicScrollDelegate){

    $scope.products=[
        {
            "imgUrl":"images/product_01.jpg",
            "titleH3":"工艺精美",
            "titleH4":"现代中国风",
            "price":149.00
        },
        {
            "imgUrl":"images/product_02.jpg",
            "titleH3":"手工艺",
            "titleH4":"现代中国风",
            "price":129.00
        },
        {
            "imgUrl":"images/product_03.jpg",
            "titleH3":"草木不然",
            "titleH4":"现代中国风",
            "price":109.00
        },
        {
            "imgUrl":"images/product_04.jpg",
            "titleH3":"精美礼盒",
            "titleH4":"现代中国风",
            "price":119.00
        },
        {
            "imgUrl":"images/product_05.jpg",
            "titleH3":"民间纸艺",
            "titleH4":"现代中国风",
            "price":169.00
        },
        {
            "imgUrl":"images/product_06.jpg",
            "titleH3":"精致陶瓷",
            "titleH4":"现代中国风",
            "price":159.00
        }
    ];
    //上拉加载更多商品
    $scope.loadMore=function(){
        $http.get('views/products/products.json').success(function(data){
            Array.prototype.push.apply($scope.products,data)
        }).finally(function(){
            $scope.$broadcast('scroll.infiniteScrollComplete')
        })
    };

    //点击回到顶部
    $scope.toTop=function(){
        $ionicScrollDelegate.scrollTop(true);
    };

    //点击搜索按钮，弹出搜索框
    $scope.subheadOn=function(){
        $('#subhead_products').slideToggle()
    }

});