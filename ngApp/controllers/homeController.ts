namespace mainsos.Controllers {

    export class HomeController {
      public courses;
      public course;
      public newCourse = {
        name: ''
      };
      public courseID = '';
      public updatedCourse = {
        _id: '',
        name: '',
        icon: '',
        isEnabled: true
      }

      constructor(public courseServices, public $window, public $state, private $uibModal){
        this.courses = courseServices.getAll();
      }

      public delete(course){
        this.course = this.courseServices.delete(course._id).then(() => this.listCourses());
      }

      public addCourse(){
        this.newCourse = this.courseServices.add({
          name: this.newCourse.name,
        }).then(() => this.listCourses());
      }

      public courseActivation(course){
        this.courseServices.getOne(course._id).then((data) => {
          console.log(this.course);
          this.course = data;
          if(data.isEnabled === true){
          this.course.isEnabled = false
          this.courseUpdate();
        } else {
          this.course.isEnabled = true
          this.courseUpdate();
        }
      })
      }

      public courseUpdate() {
        console.log(this.course);
        this.courseServices.edit({
          _id: this.course._id,
          name: this.course.name,
          isEnabled: this.course.isEnabled,
          icon: this.course.icon,
        }).then(() => {
          this.listCourses()
        });
      }

      public listCourses(){
        this.courses = this.courseServices.getAll();
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
