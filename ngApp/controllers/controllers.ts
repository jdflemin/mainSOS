namespace mainsos.Controllers {

    export class HomeController {
      public message = 'Hello from the home page!';
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }



    export class TestController{
    public weightclasses;

    constructor(testService){
      this.weightclasses = testService.getAll()
    }
  }

}


//SEPERATE OUT THESE TWO CONTROLLERS INTO TWO FILES AND CHANGE ABOUT TO LANGUAGES
