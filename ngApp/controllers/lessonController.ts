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

//for admin access only
  export class DeleteLessonController {
    public lesson;

    static $inject = ['LessonServices', '$state', '$stateParams'];

    constructor (private LessonServices, private $state, private $stateParams){
      this.lesson = LessonServices.get($stateParams.id);
    }

    public delete(){
      this.LessonServices.delete(this.lesson._id)
      .then(()=> this.$state.go('lessons'))
      .catch((err)=> console.error(err));
    }

    public edit(){
      this.$state.go('edit', {id: this.lesson.id});
    }
  }

//for admin access only
  export class NewLessonController {
    public lesson;

    static $inject = ['LessonServices', '$state'];

    constructor (private LessonServices, private $state){
      this.lesson = {};
    }

    public add(){
      let newLesson = {courseId:'', title:''};
      newLesson.courseId= this.lesson.courseId;
      newLesson.title= this.lesson.title;
      this.lesson.unshift(newLesson);
      this.lesson.courseId='';
      this.lesson.title='';
      }
    public save(){
      this.LessonServices.createNewLesson(this.lesson)
      .then(()=> this.$state.go('lessons'))
      .catch((err)=> console.error(err));
    }
  }

  //for admin access only
  export class EditLessonController {
    public lesson;

    static $inject = ['LessonServices', '$state', '$stateParams'];

    constructor (private LessonServices, private $state, private $stateParams){
      this.lesson = LessonServices($stateParams.id);
    }

    public add(){
      let newLesson = {courseId:'', title:''};
      newLesson.courseId= this.lesson.courseId;
      newLesson.title= this.lesson.title;
      this.lesson.unshift(newLesson);
      this.lesson.courseId='';
      this.lesson.title='';
    }
    public cancel(){
      this.$state.go('lesson', {id: this.lesson._id});
    }
    public save(){
      this.LessonServices.edit(this.lesson._id, this.lesson)
      .then(()=> this.$state.go('lesson', {id: this.lesson._id}))
      .catch((err)=> console.error(err));
    }
  }
}
