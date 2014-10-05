angular.module( 'fleasify', [
  'templates-app',
  'templates-common',
  'fleasify.home',
  'fleasify.about',
  'fleasify.login',
  'ui.router',
  'lbServices'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | fleasify' ;
    }
  });
})

;
