var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(courseServices, $window, $state, $uibModal) {
                this.courseServices = courseServices;
                this.$window = $window;
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.newCourse = {
                    name: ''
                };
                this.courseID = '';
                this.updatedCourse = {
                    _id: '',
                    name: '',
                    icon: '',
                    isEnabled: true
                };
                this.courses = courseServices.getAll();
            }
            HomeController.prototype.delete = function (course) {
                var _this = this;
                this.course = this.courseServices.delete(course._id).then(function () { return _this.listCourses(); });
            };
            HomeController.prototype.addCourse = function () {
                var _this = this;
                this.newCourse = this.courseServices.add({
                    name: this.newCourse.name,
                }).then(function () { return _this.listCourses(); });
            };
            HomeController.prototype.courseActivation = function (course) {
                var _this = this;
                this.courseServices.getOne(course._id).then(function (data) {
                    console.log(_this.course);
                    _this.course = data;
                    if (data.isEnabled === true) {
                        _this.course.isEnabled = false;
                        _this.courseUpdate();
                    }
                    else {
                        _this.course.isEnabled = true;
                        _this.courseUpdate();
                    }
                });
            };
            HomeController.prototype.courseUpdate = function () {
                var _this = this;
                console.log(this.course);
                this.courseServices.edit({
                    _id: this.course._id,
                    name: this.course.name,
                    isEnabled: this.course.isEnabled,
                    icon: this.course.icon,
                }).then(function () {
                    _this.listCourses();
                });
            };
            HomeController.prototype.listCourses = function () {
                this.courses = this.courseServices.getAll();
            };
            HomeController.prototype.redirectToLessons = function (courseId) {
                this.$state.go('lessons', { id: courseId });
            };
            HomeController.prototype.showEditModalCourse = function (course) {
                var _this = this;
                var modal = this.$uibModal.open({
                    templateUrl: '/ngApp/views/editCourse.html',
                    controller: editModalCourseController,
                    controllerAs: 'controller',
                    resolve: {
                        course: function () { return course; }
                    },
                    size: 'md',
                });
                modal.closed.then(function () { return _this.courses = _this.courseServices.getAll(); });
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var editModalCourseController = (function () {
            function editModalCourseController(course, courseServices, $uibModalInstance) {
                var _this = this;
                this.courseServices = courseServices;
                this.$uibModalInstance = $uibModalInstance;
                this.courseServices.getOne(course._id).then(function (foundCourse) {
                    _this.courses = foundCourse;
                });
            }
            editModalCourseController.prototype.editCourse = function () {
                var _this = this;
                this.courseServices.update({
                    _id: this.courses._id,
                    name: this.courses.name,
                    isEnabled: this.courses.isEnabled,
                    icon: this.courses.icon
                }).then(function () { _this.close(); });
            };
            editModalCourseController.prototype.close = function () {
                this.$uibModalInstance.close();
            };
            return editModalCourseController;
        }());
        Controllers.editModalCourseController = editModalCourseController;
        var TestController = (function () {
            function TestController(testService) {
                this.weightclasses = testService.getAll();
            }
            return TestController;
        }());
        Controllers.TestController = TestController;
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
