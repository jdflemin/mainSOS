namespace mainsos.Controllers{

  export class LessonsController {
    private Course;
    private lesson;
    private lessons;
    public newLesson = {
      title: '',
      courseId: ''
    };

    constructor(private courseServices, private lessonServices, private $stateParams, private $state, private questionService, private answerService, private commentService, private $uibModal){
      //console.log($stateParams.id);
      courseServices.getOne($stateParams.id).then((data) => {
        this.Course = data;
        this.listLessons();
      })
    }

    public listLessons(){
      //console.log(this.Course);
      this.lessons = this.lessonServices.getAllCourseLessons(this.Course._id);
    }

    public redirectToQuestions(lessonId){
      //console.log(lessonId);
      this.$state.go('questions', {id: lessonId});
    }

    public addLesson() {
      this.newLesson = this.lessonServices.add({
        title: this.newLesson.title,
        courseId: this.$stateParams.id,
      }).then(() => this.lessonServices.reShow());
    }

    // public editLesson(id){
    //   this.lessonServices.post(id).then(() => this.lessonServices.reShow());
    // }

    public delete(course){
      this.lesson = this.lessonServices.delete(course._id).then(() => this.lessonServices.reShow());
    }

    public showEditLessonModal(lesson){
      let modal = this.$uibModal.open({
        templateUrl: '/ngApp/views/editLesson.html',
        controller: editModalLessonController,
        controllerAs: 'controller',
        resolve: {
          lesson: () => lesson
        },
        size: 'md',
      })
      modal.closed.then(() => {this.listLessons()});
    }

    //trending Section..................

    private trendComments;
    private trendAnswers = [];
    private trendQuestions = [];
    private referenceDate;

    public getTrendingQuestions(){
      this.setNeededDate();
      this.answerService.getAllbyDate().then((data) => {
        this.trendAnswers = data;
        this.getCommentsbyDate();
      })

    }

    public setNeededDate(){
      this.referenceDate = Date.now();
      this.referenceDate.setHours(this.referenceDate.getHours() - 24);  //this grab everything with a answers or comment posted in the last 24 hours.
    }

    public getCommentsbyDate(){
      this.commentService.getAllbyDate().then((data) => {
        this.trendComments = data;
        this.addtoTrendingAnswers();
        this.addtoTrendingQuestions();
      })
    }

    public addtoTrendingAnswers(){
      for(let i = 0; i < this.trendComments.length; i++){
        this.answerService.getOne(this.trendComments[i].answerId).then((data) => {
          let tempAnswer = data;
          let pushThis = true;
          for(let j = 0; j < this.trendAnswers.length; j++) {
            if(this.trendAnswers[j]._id == tempAnswer._id){
              pushThis = false;
            }
          }
          if(pushThis){
            this.trendAnswers.push(tempAnswer);
          }
        });
      }
    }

    public addtoTrendingQuestions(){
      for(let i = 0; i < this.trendAnswers.length; i++){
        this.questionService.getOne(this.trendAnswers[i].questionId).then((data) => {
          let tempQuestion = data;
          let pushThis = true;
          for(let j = 0; j < this.trendQuestions.length; j++) {
            if(this.trendQuestions[j]._id == tempQuestion._id){
              pushThis = false;
            }
          }
          if(pushThis){
            this.trendQuestions.push(tempQuestion);
          }
        });
      }
      console.log('trendQuestions');
    }

  }

  export class editModalLessonController {
    public lessons;

    constructor(lesson, private lessonServices, private $uibModalInstance){
      this.lessonServices.getOne(lesson._id).then((foundLesson) => {
        this.lessons = foundLesson
      });

    }

    public editLesson() {
      this.lessonServices.update({
        _id: this.lessons._id,
        courseId: this.lessons.courseId,
        title: this.lessons.title
      }).then(() => {this.close()});
    }

    public close() {
      this.$uibModalInstance.close();
    }
  }


}
