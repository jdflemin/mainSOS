namespace SOS.Services {

export class CommentService {
  public COMMENT_RESOURCES = this.$resource('http://localhost:3002/api/v1/comments/:id');
  public ANSWER_COMMENT_RESOURCES = this.$resource('http://localhost:3002/api/v1/comments/answers/:id/comment');
  public CRUD_COMMENT_RESOURCE = this.$resource('http://localhost:3003/api/v1/courses/:id')

  constructor(private $resource) {}

  public getAll() {
    return this.COMMENT_RESOURCES.query();
  }

  public getOne(Id) {
    return this.COMMENT_RESOURCES.get({id: Id});
  }

  public getAllbyQuestion(QuestionID) {
    return this.ANSWER_COMMENT_RESOURCES.query({id: QuestionID});
  }

  public add(answer) {
    return this.CRUD_COMMENT_RESOURCE.save(answer).$promise;
  }

  public update(answer) {
    return this.CRUD_COMMENT_RESOURCE.save({id: answer._id}, answer).$promise;
  }

  public delete(Id) {
    return this.CRUD_COMMENT_RESOURCE.delete({id: Id}).$promise;
  }


}

angular.module('mainsos').service('commentService', CommentService);

}
