// Ionic Starter App
// <script src="js/controllers.js"></script>
// <script src="js/routes.js"></script>
// <script src="js/services.js"></script>
// <script src="js/directives.js"></script>
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
// angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
var app = angular.module("starter", ['ionic', 'starter.controllers', 'starter.services']);
app.config(function($stateProvider) {
	$stateProvider
	.state("name", {
		templateUrl: "name.html"
	})
	.state("area", {
		templateUrl: "area.html"
	})
	.state("phone", {
		templateUrl: "phone.html"
	})
  .state("password", {
		templateUrl: "password.html"
	})
  .state("login", {
		templateUrl: "login.html",
     controller: 'actionsheetCtrl'
	})
  .state("resetpassword", {
		templateUrl: "resetpassword.html"
	})
  .state("home", {
		templateUrl: "home.html",
    controller: 'myhomeCtrl'
	})
   .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.date', {
    url: '/date',
    views: {
      'menuContent': {
        templateUrl: 'templates/date.html'
      }
    }
  })
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  .state('app.email', {
    url: '/email',
    views: {
      'menuContent': {
        templateUrl: 'templates/email.html'
      }
    }
  })
  .state('app.set', {
    url: '/set',
    views: {
      'menuContent': {
        templateUrl: 'templates/set.html'
      }
    }
  })
  .state('app.styleset', {
    url: '/styleset',
    views: {
      'menuContent': {
        templateUrl: 'templates/styleset.html'
      }
    }
  })
   .state('app.remind', {
    url: '/remind',
    views: {
      'menuContent': {
        templateUrl: 'templates/remind.html'
      }
    }
  })
  .state('app.person', {
    url: '/person',
    views: {
      'menuContent': {
        templateUrl: 'templates/person.html'
      }
    }
  })
  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'templates/account.html'
      }
    }
  })
  .state('app.event1', {
    url: '/event1',
    views: {
      'menuContent': {
        templateUrl: 'templates/event1.html'
      }
    }
  })
  .state('app.tomato', {
    url: '/tomato',
    views: {
      'menuContent': {
        templateUrl: 'templates/tomato.html'
      }
    }
  })
  .state('app.tomatoset', {
    url: '/tomatoset',
    views: {
      'menuContent': {
        templateUrl: 'templates/tomatoset.html'
      }
    }
  })
  .state('app.count', {
    url: '/count',
    views: {
      'menuContent': {
        templateUrl: 'templates/count.html'
      }
    }
  })
  .state('app.success', {
    url: '/success',
    views: {
      'menuContent': {
        templateUrl: 'templates/success.html'
      }
    }
  })

  .state('app.fankui', {
      url: '/fankui',
      views: {
        'menuContent': {
          templateUrl: 'templates/fankui.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.task', {
      url: '/task',
      views: {
        'menuContent': {
          templateUrl: 'templates/task.html'
          // controller: 'PlaylistsCtrl'
        }
        }
      })
      .state('app.finish', {
      url: '/finish',
      views: {
        'menuContent': {
          templateUrl: 'templates/finish.html'
          // controller: 'PlaylistsCtrl'
        }
        }
      })
       .state('app.notfinish', {
      url: '/notfinish',
      views: {
        'menuContent': {
          templateUrl: 'templates/notfinish.html'
          // controller: 'PlaylistsCtrl'
        }
        }
      })
       .state('app.other', {
      url: '/other',
      views: {
        'menuContent': {
          templateUrl: 'templates/other.html'
          // controller: 'PlaylistsCtrl'
        }
        }
      })
       .state('app.study', {
      url: '/study',
      views: {
        'menuContent': {
          templateUrl: 'templates/study.html'
          // controller: 'PlaylistsCtrl'
        }
        }
      })
       .state('app.work', {
      url: '/work',
      views: {
        'menuContent': {
          templateUrl: 'templates/work.html'
          // controller: 'PlaylistsCtrl'
        }
        }
      })
  .state('app.playlist', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
}).controller('myCtrl',function($scope,$state){
	$state.go('home');
})

//ionic初始化操作
app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

  

          

// .config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  // $stateProvider

  // setup an abstract state for the tabs directive
  //   .state('name', {
  //   url: '/name',
  //   abstract: true,
  //   templateUrl: 'templates/name.html'
  // })

  // Each tab has its own nav history stack:

  // .state('area', {
  //   url: '/area',
  //   views: {
  //     'area': {
  //       templateUrl: 'templates/area.html',
        // controller: 'DashCtrl'
  //     }
  //   }
  // })

  // .state('phone', {
  //     url: '/phone',
  //     views: {
  //       'phone': {
  //         templateUrl: 'templates/phone.html',
          // controller: 'ChatsCtrl'
    //     }
    //   }
    // })
    // .state('password', {
    //   url: '/password/:chatId',
    //   views: {
    //     'password': {
    //       templateUrl: 'templates/password.html',
          // controller: 'ChatDetailCtrl'
    //     }
    //   }
    // })
    // .state('login', {
    //   url: '/login',
    //   views: {
    //     'login': {
    //       templateUrl: 'templates/login.html',
          // controller: 'HomeCtrl'
  //       }
  //     }
  //   })

  // .state('resetpassword', {
  //   url: '/resetpassword',
  //   views: {
  //     'resetpassword': {
  //       templateUrl: 'templates/resetpassword.html',
        // controller: 'AccountCtrl'
  //     }
  //   }
  // });

  // if none of the above states are matched, use this as the fallback
//   $urlRouterProvider.otherwise('/name');

// });

			 