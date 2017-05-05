angular.module('starter.controllers', [])
  .controller('actionsheetCtrl', ['$scope', '$ionicActionSheet', '$timeout', function ($scope, $ionicActionSheet, $timeout) {
    $scope.show = function () {

      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '重设密码' },
          { text: '验证码登录' }
        ],
        destructiveText: '申诉',
        // titleText: 'Modify your album',
        cancelText: '取消',
        cancel: function () {

        },
        buttonClicked: function (index) {
          return true;
        }
      });

      $timeout(function () {
        hideSheet();
      }, 2000);

    };
  }])


  .controller('actionsheetCtl', ['$scope', '$timeout', '$ionicBackdrop', function ($scope, $timeout, $ionicBackdrop) {

    $scope.action = function () {
      $ionicBackdrop.retain();
      $timeout(function () {    //默认让它1秒后消失
        $ionicBackdrop.release();
      }, 1000);
    };
  }])


  .controller("myhomeCtrl", function ($scope, $ionicSlideBoxDelegate) {
    $scope.index = 0;
    $scope.go = function (index) {
      $ionicSlideBoxDelegate.slide(index);
    }
    $scope.go_changed = function (index) {
      console.log(index)
    }
  })


  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
    $scope.loginData = {};
    // $ionicModal.fromTemplateUrl('templates/login.html', {
    //   scope: $scope
    // }).then(function (modal) {
    //   $scope.modal = modal;
    // });
    $scope.closeLogin = function () {
      $scope.modal.hide();
    };
    $scope.login = function () {
      $scope.modal.show();
    };
    $scope.doLogin = function () {
      console.log('Doing login', $scope.loginData);
      $timeout(function () {
        $scope.closeLogin();
      }, 1000);
    };
  })

  .controller('PlaylistsCtrl', function ($scope) {
    $scope.playlists = [
      { title: '已完成', id: 1 },
      { title: '未完成', id: 2 },
      { title: '其他', id: 3 },
      { title: '学习', id: 4 },
      { title: '工作', id: 5 },
      { title: '其他', id: 6 }
    ];
  })

  .controller('PlaylistCtrl', function ($scope, $stateParams) {
  })




  .controller('listCtrl', function ($scope) {
    $scope.group = "分类";
    for (var i = 0; i < 4; i++) {
      $scope.group = {
        items: ["紧急且重要", "重要不紧急", "紧急不重要", "不紧急不重要"],
        show: false
      };
    }

    /*
     * if given group is the selected group, deselect it
     * else, select the given group
     */
    $scope.toggleGroup = function (group) {
      group.show = !group.show;
    };
    $scope.isGroupShown = function (group) {
      return group.show;
    };

  })

  .controller('PopupCtrl', function ($scope, $ionicPopup) {
    $scope.showPopup = function () {
      $scope.data = {}
      // 自定义弹窗
      var myPopup = $ionicPopup.show({
        template: '<ion-radio ng-model="choice" ng-value="A"> 期末复习</ion-radio> <ion-radio ng-model="choice" ng-value="B">教学培训</ion-radio> <ion-radio ng-model="choice" ng-value="C">自定义</ion-radio>',
        title: '标签',
        //  subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [
          { text: '取消' },
          {
            text: '确定',
            type: 'button-calm',
            onTap: function (e) {
              if (!$scope.data.wifi) {
                // 不允许用户关闭，除非输入 wifi 密码
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          },
        ]
      });
      myPopup.then(function (res) {
        console.log('Tapped!', res);
      });
    };

    //  confirm 对话框
           $scope.showConfirm = function() {
             var confirmPopup = $ionicPopup.confirm({
               title: '优先级',
               template: '<ion-radio ng-model="choice" ng-value="A"> 高优先级</ion-radio> <ion-radio ng-model="choice" ng-value="B">低优先级</ion-radio>',
             buttons: [
          { text: '取消' },
          {
            text: '确定',
            type: 'button-calm',
          }]
            });
             confirmPopup.then(function(res) {
               if(res) {
                 console.log('You are sure');
               } else {
                 console.log('You are not sure');
               }
             });
           };
           //  alert（警告） 对话框
           $scope.showAlert = function() {
             var alertPopup = $ionicPopup.alert({
               title: '时间',
               template: '<ion-radio ng-model="choice" ng-value="A"> 准时</ion-radio> <ion-radio ng-model="choice" ng-value="B">提前5分钟</ion-radio> <ion-radio ng-model="choice" ng-value="A"> 提前半小时</ion-radio> <ion-radio ng-model="choice" ng-value="B">自定义</ion-radio>',
             buttons: [
          { text: '取消' },
          {
            text: '确定',
            type: 'button-calm',
          }]
            });
             alertPopup.then(function(res) {
               console.log('Thank you for not eating my delicious ice cream cone');
             });
           };
  })


app.controller('finishCtrl', function ($scope, $http) {

  $http({
    method: 'post',
    url: 'http://123.56.31.2:3000/task/getdonetask/'
  })
    .then(function successCallback(response) {
      if (response.data.code == 200) {
      $scope.task_enddate = response.data.msg[1].task_enddate;
      $scope.tomato_count = response.data.msg[2].tomato_count;
      }
    },
    function errorCallback(response) {
      // 请求失败执行代码
      if (response.data.code == 500) {
        alert(response.data.msg);
      }
    });

})


app.controller('nameCtrl',function($scope, $http){
$scope.nameApp=function(){
    data1={login_name:$scope.login_name};
 $http({
    method:'post',
    url:'http://123.56.31.2:3000/user/register/',
    data:data1
    }).success(function(data1){
    if(data1.code==500){
    alert(data1.msg);
    }else if(data1.code==200){
     alert(data1.msg);
    }
});
}
})

app.controller('phoneCtrl',function($scope, $http){
$scope.phoneApp=function(){
    data1={phone_number:$scope.phone_number};
 $http({
    method:'post',
    url:'http://123.56.31.2:3000/user/register/',
    data:data1
    }).success(function(data1){
    if(data1.code==500){
    alert(data1.msg);
    }else if(data1.code==200){
     alert(data1.msg);
    }
});
}
})

app.controller('passwordCtrl',function($scope, $http){
$scope.passwordApp=function(){
    data1={password:$scope.password};
 $http({
    method:'post',
    url:'http://123.56.31.2:3000/user/register/',
    data:data1
    }).success(function(data1){
    if(data1.code==500){
    alert(data1.msg);
    }else if(data1.code==200){
     alert(data1.msg);
    }
});
}
})

app.controller('loginCtrl',function($scope,$http){
	$scope.loginApp=function(){
	data1={phone_number:$scope.phone_number,password:$scope.password};

	 $http({
    method:'post',
    url:'http://123.56.31.2:3000/user/login/',
    data:data1
    })
     .success(function(data2){
    if(data2.code==500){
    alert('登录错误');
    }else if(data2.code==200){
    // $scope.name=data2.msg[0].uname;
    // $scope.umoney=data2.msg[0].umoney;
    }
    });
	}
});





// app.controller('finishCtrl',function($scope,$http){
//     $scope.starter=function(){
//     data1={phone_number:$scope.phone_number,password:$scope.password};
//      $http({
//     method:'post',
//     url:'http://123.56.31.2:3000/finish/',
//     data:data1
//     })
//      .then(function(data2){
//     if(data2.code==500){
//     alert('登录错误');
//     }else{
//     $scope.name=data2.msg[0].uname;
//     $scope.umoney=data2.msg[0].umoney;
//     }
//     });
//     }
// });