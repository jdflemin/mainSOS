namespace mainsos.Controllers {

  export class QuestionController {
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
      lessonServices.getOne($state.params.id)
        .then((data) => {
          this.lesson = data;
          this.listQuestions();
        });
    }

    public listQuestions() {
      this.question = this.questionService.getAllByLesson(this.lesson._id);
    }


    public goToAnswer(question) {
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
