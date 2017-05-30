namespace mainsos.Services {

  class CourseServices {
    private COURSE_RESOURCE = this.$resource('http://localhost:3004/api/v1/courses/:id');

    constructor(private $resource, private $window){}

    public getAll() {
      return this.COURSE_RESOURCE.query();
    }

    public getOne(id) {
      return this.COURSE_RESOURCE.get({id: id}).$promise;
    }

    public add(course) {
      return this.COURSE_RESOURCE.save(course).$promise;
    }

    public edit(id) {
      return this.COURSE_RESOURCE.post({id: id}).$promise;
    }

    public delete(id){
      return this.COURSE_RESOURCE.delete({id: id}).$promise;
    }

    public reShow(){
      return this.$window.location.reload();
    }
  }
  angular.module('mainsos').service('courseServices', CourseServices);
}
