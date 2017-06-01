namespace mainsos.Controllers {

  export class AnswerController {
    private question;
    private answers;
    private comments;
    // public newAnswer = {
    //   aDate: Date.now(),
    //   questionId: this.question._id,
    //   aContent: "",
    //   userId: "",  //this to be updated when we see what token will be as it will auto populate with who is logged in
    //   usefulCount: 0,
    //   bestAnswer: false
    // }
    // public newComment = {
    //   cDate: Date.now(),
    //   answerId: "",
    //   aContent: "",
    //   userId: "",   //this to be updated when we see what token will be as it will auto populate with who is logged in
    //   likeCount: 0

    constructor(private questionService, private answerService, private commentService, private $stateParams){
      //console.log($stateParams.id);
      questionService.getOne($stateParams.id).then((data) => {
          this.question = data;
          this.listAnswers();
      });
    }

    private listAnswers() {
      //console.log(this.question);
      this.answers = this.answerService.getAllbyQuestion(this.question._id);
    }

    private listComments(id) {
      this.comments = this.commentService.getAllbyAnswer(id);
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
  }
}
