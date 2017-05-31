namespace mainsos.Controllers {

  export class QuestionController {
    private lesson;
    private questions;
    //private question;
    // public newQuestion = {
    //   qTitle: '',
    //   qContent: '',
    //   qDate: Date.now(),
    //   lessonID: '',
    //
    // }
    // public clickCount = 0;
    // public userId= '';


    constructor(private lessonServices, private questionService, private $stateParams, private $state) {
      console.log($stateParams.id);
      lessonServices.getOne($stateParams.id).then((data) => {
          this.lesson = data;
          this.listQuestions();
        })
    }

    public listQuestions() {
      console.log(this.lesson);
      this.questions = this.questionService.getAllByLesson(this.lesson._id);
    }

    // public redirectToAnswers(question) {
    //   console.log(question._id);
    //   this.$state.go('answers', {id: question._title});
    // }

    // public addQuestions(question) {
    //   this.newQuestion = this.questionService.add({
    //     lessonID: this.newQuestion.lessonID,
    //     qTitle: this.newQuestion.qTitle,
    //     qContent: this.newQuestion.qContent,
    //     qDate: this.newQuestion.qDate = Date.now()
    //   })
    //   this.listQuestions();
    // }
    //
    // public updateQuestion(question) {
    //   this.questionService.update(question);
    // }
    //
    // public delete(Id) {
    //   this.questionService.delete(Id)
    //     .then((data) => {
    //       this.questions = this.questionService.getAll();
    //     });
    // }
    //
    // public questionClickCount(questionId) {
    //   let questionUptick = this.questionService.getOne(questionId);
    //   questionUptick.clickCount++;
    //   this.updateQuestion(questionUptick);
    // }

    // public open() {
    //   this.newQuestion = this.$state.go('answers', {id: this.question._id});
    // }

    // public getQuestionLessonTitle(title) {
    //   this.lesson = this.questionService.query({title: this.lesson._title});
    // }
  }
}
