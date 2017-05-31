namespace mainsos.Services {

  export class AnswerService {
    private ANSWER_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/:id');
    private QUESTION_ANSWER_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/questions/:id/answers');
    private SEARCH_RESOURCE = this.$resource('http://localhost:3001/api/v1/answers/search/:search');
    private CRUD_ANSWER_SERVICE = this.$resource('http://localhost:3003/api/v1/answers/:id')

    constructor(private $resource) {}

    public getAll() {
      return this.ANSWER_RESOURCE.query();
    }

    public getOne(Id) {
      return this.ANSWER_RESOURCE.get({id: Id});
    }

    public getAllbyQuestion(QuestionID) {
      return this.QUESTION_ANSWER_RESOURCE.query({id: QuestionID});
    }

    public searchAnswerContent(keywords) {
      return this.SEARCH_RESOURCE.query({search: keywords});
    }

    public add(answer) {
      return this.CRUD_ANSWER_SERVICE.save(answer).$promise;
    }

    public update(answer) {
      return this.CRUD_ANSWER_SERVICE.save({id: answer._id}, answer).$promise;
    }

    public delete(Id) {
      return this.CRUD_ANSWER_SERVICE.delete({id: Id}).$promise;
    }

  }

  angular.module('mainsos').service('answerService', AnswerService);
}
