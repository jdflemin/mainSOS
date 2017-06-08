var mainsos;
(function (mainsos) {
    var Services;
    (function (Services) {
        var AnswerService = (function () {
            function AnswerService($resource, $window) {
                this.$resource = $resource;
                this.$window = $window;
                this.ANSWER_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/:id');
                this.QUESTION_ANSWER_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/questions/:id/answers');
                this.SEARCH_RESOURCE = this.$resource('http://localhost:3001/api/v1/answers/search/:search');
                this.CRUD_ANSWER_SERVICE = this.$resource('http://localhost:3003/api/v1/answers/:id');
                this.ANSWER_BYDATE_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/:Date');
            }
            AnswerService.prototype.getAll = function () {
                return this.ANSWER_RESOURCE.query();
            };
            AnswerService.prototype.getOne = function (id) {
                return this.ANSWER_RESOURCE.get({ id: id }).$promise;
            };
            AnswerService.prototype.getAllbyQuestion = function (questionId) {
                return this.QUESTION_ANSWER_RESOURCE.query({ id: questionId });
            };
            AnswerService.prototype.searchAnswerContent = function (keywords) {
                return this.SEARCH_RESOURCE.query({ search: keywords }).$promise;
            };
            AnswerService.prototype.add = function (answer) {
                return this.CRUD_ANSWER_SERVICE.save(answer).$promise;
            };
            AnswerService.prototype.update = function (answer) {
                return this.CRUD_ANSWER_SERVICE.save({ id: answer._id }, answer).$promise;
            };
            AnswerService.prototype.delete = function (id) {
                console.log("this is the id " + id);
                return this.CRUD_ANSWER_SERVICE.delete({ id: id }).$promise;
            };
            AnswerService.prototype.answerShowAll = function () {
                return this.$window.location.reload();
            };
            AnswerService.prototype.getAllbyDate = function (sentDate) {
                return this.ANSWER_BYDATE_RESOURCE.get({ Date: sentDate }).$promise;
            };
            return AnswerService;
        }());
        Services.AnswerService = AnswerService;
        angular.module('mainsos').service('answerService', AnswerService);
    })(Services = mainsos.Services || (mainsos.Services = {}));
})(mainsos || (mainsos = {}));
