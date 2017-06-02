namespace mainsos.Services {

  export class AnswerService {
    private ANSWER_RESOURCE;
    private QUESTION_ANSWER_RESOURCE;
    private SEARCH_RESOURCE;
    private CRUD_ANSWER_SERVICE;

    constructor(private $resource, private $window) {
      this.ANSWER_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/:id');
      this.QUESTION_ANSWER_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/questions/:id/answers');
      this.SEARCH_RESOURCE = this.$resource('http://localhost:3001/api/v1/answers/search/:search');
      this.CRUD_ANSWER_SERVICE = this.$resource('http://localhost:3003/api/v1/answers/:id')
    }

    public getAll() {
      return this.ANSWER_RESOURCE.query();
    }

    public getOne(id) {
      return this.ANSWER_RESOURCE.get({id: id}).$promise;
    }

    public getAllbyQuestion(questionId) {
      return this.QUESTION_ANSWER_RESOURCE.query({id: questionId});
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

    public delete(id) {
      console.log("this is the id " + id);
      return this.CRUD_ANSWER_SERVICE.delete({id: id}).$promise;
    }

    public answerShowAll() {
      return this.$window.location.reload();
    }


  }

  angular.module('mainsos').service('answerService', AnswerService);
}
