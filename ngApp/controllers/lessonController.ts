namespace mainsos.Controllers{

  export class LessonsController {
    private Course;
    private lesson;
    private lessons;
    public newLesson = {
      title: '',
      courseId: ''
    };

    constructor(private courseServices, private lessonServices, private $stateParams, private $state){
      console.log($stateParams.id);
      courseServices.getOne($stateParams.id).then((data) => {
        this.Course = data;
        this.listLessons();
      })
    }

    public listLessons(){
      console.log(this.Course);
      this.lessons = this.lessonServices.getAllCourseLessons(this.Course._id);
    }

<<<<<<< HEAD
    public redirectToQuestions(lessonId){
      console.log(lessonId);
      this.$state.go('questions', {id: lessonId});
=======
    public addLesson(){
      this.newLesson = this.lessonServices.add({
        title: this.newLesson.title,
        courseId: this.$stateParams.id,
      }).then(() => this.lessonServices.reShow());
    }

    public delete(course){
      this.lesson = this.lessonServices.delete(course._id).then(() => this.lessonServices.reShow());
    }

    public redirectToQuestions(lessonID){
      this.$state.go('questions', {id: lessonID});
>>>>>>> refs/remotes/origin/master
    }

  }
}



/*
public lesson;
public lessons;
public course;

constructor (private courseService, private  lessonServices, private $state){
  courseService.getOne($state.params.id).then((data) => {
    this.course = data;
  })
  this.listLessons();
}

public listLessons(){
  this.lessons = this.lessonServices.getAllCourseLessons(this.course._id);
}

public delete(lesson){
  this.lessonServices.delete(lesson)
  .then((data)=> {
    this.lessons = this.lessonServices.listLessons();
  });
}

public edit(lesson){
  this.lessonServices.edit(lesson);
}

public add(lesson){
  let newLesson = {courseId:'', title:''};
  newLesson.courseId= this.lesson.courseId;
  newLesson.title= this.lesson.title;
  this.lesson.unshift(newLesson);
  this.lesson.courseId='';
  this.lesson.title='';
  }





  private lesson;
  private lessons;
  //private course;

  constructor(private courseServices, private lessonServices, private $stateParams){
    lessonServices.get($stateParams.id).then((data) => {
      this.lesson = data;
      this.listLessons();
    })
  }

  public listLessons(){
    this.lessons = this.lessonServices.getAllCourseLessons(this.lesson._id)
  }
  */
