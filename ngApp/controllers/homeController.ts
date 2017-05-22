namespace mainsos.Controllers {

    export class HomeController {
      public courses;

      constructor(courseServices){
        this.courses = courseServices.getAll()
      }
    }

    export class TestController{
    public weightclasses;

    constructor(testService){
      this.weightclasses = testService.getAll()
    }
  }

}
