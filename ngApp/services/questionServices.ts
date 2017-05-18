namespace mainsos.Services {

  export class QuestionService {
    private QUESTION_RESOURCE = this.$resource('http://localhost:3003/api/v1/questions/:id');
    private LESSON_RESOURCE = this.$resource('http://localhost:3003/api/v1/questions/lesson/:id/questions');

    constructor(private $resource) {}

    public add(question) {
      return this.QUESTION_RESOURCE.save(question).$promise;
    }

    public update(question) {
      return this.QUESTION_RESOURCE.save({id: question._id}, question).$promise;
    }

    public delete(id) {
      return this.QUESTION_RESOURCE.delete({id: id}).$promise;
    }

  }

  angular.module('mainsos').service('questionService', QuestionService);
}
