/**
 * Created by hxsd on 2016/9/28.
 */
var myapp=angular.module('myapp',['ionic']);
myapp.config(function($stateProvider,$urlRouterProvider){
    $stateProvider.state('tour',{
        url:'/tour',
        templateUrl:'views/tour/tour.html'
    }).state('tabs',{
        url:'/tabs',
        abstract:true,
        templateUrl:'views/tabs/tabs.html'
    }).state('tabs.home',{
        url:'/home',
        views:{"tab-home":{
            templateUrl:'views/home/home.html',
            controller:'homeCtrl'
        }}
    }).state('tabs.homePerson',{
        url:'/homePerson',
        views:{"tab-home":{
            templateUrl:'views/person/person.html',
            controller:'personCtrl'
        }}
    }).state('tabs.community',{
        url:'/community',
        views:{"tab-community":{
            templateUrl:'views/community/community.html',
            controller:'communityCtrl'
        }}
    }).state('tabs.person',{
        url:'/person',
        views:{"tab-community":{
            templateUrl:'views/person/person.html',
            controller:'personCtrl'
        }}
    }).state('tabs.products',{
        url:'/products',
        views:{"tab-products":{
            templateUrl:'views/products/products.html',
            controller:'productsCtrl'
        }}
    }).state('tabs.cart',{
        url:'/cart',
        views:{"tab-cart":{
            templateUrl:'views/cart/cart.html',
            controller:'cartCtrl'
        }}
    }).state('tabs.mine',{
        url:'/mine',
        views:{"tab-mine":{
            templateUrl:'views/mine/mine.html',
            controller:'mineCtrl'
        }}
    });

    $urlRouterProvider.otherwise('/tour');


});

myapp.controller('ContentController',function($scope,$ionicSideMenuDelegate){
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});

