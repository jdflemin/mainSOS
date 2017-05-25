namespace mainsos.Controllers{

  export class LessonsController {
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
  }
}
