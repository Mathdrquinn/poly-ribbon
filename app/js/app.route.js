angular
  .module('TheApp')
  .config(($httpProvider, $locationProvider, $stateProvider, $urlRouterProvider) => {
    // Clean Url
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
  })
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('layout', {
        url: '',
        abstract: true,
        views: {
          'nav': {
            template: '<ul><li><a ui-sref="layout.home">Home</a></li><li><a ui-sref="layout.about">About</a></li><li><a ui-sref="layout.list">List</a></li></ul>',
          },
          'main': {
            template: '<h3>This is the main view</h3>'
            // controller: 'mainCtrl',
          }
        }
      })
      .state('layout.home', {
        url: '/',
      })
      .state('layout.about', {
        url: '/about',
        views: {
          'nav@': {
            template: '<ul><li><a ui-sref="layout.home">Home</a></li><li><a ui-sref="layout.about">About</a></li><li><a ui-sref="layout.list">List</a></li></ul>',
          },
          'main@': {
            template: '<h3>This is the main view and we are on about</h3>'
            // controller: 'mainCtrl',
          }
        }
      })
    // .state('login', {
    //   url: '/login',
    //   templateUrl: 'views/login.html',
    //   controller: 'appCtrl'
    // })
    // .state('signup', {
    //   url: '/signup',
    //   templateUrl: 'views/signup.html',
    //   controller: 'signupCtrl'
    // })
    // .state('layout', {
    //   url: '/',
    //   abstract: true,
    //   views: {
    //     'main': {
    //       templateUrl: 'tmpl/main.html'
    //     }
    //   }
    // })
    // .state('home', {
    //   url: '/',
    //   views: {
    //     'page': {
    //       templateUrl: 'views/home.html',
    //       controller: 'appCtrl'
    //     }
    //   },
    //   abstract: true
    // })
    // .state('home.user', {
    //   parent: 'home',
    //   url: '/user',
    //   views: {
    //     'home-window@home': {
    //       templateUrl: 'views/user.html'
    //     }
    //   }
    // })
});
