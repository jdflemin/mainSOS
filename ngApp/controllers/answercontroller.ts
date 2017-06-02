namespace mainsos.Controllers {

  export class AnswerController {
    private question;
    private answers;
    //private answer;
    public newAnswer = {
      aDate: Date.now(),
      questionId: this.question,
      aContent: '',
      userId: '',  //this to be updated when we see what token will be as it will auto populate with who is logged in
      usefulCount: 0,
      bestAnswer: false
    }

    constructor(private questionService, private answerService, private commentService, private $stateParams, private $state) {
      this.questionService.getOne($stateParams.id).then((data) => {
          this.question = data;
          this.listAnswers();
      });
    }

    public listAnswers() {
      console.log("questionId" + this.question._id);
      this.answers = this.answerService.getAllbyQuestion(this.question._id);
    }

    public findAnswerComments(answerId) {
      console.log("sendAnswerIdToComment" + answerId);
      this.$state.go('comments', {id: answerId});
    }
}
  export class CommentController {
    private answer
    private comments;
    //private comment;
    public newComment = {
      cDate: Date.now(),
      answerId: this.answer,
      aComment: '',
      userId: '',
      likeCount: 0
    }

    constructor(private answerService, private commentService, private $stateParams){
      this.answerService.getOne($stateParams.id).then((data) => {
          this.answer = data;
          this.listComments();
      });
    }


    public listComments() {
      console.log("answerId" + this.answer._id);
      this.comments = this.commentService.getAllbyAnswer(this.answer._id);
    }

 }
}
// public addAnswer() {
//   this.newAnswer.aDate = Date.now();
//   this.answerService.add(this.newAnswer);
//   this.listAnswers();
// }
//
// public addComment(answerID) {
//   this.newComment.cDate = Date.now();
//   this.newComment.answerId = answerID;
//   this.commentService.add(this.newComment);
// }

// public usefulAnswer(answerId) {
//   let tempAnswer = this.answerService.getOne(answerId);
//   tempAnswer.usefulCount++;
//   this.updateAnswer(tempAnswer);
//   this.listAnswers();
// }
//
// public setBestAnswer(answerID) {
//   let tempAnswer = this.answerService.getOne(answerID);
//   tempAnswer.bestAnswer = true;
//   this.updateAnswer(tempAnswer);
//   this.listAnswers();
// }
//
// public likeComment(commentID){
//   let tempComment = this.commentService.getOne(commentID);
//   tempComment.likeCount++;
//   this.updateComment(tempComment);
// }
//
// public updateAnswer(answer) {
//   this.answerService.update(answer);
// }
//
// public updateComment(comment) {
//   this.commentService.update(comment);
// }
