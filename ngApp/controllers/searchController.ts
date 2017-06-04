namespace mainsos.Controllers{

  export class SearchController{
    private questions;
    private searchString;

    constructor(private questionService, private answerService, private $stateParams) {
      this.searchString = "test"; //hard coded to test for testing purooses. need to ask justin about the ng-model on indexcontroller and index.ejs (set this to $stateParams.search when passing correctly)
      this.searchQuestionContent();
      this.searchString = '';
    }

    public searchAgain(){
      this.searchQuestionContent();
    }

    public searchQuestionContent() {
      this.questions = this.questionService.searchQuestionContent(this.searchString);
    }


  }
  angular.module('mainsos').controller('searchController', SearchController);
}
