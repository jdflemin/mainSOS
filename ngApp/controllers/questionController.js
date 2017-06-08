var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var QuestionController = (function () {
            function QuestionController(lessonServices, questionService, $stateParams, $state, $uibModal) {
                var _this = this;
                this.lessonServices = lessonServices;
                this.questionService = questionService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.newQuestion = {
                    qTitle: '',
                    qContent: '',
                    qDate: Date.now(),
                    lessonID: this.lesson,
                    clickCount: 0,
                    userId: '',
                    qCodeLink: ''
                };
                console.log($stateParams.id);
                lessonServices.getOne($stateParams.id).then(function (data) {
                    _this.lesson = data;
                    _this.listQuestions();
                    console.log(_this.questions);
                });
            }
            QuestionController.prototype.listQuestions = function () {
                console.log(this.lesson._id);
                this.questions = this.questionService.getAllByLesson(this.lesson._id);
            };
            QuestionController.prototype.redirectToAnswers = function (questionId) {
                this.$state.go('answers', { id: questionId });
            };
            QuestionController.prototype.addQuestions = function (questions) {
                var _this = this;
                this.questionService.add({
                    lessonID: this.$stateParams.id,
                    qTitle: this.newQuestion.qTitle,
                    qContent: this.newQuestion.qContent,
                    qDate: this.newQuestion.qDate,
                    userId: this.newQuestion.userId,
                    clickCount: this.newQuestion.clickCount,
                    qCodeLink: this.newQuestion.qCodeLink
                }).then(function (data) {
                    _this.questionService.lessonID = '';
                    _this.questionService.qTitle = '';
                    _this.questionService.qContent = '';
                    _this.questionService.qDate = Date.now();
                    _this.questionService.userId;
                    _this.questionService.clickCount;
                    _this.questionService.qCodeLink = '';
                    _this.questions.push(data);
                });
                this.listQuestions();
            };
            QuestionController.prototype.deleteQuestion = function (id) {
                var _this = this;
                this.questionService.delete(id)
                    .then(function (data) {
                    _this.questions = _this.questionService.showAllQuestions();
                }).catch(function (err) { return console.log(err); });
            };
            QuestionController.prototype.countUpTick = function (question) {
                console.log("this is the question clickCount is " + question.clickCount);
                question.clickCount += 1;
                this.questionService.update({
                    _id: question._id,
                    qTitle: question.qTitle,
                    qContent: question.qContent,
                    qDate: question.qDate,
                    lessonID: question.lessonID,
                    clickCount: question.clickCount,
                    userId: question.userId,
                    qCodeLink: question.qCodeLink
                });
            };
            QuestionController.prototype.delete = function (ID) {
                var _this = this;
                this.questionService.delete(ID).then(function () { return _this.listQuestions(); });
            };
            return QuestionController;
        }());
        Controllers.QuestionController = QuestionController;
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
