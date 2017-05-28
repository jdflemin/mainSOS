namespace mainsos.Controllers{

  export class LessonsController {
    public lessons;
    public course;

    constructor (private courseServices, private  lessonServices, private $state){
      courseServices.getOne($state.params.id).then((data) => {
        this.course = data;
      })
      this.listLessons();
    }

    public listLessons(){
      this.lessons = this.lessonServices.getAllCourseLessons(this.course._id);
    }
  }
}
