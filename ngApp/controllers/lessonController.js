var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var LessonsController = (function () {
            function LessonsController(courseServices, lessonServices, $stateParams, $state, questionService, answerService, commentService, $uibModal) {
                var _this = this;
                this.courseServices = courseServices;
                this.lessonServices = lessonServices;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.questionService = questionService;
                this.answerService = answerService;
                this.commentService = commentService;
                this.$uibModal = $uibModal;
                this.newLesson = {
                    title: '',
                    courseId: ''
                };
                this.trendAnswers = [];
                this.trendQuestions = [];
                courseServices.getOne($stateParams.id).then(function (data) {
                    _this.Course = data;
                    _this.listLessons();
                });
            }
            LessonsController.prototype.listLessons = function () {
                this.lessons = this.lessonServices.getAllCourseLessons(this.Course._id);
            };
            LessonsController.prototype.redirectToQuestions = function (lessonId) {
                this.$state.go('questions', { id: lessonId });
            };
            LessonsController.prototype.addLesson = function () {
                var _this = this;
                this.newLesson = this.lessonServices.add({
                    title: this.newLesson.title,
                    courseId: this.$stateParams.id,
                }).then(function () { return _this.lessonServices.reShow(); });
            };
            LessonsController.prototype.delete = function (course) {
                var _this = this;
                this.lesson = this.lessonServices.delete(course._id).then(function () { return _this.lessonServices.reShow(); });
            };
            LessonsController.prototype.showEditLessonModal = function (lesson) {
                var _this = this;
                var modal = this.$uibModal.open({
                    templateUrl: '/ngApp/views/editLesson.html',
                    controller: editModalLessonController,
                    controllerAs: 'controller',
                    resolve: {
                        lesson: function () { return lesson; }
                    },
                    size: 'md',
                });
                modal.closed.then(function () { _this.listLessons(); });
            };
            LessonsController.prototype.getTrendingQuestions = function () {
                var _this = this;
                this.setNeededDate();
                this.answerService.getAllbyDate().then(function (data) {
                    _this.trendAnswers = data;
                    _this.getCommentsbyDate();
                });
            };
            LessonsController.prototype.setNeededDate = function () {
                this.referenceDate = Date.now();
                this.referenceDate.setHours(this.referenceDate.getHours() - 24);
            };
            LessonsController.prototype.getCommentsbyDate = function () {
                var _this = this;
                this.commentService.getAllbyDate().then(function (data) {
                    _this.trendComments = data;
                    _this.addtoTrendingAnswers();
                    _this.addtoTrendingQuestions();
                });
            };
            LessonsController.prototype.addtoTrendingAnswers = function () {
                var _this = this;
                for (var i = 0; i < this.trendComments.length; i++) {
                    this.answerService.getOne(this.trendComments[i].answerId).then(function (data) {
                        var tempAnswer = data;
                        var pushThis = true;
                        for (var j = 0; j < _this.trendAnswers.length; j++) {
                            if (_this.trendAnswers[j]._id == tempAnswer._id) {
                                pushThis = false;
                            }
                        }
                        if (pushThis) {
                            _this.trendAnswers.push(tempAnswer);
                        }
                    });
                }
            };
            LessonsController.prototype.addtoTrendingQuestions = function () {
                var _this = this;
                for (var i = 0; i < this.trendAnswers.length; i++) {
                    this.questionService.getOne(this.trendAnswers[i].questionId).then(function (data) {
                        var tempQuestion = data;
                        var pushThis = true;
                        for (var j = 0; j < _this.trendQuestions.length; j++) {
                            if (_this.trendQuestions[j]._id == tempQuestion._id) {
                                pushThis = false;
                            }
                        }
                        if (pushThis) {
                            _this.trendQuestions.push(tempQuestion);
                        }
                    });
                }
                console.log('trendQuestions');
            };
            return LessonsController;
        }());
        Controllers.LessonsController = LessonsController;
        var editModalLessonController = (function () {
            function editModalLessonController(lesson, lessonServices, $uibModalInstance) {
                var _this = this;
                this.lessonServices = lessonServices;
                this.$uibModalInstance = $uibModalInstance;
                this.lessonServices.getOne(lesson._id).then(function (foundLesson) {
                    _this.lessons = foundLesson;
                });
            }
            editModalLessonController.prototype.editLesson = function () {
                var _this = this;
                this.lessonServices.update({
                    _id: this.lessons._id,
                    courseId: this.lessons.courseId,
                    title: this.lessons.title
                }).then(function () { _this.close(); });
            };
            editModalLessonController.prototype.close = function () {
                this.$uibModalInstance.close();
            };
            return editModalLessonController;
        }());
        Controllers.editModalLessonController = editModalLessonController;
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
