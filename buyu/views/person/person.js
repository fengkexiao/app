/**
 * Created by hxsd on 2016/10/4.
 */
myapp.controller('personCtrl',function($scope,$http){
    $scope.data=[
        {
            "name":"剑山",
            "comment":"很好的感觉。个人不是很喜欢插花，喜欢盆栽还是插枯枝",
            "img":"images/pic_01.jpg"
        },
        {
            "name":"京点京 ",
            "comment":"真美！两位姐姐一定是快乐的人！",
            "img":"images/pic_02.jpg"
        },
        {
            "name":"夏优优",
            "comment":"专心做好一件事，坚持下去，都会有一个美好的结果",
            "img":"images/pic_03.jpg"
        },
        {
            "name":"髓埒",
            "comment":"艺术使生活更美好！。",
            "img":"images/pic_04.jpg"
        },
        {
            "name":"江励志",
            "comment":"好美很喜欢 慢慢接触 慢慢交融 就是设计 就是生活 就是艺术",
            "img":"images/pic_05.jpg"
        }
    ];
    $scope.readMore=function(){
        $http.get('views/person/person.json').success(function(data){
            Array.prototype.push.apply($scope.data,data)
        })
    }

});