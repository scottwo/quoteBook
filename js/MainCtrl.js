angular.module('quoteApp')
    .controller('mainCtrl', ['$scope', 'quoteService', function($scope, quoteService) {
        $scope.test = 'Hello';
        $scope.quotes = quoteService.getData();
        $scope.addToggle = false;
        $scope.removeToggle = false;
        $scope.filterToggle = false;
        $scope.removeData = function() {
            quoteService.removeData($scope.removeText);
        };
        
        $scope.addData = function(){
            quoteService.addData({text: $scope.addText, author: $scope.addAuthor});
        };
        
        $scope.filteredText = '';
    }]);