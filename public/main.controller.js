app.controller('MainController', function ($scope, FlashCardsFactory) { //factory injection

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
});