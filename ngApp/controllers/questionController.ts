namespace mainsos.Controllers {

  export class QuestionController {
    private lesson;
    private questions;
    public newQuestion = {
      qTitle: '',
      qContent: '',
      qDate: Date.now(),
      lessonID: this.lesson,
      clickCount: 0,
      userId: ''
    }

    //private question;             //justins changes he went over with nick.
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
      this.lessonServices.getOne($stateParams.id).then((data) => {
          this.lesson = data;
          this.listQuestions();
        })
    }

    public listQuestions() {
//      console.log(this.lesson._id);
      this.questions = this.questionService.getAllByLesson(this.lesson._id);
    }

    public redirectToAnswers(questionID) {
      console.log(questionID);
      this.$state.go('answers', {id: questionID});
    }

    public addQuestions() {
      this.newQuestion.qDate = Date.now();
      this.newQuestion.lessonID = this.lesson._id;
      this.newQuestion.clickCount = 0;
      this.newQuestion.userId = "";  //to be updated when we get the tolken
      this.questionService.add(this.newQuestion).then(() => this.listQuestions());
    }
//
//     public updateQuestion(question) {
//       this.questionService.update(question);
//     }
//
    public delete(ID) {
      this.questionService.delete(ID).then(() => this.listQuestions());
    }
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
