namespace mainsos.Controllers {

  export class QuestionController {
    public questions;
    public question;
    public newQuestion = {
      qTitle: '',
      qContent: '',
      qDate: '',
      clickCount: 0
    }

    constructor(private questionService, private $state) {
      this.questions = this.questionService.query();
    }

    public getAllbyQuestion(lessonID) {
      console.log(lessonID);
      this.$state.go('questions', {id: lessonID});
    }

    public goToAnswer(question) {
      console.log(this.question._id);
      this.$state.go('answers', {id: this.question._id});
    }

    public add(question) {
      this.question = this.questionService.add({qTitle: this.newQuestion.qTitle, qContent: this.newQuestion.qContent, qDate: this.newQuestion.qDate, clickCount: this.newQuestion.clickCount})
      .then((data) => {
        this.newQuestion.qTitle = '';
        this.newQuestion.qContent = '';
        this.newQuestion.qDate = ''; //add by newQuestion
        this.newQuestion.clickCount = 0;
        this.questions.push(data);
      })
    }

    public update(question){
      this.question = this.questionService.get(question._id); //need to send back the whole question
    }

    public save() {
      this.questionService.update(this.question._id);
    }

    public delete(Id) {
      this.questionService.delete(Id)
        .then((data) => {
          this.questions = this.questionService.getAll();
        });
    }
  }
}
