var mainsos;
(function (mainsos) {
    var Services;
    (function (Services) {
        var CommentService = (function () {
            function CommentService($resource) {
                this.$resource = $resource;
                this.COMMENT_RESOURCES = this.$resource('http://localhost:3002/api/v1/comments/:id');
                this.ANSWER_COMMENT_RESOURCES = this.$resource('http://localhost:3002/api/v1/comments/answers/:id/comments');
                this.CRUD_COMMENT_RESOURCE = this.$resource('http://localhost:3003/api/v1/comments/:id');
                this.COMMENT_BYDATE_RESOURCE = this.$resource('http://localhost:3002/api/v1/comments/:id');
            }
            CommentService.prototype.getAll = function () {
                return this.COMMENT_RESOURCES.query();
            };
            CommentService.prototype.getOne = function (id) {
                return this.COMMENT_RESOURCES.get({ id: id }).$promise;
            };
            CommentService.prototype.getAllbyAnswer = function (answerId) {
                return this.ANSWER_COMMENT_RESOURCES.query({ id: answerId });
            };
            CommentService.prototype.add = function (comment) {
                return this.CRUD_COMMENT_RESOURCE.save(comment).$promise;
            };
            CommentService.prototype.update = function (comment) {
                return this.CRUD_COMMENT_RESOURCE.save({ id: comment._id }, comment).$promise;
            };
            CommentService.prototype.delete = function (id) {
                return this.CRUD_COMMENT_RESOURCE.delete({ id: id }).$promise;
            };
            CommentService.prototype.getAllbyDate = function (sentDate) {
                return this.COMMENT_BYDATE_RESOURCE.get({ Date: sentDate }).$promise;
            };
            return CommentService;
        }());
        Services.CommentService = CommentService;
        angular.module('mainsos').service('commentService', CommentService);
    })(Services = mainsos.Services || (mainsos.Services = {}));
})(mainsos || (mainsos = {}));
