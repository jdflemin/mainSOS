var mainsos;
(function (mainsos) {
    var Services;
    (function (Services) {
        var QuestionService = (function () {
            function QuestionService($resource, $window) {
                this.$resource = $resource;
                this.$window = $window;
                this.QUESTION_RESOURCE = this.$resource('http://localhost:3002/api/v1/questions/:id');
                this.LESSON_QUESTION_RESOURCE = this.$resource('http://localhost:3002/api/v1/questions/lessons/:id/questions');
                this.SEARCH_RESOURCE = this.$resource('http://localhost:3001/api/v1/questions/search/:search');
                this.CRUD_QUESTION_RESOURCE = this.$resource('http://localhost:3003/api/v1/questions/:id');
            }
            QuestionService.prototype.getAll = function () {
                return this.QUESTION_RESOURCE.query();
            };
            QuestionService.prototype.getOne = function (id) {
                return this.QUESTION_RESOURCE.get({ id: id }).$promise;
            };
            QuestionService.prototype.getAllByLesson = function (lessonID) {
                return this.LESSON_QUESTION_RESOURCE.query({ id: lessonID });
            };
            QuestionService.prototype.searchQuestionContent = function (keywords) {
                return this.SEARCH_RESOURCE.query({ search: keywords });
            };
            QuestionService.prototype.add = function (question) {
                return this.CRUD_QUESTION_RESOURCE.save(question).$promise;
            };
            QuestionService.prototype.update = function (question) {
                return this.CRUD_QUESTION_RESOURCE.save({ id: question._id }, question).$promise;
            };
            QuestionService.prototype.delete = function (id) {
                return this.CRUD_QUESTION_RESOURCE.delete({ id: id }).$promise;
            };
            QuestionService.prototype.showAllQuestions = function () {
                return this.$window.location.reload();
            };
            return QuestionService;
        }());
        Services.QuestionService = QuestionService;
        angular.module('mainsos').service('questionService', QuestionService);
    })(Services = mainsos.Services || (mainsos.Services = {}));
})(mainsos || (mainsos = {}));
