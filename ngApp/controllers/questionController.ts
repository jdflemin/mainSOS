namespace mainsos.Controllers {

  export class QuestionController {
    private lesson;
    public questions;
    public question;
    public newQuestion = {
      qTitle: '',
      qContent: '',
      qDate: Date.now(),
      clickCount: 0
    }

    public lessonID = this.lesson._id;
    public userId = '';

    constructor(private questionService, private lessonServices, private $state, private $stateParams, public $windows) {
      this.lessonServices.getOne($state.params.id)
        .then((data) => {
          this.lesson = data;
          this.listQuestions();
        });
    }

    public listQuestions() {
      this.questions = this.questionService.getAllByLesson(this.lesson._id);
    }

    public getQuestionLessonTitle(title) {
      this.lesson = this.questionService.query({title: this.lesson.title});
    }

    public redirectToAnswers(question) {
      console.log(this.question._id);
      this.$state.go('answers', {id: this.question._id});
    }

    public addQuestions() {
      this.newQuestion = this.questionService.add({
        qTitle: this.newQuestion.qTitle,
        qContent: this.newQuestion.qContent,
        qDate: this.newQuestion.qDate = Date.now()
      }).then(() => this.questionService.reShow());
      console.log(this.newQuestion);
        this.listQuestions();
    }

    public questionClickCount(questionId) {
      let clickQuestion = this.questionService.getOne(questionId);
      clickQuestion.clickCount++;
      this.updateQuestion(clickQuestion);
    }

    public updateQuestion(question) {
      this.questionService.update(question);
    }

    public open() {
      this.newQuestion = this.$state.go('answers', {id: this.question._id})
    }

    public delete(Id) {
      this.questionService.delete(Id)
        .then((data) => {
          this.questions = this.questionService.getAll();
        });
    }
  }
}
