var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var SearchController = (function () {
            function SearchController(questionService, answerService, $stateParams, $state) {
                this.questionService = questionService;
                this.answerService = answerService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.questions = [];
                this.searchString = $stateParams.search;
                this.searchQuestionContent();
                this.searchAnswers();
                this.searchString = '';
            }
            SearchController.prototype.searchAgain = function () {
                this.searchQuestionContent();
                this.searchAnswers();
                this.searchString = '';
            };
            SearchController.prototype.searchQuestionContent = function () {
                this.questions = this.questionService.searchQuestionContent(this.searchString);
            };
            SearchController.prototype.searchAnswers = function () {
                var _this = this;
                this.answerService.searchAnswerContent(this.searchString).then(function (data) {
                    _this.answers = data;
                    _this.addtoQuestions();
                });
            };
            SearchController.prototype.addtoQuestions = function () {
                var _this = this;
                for (var i = 0; i < this.answers.length; i++) {
                    this.questionService.getOne(this.answers[i].questionId).then(function (data) {
                        var tempQuestion = data;
                        var pushThis = true;
                        for (var j = 0; j < _this.questions.length; j++) {
                            if (_this.questions[j]._id == tempQuestion._id) {
                                pushThis = false;
                            }
                        }
                        if (pushThis) {
                            _this.questions.push(tempQuestion);
                        }
                    });
                }
            };
            SearchController.prototype.redirectToAnswers = function (questionID) {
                this.$state.go('answers', { id: questionID });
            };
            return SearchController;
        }());
        Controllers.SearchController = SearchController;
        angular.module('mainsos').controller('searchController', SearchController);
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
