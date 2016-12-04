angular.module ('App.viewMain', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {

  $routeProvider.when('/viewMain', {
    templateUrl: 'viewMain/viewMain.html',
    controller: 'viewMainCtrl'
  });
}])
.controller('viewMainCtrl', function( $scope, balance)  {
  $scope.test = [2,1,1,1,1,1,1,1];
	$scope.resultat = balance.testBoule($scope.test);
})
.factory ('balance', function () {
	var factory = {
			testBoule : testBoule
		};
	return factory;

	function testBoule (tirage) {
		const nombre=1;
    var tab = tirage;
		var tab1;
		var tab2;
		var i = 0;
		while (1){
    //  console.log(tab);
    		if (tab.length % 2 !== 0){
    			tirage.push(nombre);
    		}
      // console.log(tab);
			tab1 = tab.slice(0, tab.length / 2);
			tab2 =  tab.slice(tab.length / 2, tab.length);
			poid1 = tab1.reduce((a, b)=> a + b, 0);
			poid2 = tab2.reduce((a, b)=> a + b, 0);
			i++;

      // console.log(tab);
      // console.log(poid1);
      // console.log(poid2);
			if (poid2 === poid1){
				return 'Il n\'y pas de boule lourde. Ce résultat a été trouvé en ' + i + ' itérations.';
			}else{
				if(poid2 < poid1){
					tab = tab1;
				}else{
					tab = tab2;
				}
				if (tab.length === 1){
					//console.log('La boule la plus lourde est la numéro ' + (tirage.indexOf(parseInt(tab, 10)) + 1)
					//+ '. Ce résultat a été trouvé en ' + i + ' itérations.');
					return 'La boule la plus lourde est la numéro ' + (tirage.indexOf(parseInt(tab, 10)) + 1)
					+ '. Ce résultat a été trouvé en ' + i + ' itérations.';
				}
			}
		}
	}
});
