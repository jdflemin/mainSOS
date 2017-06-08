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

      public showEditModalCourse(course) {
        let modal = this.$uibModal.open({
          templateUrl: '/ngApp/views/editCourse.html',
          controller: editModalCourseController,
          controllerAs: 'controller',
          resolve: {
            course: () => course
          },
          size: 'md',
        });
          modal.closed.then(() => this.courses = this.courseServices.getAll());
        }

      }

      export class editModalCourseController {
        public courses;

        constructor(course, private courseServices, private $uibModalInstance) {
          this.courseServices.getOne(course._id).then((foundCourse) => {
            this.courses = foundCourse
          });
        }

        public editCourse() {
          this.courseServices.update({
            _id: this.courses._id,
            name: this.courses.name,
            isEnabled: this.courses.isEnabled,
            icon: this.courses.icon
          }).then(() => {this.close()});
        }

        public close() {
          this.$uibModalInstance.close();
        }

      }

    export class TestController{
    public weightclasses;

    constructor(testService){
      this.weightclasses = testService.getAll()
    }
  }

}
