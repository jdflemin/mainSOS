namespace SOS.Controllers{

  export class GetLessonController {
    public lesson;

    static $inject = ['LessonServices', '$state'];

    constructor (private LessonServices, private $state){
      this.lesson = LessonServices.get();
    }

    public get(id){
      this.$state.go('lesson', {id: id});
    }
  }
}
