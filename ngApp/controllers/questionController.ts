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
      userId: '',
      qCodeLink: ''
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
      this.questions = this.lessonServices.getOne($stateParams.id).then((data) => {
          this.lesson = data;
          this.listQuestions();
        })
    }

    public listQuestions() {
//      console.log(this.lesson._id);
      this.questions = this.questionService.getAllByLesson(this.lesson._id);
    }

    public redirectToAnswers(questionId) {
      this.$state.go('answers', {id: questionId});
    }

public addQuestions(questions) {
       this.questionService.add({
        lessonID: this.$stateParams.id,
         qTitle: this.newQuestion.qTitle,
         qContent: this.newQuestion.qContent,
         qDate: this.newQuestion.qDate,
         qCodeLink: this.newQuestion.qCodeLink
       }).then((data)  => {
         this.questionService.lessonID = '';
         this.questionService.qTitle = '';
         this.questionService.qContent = '';
         this.questionService.qDate = Date.now();
         this.questionService.qCodeLink = '';
         this.questions.push(data);
       })
       this.listQuestions();
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

  //  public delete(id) {
  //     this.questionService.delete(id)
  //       .then((data) => {
  //         this.questions = this.questionService.getAllByLesson(this.lesson._id);
  //       });
  //   }

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

    }
 }
