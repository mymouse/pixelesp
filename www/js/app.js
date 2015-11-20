// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",   
        abstract: true, 
      templateUrl: "templates/social/menu.html",
      controller: 'AppCtrl'
    })

        .state('tabs', {
    url: '/tabs',
    abstract: true,
    templateUrl: 'templates/social/tabs.html'
  })

    .state('app.feed', {
      url: "/feed",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/feed.html"
        }
      }
    })

    .state('app.start', {
      url: "/start",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/start-fullscreen.html",
          controller: 'EntrarCtrl'
        }
      }
    })

     .state('app.EntrarAdmin', {
      url: "/EntrarAdmin",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/EntrarAdmin.html",
          controller: 'EntrarAdminCtrl'
        }
      }
    })

    .state('app.fgrid', {
      url: "/fgrid",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/friend-grid.html"
        }
      }
    })

    .state('app.flist', {
      url: "/flist",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/friends.html"
        }
      }
    })

    .state('app.newpost', {
      url: "/newpost",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/new-post.html"
        }
      }
    })

    .state('app.email', {
      url: "/email",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/send-email.html"
        }
      }
    })    

    .state('app.profile', {
      url: "/profile",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/profile.html",
        }
      }
    })

    .state('app.timeline', {
      url: "/timeline",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/timeline.html",
        }
      }
    })

    .state('app.editprofile', {
      url: "/editprofile",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/profile-edit.html",
        }
      }
    })

    .state('app.profiletwo', {
      url: "/profiletwo",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/profile2.html",
        }
      }
    })

    .state('app.profilethree', {
      url: "/profilethree",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/profile3.html",
        }
      }
    })

    .state('app.news', {
      url: "/news",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/news.html",
        }
      }
    })

    .state('app.viewpost', {
      url: "/viewpost",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/view-post.html",
        }
      }
    })

    .state('app.viewposttwo', {
      url: "/viewposttwo",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/view-post-2.html",
        }
      }
    })

    .state('app.invite', {
      url: "/invite",
      views: {
        'menuContent' :{
          templateUrl: "templates/social/social-invite-friend.html",
        }
      }
    })
 
 // setup an abstract state for the tabs directive 
 // Each tab has its own nav history stack:
 
 .state('app.inicio', {
 url: '/inicio',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/tab-inicio.html',
     controller: 'NoticiasCtrl',
       
       

 }
 }
 })
 
 .state('app.galeria', {
 url: '/galeria',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/tab-galeria.html',
       

 }
 }
 })
 

 
 .state('app.foro', {
 url: '/foro',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/tab-foro.html',
       

 }
 }
 })

 .state('app.comunidad', {
 url: '/comunidad',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/tab-comunidad.html',
     controller: 'UsuariosCtrl'
         
       

 }
 }
 })


 .state('app.usuario', {
 url: '/comunidad/:UsuarioId',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/usuario.html',
    controller: 'UsuariocomunidadCtrl'
       

 }
 }
 })

 .state('app.usuarios', {
 url: '/usuarios',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/usuarios.html',
     controller:'UsuarioslistsCtrl'
      
       

 }
 }
 })

 .state('app.cadausuario', {
 url: '/usuarios/:UsuarioId',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/cadausuario.html',
    controller: 'UsuarioCtrl'
       

 }
 }
 })

 .state('app.noticias', {
 url: '/noticias',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/noticias.html',
     controller:'NoticiaslistsCtrl'
      
       

 }
 }
 })

 .state('app.cadanoticia', {
 url: '/noticias/:NoticiaId',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/cadanoticia.html',
    controller: 'NoticiaCtrl'
       

 }
 }
 })

  .state('app.registrarse', {
 url: '/registrarse',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/registrarse.html',
      controller:'UsuarioNuevoCtrl'
   
       

 }
 }
 })

   .state('app.admin', {
 url: '/admin',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/admin.html',
      controller:'AdminCtrl'
   
       

 }
 }
 })



  .state('app.crearnoticia', {
 url: '/crearnoticia',
 views: {
        'menuContent' :{
     templateUrl: 'templates/social/crearnoticia.html',
      controller:'NoticiaNuevaCtrl'
   
       

 }
 }
 })

   ;
 
   
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');
});

