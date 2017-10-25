app.directive('installGame', function(){
	return{
		restrict: 'E',
		scope : {},
		templateUrl: 'js/directives/installGame.html',
		link: function(scope, element, attributes) {
			scope.buttonText = "Install",
			scope.installed = false,
			scope.download = function() {
				element.toggleClass('btn-active')
				if(scope.installed) {
					scope.buttonText = "Install";
					scope.installed = false;
				} else {
					scope.buttonText = "Uninstall";
					scope.installed = true;
				}
			}
		}
	};
});
		