namespace mainsos.Controllers {

    export class HomeController {
      public courses;
      public course;
      public newCourse = {
        name: ''
      };

      constructor(private courseServices, public $window){
        this.courses = courseServices.getAll();
      }

      public delete(course){
        this.course = this.courseServices.delete(course._id).then(() => this.courseServices.reShow());

      }

      public addCourse(){
        this.newCourse = this.courseServices.add({
          name: this.newCourse.name,
        }).then(() => this.courseServices.reShow());

      }
    }

    export class TestController{
    public weightclasses;

    constructor(testService){
      this.weightclasses = testService.getAll()
    }
  }

}
