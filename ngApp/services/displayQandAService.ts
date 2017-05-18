namespace mainsos.Services {

  export class QuestionDisplayService {
      private QUESTION_RESOURCE = this.$resource('http://localhost:3002/api/v1/questions/:id');
      private LESSION_RESOURCE = this.$resource('http://localhost:3002/api/v1/questions/lession/:id/questions');

      constructor(private $resource) {}

      public getAll() {
        return this.QUESTION_RESOURCE.query();
      }

      public getOne(Id) {
        return this.QUESTION_RESOURCE.get({id: Id});
      }

      public getAllbyQuestion(lessionID) {
        return this.LESSION_RESOURCE.query({id: lessionID});
      }
    }

    export class AnswerDisplayService {
    private ANSWER_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/:id');
    private QUESTION_RESOURCE = this.$resource('http://localhost:3002/api/v1/answers/question/:id/answers');

    constructor(private $resource) {}

    public getAll() {
      return this.ANSWER_RESOURCE.query();
    }

    public getOne(Id) {
      return this.ANSWER_RESOURCE.get({id: Id});
    }

    public getAllbyQuestion(QuestionID) {
      return this.QUESTION_RESOURCE.query({id: QuestionID});
    }
  }

  export class CommentDisplayService {

  public COMMENT_RESOURCES = this.$resource('http://localhost:3002api/v1/comments/:id');
  public ANSWERCOMMENT_RESOURCES = this.$resource('http://localhost:3002api/v1/comments/answers/:id/comment');

  constructor(private $resource) {}

  public getAll() {
    return this.COMMENT_RESOURCES.query();
  }

  public getOne() {
    return this.COMMENT_RESOURCES.get()
  }

  public getCommentByAnswer(answerId) {
    return this.ANSWERCOMMENT_RESOURCES.query({id: answerId});
  }

}

angular.module('mainsos').service('commentDisplayService', CommentDisplayService);
angular.module('mainsos').service('answerDisplayService', AnswerDisplayService);
angular.module('mainsos').service('questionDisplayService', QuestionDisplayService);
    }
