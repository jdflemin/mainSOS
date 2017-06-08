var mainsos;
(function (mainsos) {
    var Services;
    (function (Services) {
        var CourseServices = (function () {
            function CourseServices($resource, $window) {
                this.$resource = $resource;
                this.$window = $window;
                this.COURSE_RESOURCE = this.$resource('http://localhost:3004/api/v1/courses/:id');
            }
            CourseServices.prototype.getAll = function () {
                return this.COURSE_RESOURCE.query();
            };
            CourseServices.prototype.getOne = function (id) {
                console.log(id);
                return this.COURSE_RESOURCE.get({ id: id }).$promise;
            };
            CourseServices.prototype.add = function (course) {
                return this.COURSE_RESOURCE.save(course).$promise;
            };
            CourseServices.prototype.edit = function (course) {
                console.log(course);
                return this.COURSE_RESOURCE.save({ id: course._id }, course).$promise;
            };
            CourseServices.prototype.delete = function (id) {
                return this.COURSE_RESOURCE.delete({ id: id }).$promise;
            };
            CourseServices.prototype.update = function (course) {
                return this.COURSE_RESOURCE.save({ id: course._id }, course).$promise;
            };
            CourseServices.prototype.reShow = function () {
                return this.$window.location.reload();
            };
            return CourseServices;
        }());
        angular.module('mainsos').service('courseServices', CourseServices);
    })(Services = mainsos.Services || (mainsos.Services = {}));
})(mainsos || (mainsos = {}));
