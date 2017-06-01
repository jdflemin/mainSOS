namespace mainsos.Controllers {

    export class HomeController {
      public courses;
      public course;
      public newCourse = {
        name: ''
      };
      public courseID = '';

      constructor(public courseServices, public $window, public $state, private $uibModal){
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


      public redirectToLessons(courseId){
        this.$state.go('lessons', {id: courseId});
      }










    }

    export class TestController{
    public weightclasses;

    constructor(testService){
      this.weightclasses = testService.getAll()
    }
  }

}
