angular.module ('App.viewMain', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/viewMain', {
    templateUrl: 'viewMain/viewMain.html',
    controller: 'viewMainCtrl'
  });
}])
.controller('viewMainCtrl', function( $scope, balance)  {
  $scope.boule=function() {
     $scope.boules=[1,1,1,1,1,1,1,1];
  }
  $scope.reset = function() {
    $scope.boule();
    $scope.resultat='';
  }
  $scope.active = function(position) {
    $scope.boule();
    $scope.boules[position]=2;
  }
  $scope.calcule = function() {
    $scope.resultat= balance.testBoule($scope.boules);
  };
})
.factory ('balance', function () {
	var factory = {
			testBoule : testBoule
		};
	return factory;

	function testBoule (tirage) {
		const nombre = 1;
    var tab = tirage;
		var tab1;
		var tab2;
		var i = 0;
		while (1){
  		if (tab.length % 2 !== 0){
  			return 'There is too much or not enough ball.'
  		}
			tab1 = tab.slice(0, tab.length / 2);
			tab2 =  tab.slice(tab.length / 2, tab.length);
			poid1 = tab1.reduce((a, b)=> a + b, 0);
			poid2 = tab2.reduce((a, b)=> a + b, 0);
			i++;
			if (poid2 === poid1){
        return 'There is no heavy ball. This result was found in ' + i +' iterations.'
      }else{
				if(poid2 < poid1){
					tab = tab1;
				}else{
					tab = tab2;
				}
				if (tab.length === 1){
          return 'The heaviest ball is number ' + (tirage.indexOf(parseInt(tab, 10)) + 1)
					+ '. This result was found in ' + i + ' iterations.';
				}
			}
		}
	}
});
