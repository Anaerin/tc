angular.module('tc').directive('addChannel', ['settings', function(settings) {

	function link(scope) {
		scope.value = '';
		
		scope.keypress = function(event) {
			if (event.which === 13) {
				if (scope.value.charAt(0) !== '#') {
					scope.value = '#'+scope.value;
				}
				settings.channels.push(scope.value);
				scope.value = '';			
			}
		};
	}

	return {
		restrict: 'E',
		templateUrl: 'resources/add-channel/add-channel.html',
		link: link
	}
}]);