namespace mainsos.Services{

  namespace SOS.Services {

  export class QuestionService {
    private QUESTION_RESOURCE = this.$resource('http://localhost:3002/api/v1/questions/:id');
    private LESSON_QUESTION_RESOURCE = this.$resource('http://localhost:3002/api/v1/questions/lesson/:id/questions');
    private SEARCH_RESOURCE = this.$resource('http://localhost:3001/api/v1/questions/search/:search');
    private CRUD_QUESTION_RESOURCE = this.$resource('http://localhost:3003/api/v1/questions/:id')

    constructor(private $resource) {}

    public getAll() {
      return this.QUESTION_RESOURCE.query();
    }

    public getOne(Id) {
      return this.QUESTION_RESOURCE.get({id: Id});
    }

    public getAllByLesson(lessonID) {
      return this.LESSON_QUESTION_RESOURCE.query({id: lessonID});
    }

    public searchAnswerContent(keywords) {
      return this.SEARCH_RESOURCE.query({search: keywords});
    }

    public add(question) {
      return this.CRUD_QUESTION_RESOURCE.save(question).$promise;
    }

    public update(question) {
      return this.CRUD_QUESTION_RESOURCE.save({id: question._id}, question).$promise;
    }

    public delete(Id) {
      return this.CRUD_QUESTION_RESOURCE.delete({id: Id}).$promise;
    }

  }

  angular.module('mainsos').service('questionService', QuestionService);
}

}
