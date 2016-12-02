describe('App.viewMain', function(){

	beforeEach(function(){
		angular.mock.module('App.viewMain')
		angular.mock.inject(function(_balance_){
			balance = _balance_
		})
	})
	describe('viewMain factory', function () {
		describe('Sucess', function () {
				it('should return 1', function(){
					var arr = [2,1,1,1,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('La boule la plus lourde est la numéro 1. Ce résultat a été trouvé en 3 itérations.');
				})
				it('should return 2', function(){
				var arr = [1,2,1,1,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('La boule la plus lourde est la numéro 2. Ce résultat a été trouvé en 3 itérations.');
				})
				it('should return 3', function(){
					var arr = [1,1,2,1,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('La boule la plus lourde est la numéro 3. Ce résultat a été trouvé en 3 itérations.');
				})
				it('should return 4', function(){
					var arr = [1,1,1,2,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('La boule la plus lourde est la numéro 4. Ce résultat a été trouvé en 3 itérations.');
				})
				it('should return 5', function(){
					var arr = [1,1,1,1,2,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('La boule la plus lourde est la numéro 5. Ce résultat a été trouvé en 3 itérations.');
				})
				it('should return 6', function(){
					var arr = [1,1,1,1,1,2,1,1];
					expect(balance.testBoule(arr)).to.be.eql('La boule la plus lourde est la numéro 6. Ce résultat a été trouvé en 3 itérations.');
				})
				it('should return 7', function(){
					var arr = [1,1,1,1,1,1,2,1];
					expect(balance.testBoule(arr)).to.be.eql('La boule la plus lourde est la numéro 7. Ce résultat a été trouvé en 3 itérations.');
				})
				it('should return 8', function(){
					var arr = [1,1,1,1,1,1,1,2,1];
					expect(balance.testBoule(arr)).to.be.eql('La boule la plus lourde est la numéro 8. Ce résultat a été trouvé en 4 itérations.');
				})
		});
		describe('Error', function () {

				it('should return 0', function(){
					var arr = [1,1,1,1,1,1,1,1];
					expect(balance.testBoule(arr)).to.be.eql('Il n\'y pas de boule lourde. Ce résultat a été trouvé en 1 itérations.');
				})

		});
	});
	describe('viewMain controller', function () {

	});
});
