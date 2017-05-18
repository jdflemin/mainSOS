namespace mainsos.Services {

  export class CommentService {

    private COMMENT_RESOURCE = this.$resource('http://localhost:3003/api/v1/comments/:id');

    constructor(private $resource) {}

    public add(comment) {
      return this.COMMENT_RESOURCE.save(comment).$promise;
    }

    public update(comment) {
      return this.COMMENT_RESOURCE.save({id: comment._id}, comment).$promise;
    }

    public delete(id) {
      return this.COMMENT_RESOURCE.delete({id: id}).$promise;
    }
  }
  angular.module('mainsos').service('commentService', CommentService);
}
