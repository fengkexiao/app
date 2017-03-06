/**
 * Created by hxsd on 2016/10/5.
 */
angular.module("myapp").
controller("detailCtrl", function ($scope, $stateParams) {




    var id = $stateParams.id;
    var title = $stateParams.title;

    $scope.titled=title;
    $scope.cs=id;
    $scope.cc=false;
    $scope.jia= function () {
        $scope.cs++;
        $scope.cc=true;
    }


})