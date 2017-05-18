namespace mainsos.Services {

  export class QuestionSearchService {
    private SEARCH_RESOURCE = this.$resource('http://localhost:3001/api/v1/questions/search/:search');

    constructor(private $resource) {}

    public searchAnswerContent(keywords) {
      return this.SEARCH_RESOURCE.query({search: keywords});
    }

  }



  export class AnswerSearchService {
    private SEARCH_RESOURCE = this.$resource('http://localhost:3001/api/v1/answers/search/:search');

    constructor(private $resource) {}

    public searchAnswerContent(keywords) {
      return this.SEARCH_RESOURCE.query({search: keywords});
    }

  }

  angular.module('mainsos').service('questionSearchService', QuestionSearchService);
  angular.module('mainsos').service('answerSearchService', AnswerSearchService);
    }
//should this be split into two?????
//can we use the same API for multiple services?
