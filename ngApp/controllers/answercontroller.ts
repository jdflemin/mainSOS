namespace mainsos.Controllers {

  export class AnswerController {
    private question;
    private answers;
    private answer;
    private comments;
    public newAnswer = {
      aDate: Date.now(),
      questionId: this.question,
      aContent: '',
      userId: '',  //this to be updated when we see what token will be as it will auto populate with who is logged in
      usefulCount: 0,
      bestAnswer: false,
      aCodeLink: '',
    }
    public newComment = {
      cDate: Date.now(),
      answerId: this.answer,
      cContent: "",
      userId: "",   //this to be updated when we see what token will be as it will auto populate with who is logged in
      likeCount: 0
  }

    constructor(private questionService, private answerService, private commentService, private $stateParams, private $state, private $uibModal) {
      console.log("Rosa" + $stateParams.id);
      this.answers = this.questionService.getOne($stateParams.id).then((data) => {
          this.question = data;
          this.listAnswers();
      });
    }
//////////Answer Section
    public listAnswers() {
      console.log("questionId" + this.question._id);
      this.answers = this.answerService.getAllbyQuestion(this.question._id);
    }

    public addAnswer(answers) {
      this.answerService.add({
        aDate: Date.now(),
        questionId: this.$stateParams.id,
        aContent: this.newAnswer.aContent,
        userId: this.$stateParams.id,
        usefulCount: this.newAnswer.usefulCount,
        bestAnswer: this.newAnswer.bestAnswer,
        aCodeLink: this.newAnswer.aCodeLink,
      }).then((data) => {
        this.answerService.questionId = '';
        this.answerService.aContent = '';
        this.answerService.userId = '';
        this.answerService.userfulCount = '';
        this.answerService.bestAnswer = '';
        this.answerService.aCodeLink = '';
        this.answers.push(data);
      })
      this.listAnswers();
    }

    public findAnswerComments(answerId) {
      console.log("sendAnswerIdToComment" + answerId);
      this.$state.go('comments', {id: answerId});
    }

    public showEditAnswerModal(answer) {
      let modal = this.$uibModal.open({
        templateUrl: '/ngApp/views/editAnswer.html',
        controller: editModalAnswerController,
        controllerAs: 'controller',
        resolve: {
          answer: () => answer
        },
        size: 'md'
      });
      modal.closed.then(() => {this.listAnswers()});
    }

    public showEditQuestionModal(question) {
        let modal = this.$uibModal.open({
        templateUrl: '/ngApp/views/editQuestion.html',
        controller: editModalQuestionController,
        controllerAs: 'controller',
        resolve: {
          question: () => question
        },
        size: 'md'
      });
    //  modal.closed.then(() => this.questionService.showAllQuestions());
    }

    ////////////////upTick section for answers
      countUpTickAnswer(answer) {
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
        })
      }


    //////////////////////////
}


///////////////Answer Modal for editing the answers
  export class editModalAnswerController {
    public answers;

    constructor(answer, private answerService, private $uibModalInstance, private $stateParams) {
      this.answerService.getOne(answer._id).then((foundAnswer) => {
        this.answers = foundAnswer
      })
      }

    public editAnswer() {
      this.answerService.update({
        _id: this.answers._id,
        aDate: this.answers.aDate,
        questionId: this.answers.questionId,
        aContent: this.answers.aContent,
        userId: this.answers.userId,
        usefulCount: this.answers.usefulCount,
        bestAnswer: this.answers.bestAnswer,
        aCodeLink: this.answers.aCodeLink
      }).then(() => {this.close()});

    }

    public close() {
      this.$uibModalInstance.close();
    }

  }
///////////////////////

///////////////////the question modal for editing the questions
  export class editModalQuestionController {
    public questions;

    constructor(question, private $uibModalInstance, private questionService, private $stateParams){
      this.questionService.getOne($stateParams.id).then((foundQuestion) => {
        this.questions = foundQuestion
      })
    }

    public editQuestion() {
      this.questionService.update({
        _id: this.questions._id,
        qTitle: this.questions.qTitle,
        qContent: this.questions.qContent,
        qDate:this.questions.qDate,
        userID: this.questions.userID,
        lessonID: this.questions.lessonID,
        clickCount: this.questions.clickCount,
        qCodeLink: this.questions.qCodeLink
      }).then(() => {
      this.questionService.showAllQuestions()
      }).then(() => {this.close()});
    }

    public close() {
      this.$uibModalInstance.close();
    }


  }