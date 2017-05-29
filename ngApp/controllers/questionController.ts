namespace mainsos.Controllers {

  export class QuestionsController {
    private lesson;
    public questions;
    public question;
    public newQuestion = {
      qTitle: '',
      qContent: '',
      qDate: Date.now(),
      lessonID: this.lesson._id,
      userId: '',
      clickCount: 0
    }

    constructor(private questionService, private lessonServices, private $state, private $stateParams) {
      this.lessonServices.getOne($state.params.id)
        .then((data) => {
          this.lesson = data;
          this.listQuestions();
        });
    }

    public listQuestions() {
      this.questions = this.questionService.getAllByLesson(this.lesson._id);
    }

    public getLessonName(lesson) {
      console.log(this.lesson._id);
      this.questions = this.lessonServices.get({name: this.lesson.name});
    }

    public redirectToAnswers(question) {
      console.log(this.question._id);
      this.$state.go('answers', {id: this.question._id});
    }

    public add(question) {
        this.newQuestion.qTitle = '';
        this.newQuestion.qContent = '';
        this.newQuestion.qDate = Date.now();
        this.questionService.add(this.newQuestion);
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

    public delete(Id) {
      this.questionService.delete(Id)
        .then((data) => {
          this.questions = this.questionService.getAll();
        });
    }
  }
}
