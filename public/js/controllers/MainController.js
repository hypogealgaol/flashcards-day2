app.controller('MainController', function ($scope, FlashCardsFactory) { //factory injection

	$scope.categories = [
		'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	]; 

	 FlashCardsFactory.getFlashCards().then(function(data) {
	 	//get response data as JSON, getflashCards gives an array
	 	$scope.flashCards = data;  ///simply get the flashcards as data
	 })

    console.log(FlashCardsFactory); 



    //default
	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
		}
	}

	$scope.getCategoryCards = function(category) {
		FlashCardsFactory.getFlashCards(category)
		.then(function(data) { //promise 
			$scope.flashCards = data; //send the data filtered by category from our factory. 
		})
	}

	$scope.resetCategory = function() {
		FlashCardsFactory.getFlashCards().then(function(data) {
			$scope.flashCards = data; 
		})
	}
});