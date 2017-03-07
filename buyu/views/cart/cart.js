/**
 * Created by hxsd on 2016/9/29.
 */
myapp.controller('cartCtrl',function($scope){
    $scope.cart=[
        {
            "shopName":"趣艺工坊",
            "checked":false,
            "goods":[
                {
                    "goodsName":"纯手工制作木质时钟精致家具装饰摆件",
                    "pic":"images/cart_01.jpg",
                    "price":150.00,
                    "number":1,
                    "checked":false
                },
                {
                    "goodsName":"木质蓝牙音箱包邮实木家具装饰摆件",
                    "pic":"images/cart_02.jpg",
                    "price":119.00,
                    "number":2,
                    "checked":true
                },
                {
                    "goodsName":"装饰木雕，独特趣味设计家具装饰摆件",
                    "pic":"images/cart_03.jpg",
                    "price":120.00,
                    "number":0,
                    "checked":false
                }
            ]
        },
        {
            "shopName":"邻街纸艺",
            "checked":false,
            "goods":[
                {
                    "goodsName":"纯手工制作木质时钟精致家具装饰摆件",
                    "pic":"images/cart_04.jpg",
                    "price":89.00,
                    "number":2,
                    "checked":true
                },
                {
                    "goodsName":"木质蓝牙音箱包邮实木家具装饰摆件",
                    "pic":"images/cart_05.jpg",
                    "price":189.00,
                    "number":1,
                    "checked":false
                }
            ]
        },
        {
            "shopName":"纸来我往",
            "checked":true,
            "goods":[
                {
                    "goodsName":"纯手工制作木质时钟精致家具装饰摆件",
                    "pic":"images/cart_06.jpg",
                    "price":289.00,
                    "number":3,
                    "checked":true
                }
            ]
        }

    ];

    //点击选择按钮
    $scope.shopChecked=function(shop){
        shop.checked=!shop.checked;
        if(shop.checked==true){
            for(var i=0;i<shop.goods.length;i++){
                shop.goods[i].checked=true
            }
        }else {
            for(var i=0;i<shop.goods.length;i++){
                shop.goods[i].checked=false;
            }
        }
    };
    $scope.goodsChecked=function(shop,goods){
        goods.checked=!goods.checked;
        for(var i=0;i<shop.goods.length;i++){
            if(shop.goods[i].checked==false){
                shop.checked=false;
                return;
            }
            shop.checked=true;
        }
    };


    //点击加减按钮，数量加减;点击删除按钮，删除商品
    $scope.reduce=function(goods){
        goods.number--;
        if (goods.number<=0) goods.number=0;
    };
    $scope.add=function(goods){
        goods.number++;
    };
    $scope.delete=function(shop,index){
        shop.goods.splice(index,1)
    };

    //全选按钮点击
    $scope.allCheck=false;
    $scope.allChecked=function(){
        $scope.allCheck=!$scope.allCheck;
        if($scope.allCheck){
            for(var i=0;i<$scope.cart.length;i++){
                $scope.cart[i].checked=true;
                for(var j=0;j<$scope.cart[i].goods.length;j++){
                    $scope.cart[i].goods[j].checked=true;
                }
            }
        }else {
            for(var i=0;i<$scope.cart.length;i++){
                $scope.cart[i].checked=false;
                for(var j=0;j<$scope.cart[i].goods.length;j++){
                    $scope.cart[i].goods[j].checked=false;
                }
            }
        }

    };


    //总金额统计
    $scope.totalMoney=function(){
        var total=0;
        for(var i=0;i<$scope.cart.length;i++){
            for(var j=0;j<$scope.cart[i].goods.length;j++){
                if($scope.cart[i].goods[j].checked){
                    total+=$scope.cart[i].goods[j].price*$scope.cart[i].goods[j].number;
                }
            }
        }
        return total;
    }


});