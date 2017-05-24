namespace mainsos.Controllers {

    export class IndexController {
      public courses;

      constructor(courseServices){
        this.courses = courseServices.getAll()
      }
    }
  angular.module('mainsos').controller('indexController', IndexController);
}
