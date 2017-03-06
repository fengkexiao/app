angular.module("myapp").
controller("photoCtrl", function ($scope,$stateParams) {
    $scope.datas=[
        {"title":"这个是好地方","city":"或许这是一个故事","imgsrc":"images/be5.jpg","person":"1"},
        {"title":"这里有故事","city":"在一个遥远的地方","imgsrc":"images/be2.jpg","person":"2"},
        {"title":"这里有情节","city":"真的还可以继续","imgsrc":"images/be8.jpg","person":"4"},
        {"title":"有一个地方","city":"一场说走就走的旅行","imgsrc":"images/banner2.jpg","person":"3"}
    ];
    $scope.smallimgsrc= function (indeximg) {
        var string={"background-image" : "url("+indeximg+")"};
        return string;
    };
    var title = $stateParams.title;

    $scope.titled=title;


})/**
 * Created by Administrator on 2016/10/4.
 */
