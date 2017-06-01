namespace mainsos.Controllers {

  export class QuestionController {
    private lesson;
    private questions;
    //public question;
    public newQuestion = {
      qTitle: '',
      qContent: '',
      qDate: Date.now(),
      lessonID: this.lesson,
      clickCount: 0,
      userId: ''
    }



    constructor(private questionService, private lessonServices, private $stateParams, private $state) {
      console.log($stateParams.id);
      this.lessonServices.getOne($stateParams.id).then((data) => {
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
<<<<<<< HEAD
      console.log(this.lesson._id);
=======
      console.log(this.lesson);
>>>>>>> refs/remotes/origin/master
      this.questions = this.questionService.getAllByLesson(this.lesson._id);
    }

    public redirectToAnswers(questionID) {
<<<<<<< HEAD
      console.log("rosa" + questionID);
      this.$state.go('answers', {id: questionID});
    }

//     public addQuestions(question) {
//       this.newQuestion = this.questionService.add({
//         lessonID: this.newQuestion.lessonID,
//         qTitle: this.newQuestion.qTitle,
//         qContent: this.newQuestion.qContent,
//         qDate: this.newQuestion.qDate = Date.now()
//       })
//       this.listQuestions();
//     }
//
//     public updateQuestion(question) {
//       this.questionService.update(question);
//     }
//
//     public delete(Id) {
//       this.questionService.delete(Id)
//         .then((data) => {
//           this.questions = this.questionService.getAll();
//         });
//     }
//
//     public questionClickCount(questionId) {
//       let questionUptick = this.questionService.getOne(questionId);
//       questionUptick.clickCount++;
//       this.updateQuestion(questionUptick);
//     }
//
//     // public open() {
//     //   this.newQuestion = this.$state.go('answers', {id: this.question._id});
//     // }
//
//     // public getQuestionLessonTitle(title) {
//     //   this.lesson = this.questionService.query({title: this.lesson._title});
//     // }
    }
 }
=======
      console.log(questionID);
      this.$state.go('answers', {id: questionID});
    }

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
>>>>>>> refs/remotes/origin/master
