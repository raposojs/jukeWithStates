juke.config(function($stateProvider){
	$stateProvider.state('albums', {
		templateUrl: './js/ui-router/albumsControlTemplate.html',
		url: '/albums',
		controller: 'AlbumsCtrl'
	});

	$stateProvider.state('album', {
		templateUrl: './js/ui-router/albumControlTemplate.html',
		url: '/albums/:id',
		controller: function($scope, $stateParams) {
			$scope.albumId = $stateParams.id
		}
	});

	$stateProvider.state('artists', {
		templateUrl: './js/ui-router/artistsControlTemplate.html',
		url: '/artists',
		controller: "ArtistsCtrl"
	})
})

// juke.config(function ($stateProvider) {
//   // define a something state
//   $stateProvider.state('something', {
//     // that renders the following 
//     
//     // for the /hello route
//     url: '/hello'
//   });
// });