var mainsos;
(function (mainsos) {
    var Services;
    (function (Services) {
        var LessonServices = (function () {
            function LessonServices($resource, $window) {
                this.$resource = $resource;
                this.$window = $window;
                this.LESSON_RESOURCE = this.$resource('http://localhost:3004/api/v1/lessons/:id');
                this.COURSE_LESSON_RESOURCE = this.$resource('http://localhost:3004/api/v1/lessons/courses/:id/lessons');
            }
            LessonServices.prototype.getAll = function () {
                return this.LESSON_RESOURCE.query();
            };
            LessonServices.prototype.getOne = function (id) {
                return this.LESSON_RESOURCE.get({ id: id }).$promise;
            };
            LessonServices.prototype.getAllCourseLessons = function (courseId) {
                return this.COURSE_LESSON_RESOURCE.query({ id: courseId });
            };
            LessonServices.prototype.add = function (lesson) {
                return this.LESSON_RESOURCE.save(lesson).$promise;
            };
            LessonServices.prototype.edit = function (id) {
                return this.LESSON_RESOURCE.post({ id: id }).$promise;
            };
            LessonServices.prototype.update = function (lesson) {
                return this.LESSON_RESOURCE.save({ id: lesson._id }, lesson).$promise;
            };
            LessonServices.prototype.delete = function (id) {
                return this.LESSON_RESOURCE.delete({ id: id }).$promise;
            };
            LessonServices.prototype.reShow = function () {
                return this.$window.location.reload();
            };
            return LessonServices;
        }());
        Services.LessonServices = LessonServices;
        angular.module('mainsos').service('lessonServices', LessonServices);
    })(Services = mainsos.Services || (mainsos.Services = {}));
})(mainsos || (mainsos = {}));
