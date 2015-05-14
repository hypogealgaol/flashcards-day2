//we are making factory with ajax request
//FACTORY
app.factory('FlashCardsFactory', function($http) {

    return {
        getFlashCards: function(category) {

            var queryParams = {}; 
            if(category) { //if there is an argument, add it to query params
                queryParams.category = category; 
            }
            return $http.get('/cards', {
                params: queryParams
            }).then(function (response) {
                return response.data; //then in this case is a promise, then is callback to get data
            }); 
        }
    }
});