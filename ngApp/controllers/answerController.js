var mainsos;
(function (mainsos) {
    var Controllers;
    (function (Controllers) {
        var AnswerController = (function () {
            function AnswerController(questionService, answerService, commentService, $stateParams, $state, $uibModal) {
                var _this = this;
                this.questionService = questionService;
                this.answerService = answerService;
                this.commentService = commentService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.newAnswer = {
                    aDate: Date.now(),
                    questionId: this.question,
                    aContent: '',
                    userId: '',
                    usefulCount: 0,
                    bestAnswer: false,
                    aCodeLink: '',
                };
                this.newComment = {
                    cDate: Date.now(),
                    answerId: this.answer,
                    cContent: "",
                    userId: "",
                    likeCount: 0
                };
                console.log("Rosa" + $stateParams.id);
                this.answers = this.questionService.getOne($stateParams.id).then(function (data) {
                    _this.question = data;
                    _this.listAnswers();
                });
            }
            AnswerController.prototype.listAnswers = function () {
                console.log("questionId" + this.question._id);
                this.answers = this.answerService.getAllbyQuestion(this.question._id);
            };
            AnswerController.prototype.addAnswer = function (answers) {
                var _this = this;
                this.answerService.add({
                    aDate: Date.now(),
                    questionId: this.$stateParams.id,
                    aContent: this.newAnswer.aContent,
                    userId: this.$stateParams.id,
                    usefulCount: this.newAnswer.usefulCount,
                    bestAnswer: this.newAnswer.bestAnswer,
                    aCodeLink: this.newAnswer.aCodeLink,
                }).then(function (data) {
                    _this.answerService.questionId = '';
                    _this.answerService.aContent = '';
                    _this.answerService.userId = '';
                    _this.answerService.userfulCount = '';
                    _this.answerService.bestAnswer = '';
                    _this.answerService.aCodeLink = '';
                    _this.answers.push(data);
                });
                this.listAnswers();
            };
            AnswerController.prototype.CommentsModal = function (ID) {
                var _this = this;
                console.log("here");
                this.Modal = this.$uibModal.open({
                    templateUrl: '/ngApp/views/commentsModal.html',
                    controller: mainsos.Controllers.CommentsController,
                    controllerAs: 'controller',
                    size: 'lg',
                    resolve: {
                        ID: function () { return ID; }
                    }
                });
                this.Modal.closed.then(function () {
                    _this.listAnswers();
                });
            };
            AnswerController.prototype.showEditAnswerModal = function (answer) {
                var _this = this;
                var modal = this.$uibModal.open({
                    templateUrl: '/ngApp/views/editAnswer.html',
                    controller: editModalAnswerController,
                    controllerAs: 'controller',
                    resolve: {
                        answer: function () { return answer; }
                    },
                    size: 'md'
                });
                modal.closed.then(function () { _this.listAnswers(); });
            };
            AnswerController.prototype.showEditQuestionModal = function (question) {
                var modal = this.$uibModal.open({
                    templateUrl: '/ngApp/views/editQuestion.html',
                    controller: editModalQuestionController,
                    controllerAs: 'controller',
                    resolve: {
                        question: function () { return question; }
                    },
                    size: 'md'
                });
            };
            AnswerController.prototype.countUpTickAnswer = function (answer) {
                answer.usefulCount += 1;
                this.answerService.update({
                    _id: answer._id,
                    aDate: answer.aDate,
                    questionId: answer.questionId,
                    aContent: answer.aContent,
                    userId: answer.userId,
                    usefulCount: answer.usefulCount,
                    bestAnswer: answer.bestAnswer,
                    aCodeLink: answer.aCodeLink,
                });
            };
            return AnswerController;
        }());
        Controllers.AnswerController = AnswerController;
        var editModalAnswerController = (function () {
            function editModalAnswerController(answer, answerService, $uibModalInstance, $stateParams) {
                var _this = this;
                this.answerService = answerService;
                this.$uibModalInstance = $uibModalInstance;
                this.$stateParams = $stateParams;
                this.answerService.getOne(answer._id).then(function (foundAnswer) {
                    _this.answers = foundAnswer;
                });
            }
            editModalAnswerController.prototype.editAnswer = function () {
                var _this = this;
                this.answerService.update({
                    _id: this.answers._id,
                    aDate: this.answers.aDate,
                    questionId: this.answers.questionId,
                    aContent: this.answers.aContent,
                    userId: this.answers.userId,
                    usefulCount: this.answers.usefulCount,
                    bestAnswer: this.answers.bestAnswer,
                    aCodeLink: this.answers.aCodeLink
                }).then(function () { _this.close(); });
            };
            editModalAnswerController.prototype.close = function () {
                this.$uibModalInstance.close();
            };
            return editModalAnswerController;
        }());
        Controllers.editModalAnswerController = editModalAnswerController;
        var editModalQuestionController = (function () {
            function editModalQuestionController(question, $uibModalInstance, questionService, $stateParams) {
                var _this = this;
                this.$uibModalInstance = $uibModalInstance;
                this.questionService = questionService;
                this.$stateParams = $stateParams;
                this.questionService.getOne($stateParams.id).then(function (foundQuestion) {
                    _this.questions = foundQuestion;
                });
            }
            editModalQuestionController.prototype.editQuestion = function () {
                var _this = this;
                this.questionService.update({
                    _id: this.questions._id,
                    qTitle: this.questions.qTitle,
                    qContent: this.questions.qContent,
                    qDate: this.questions.qDate,
                    userID: this.questions.userID,
                    lessonID: this.questions.lessonID,
                    clickCount: this.questions.clickCount,
                    qCodeLink: this.questions.qCodeLink
                }).then(function () {
                    _this.questionService.showAllQuestions();
                }).then(function () { _this.close(); });
            };
            editModalQuestionController.prototype.close = function () {
                this.$uibModalInstance.close();
            };
            return editModalQuestionController;
        }());
        Controllers.editModalQuestionController = editModalQuestionController;
        var CommentsController = (function () {
            function CommentsController(ID, answerService, commentService, $uibModalInstance) {
                var _this = this;
                this.answerService = answerService;
                this.commentService = commentService;
                this.$uibModalInstance = $uibModalInstance;
                console.log(ID);
                answerService.getOne(ID).then(function (data) {
                    _this.answer = data;
                    console.log(_this.answer);
                    _this.listComments();
                });
            }
            CommentsController.prototype.listComments = function () {
                console.log(this.answer._id);
                this.comments = this.commentService.getAllbyAnswer(this.answer._id);
                console.log(this.comments);
            };
            CommentsController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return CommentsController;
        }());
        Controllers.CommentsController = CommentsController;
    })(Controllers = mainsos.Controllers || (mainsos.Controllers = {}));
})(mainsos || (mainsos = {}));
