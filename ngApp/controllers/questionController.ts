namespace mainsos.Controllers {

  export class QuestionController {
    private lesson;
    private questions;
    public question;
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
      console.log(this.lesson._id);
      this.questions = this.questionService.getAllByLesson(this.lesson._id);
    }

    public redirectToAnswers(questionId) {
      this.$state.go('answers', {id: questionId});
    }

    public addQuestions(question) {
      this.newQuestion = this.questionService.add({lessonID: this.newQuestion.lessonID, qTitle: this.newQuestion.qTitle, qContent: this.newQuestion.qContent, qDate: this.newQuestion.qDate})
      .then((data) => {
        this.question.lessonID = this.$stateParams.id;
        this.question.qTitle = '';
        this.question.qContent = '';
        this.question.qDate = Date.now();
        this.question.clickCount = 0;
        this.question.userId = '';
        this.questions.push(data);
      });
      this.listQuestions();
    }
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

    }
 }
