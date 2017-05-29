namespace mainsos {

    angular.module('mainsos', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: mainsos.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: '/ngApp/views/admin.html',
                controller: mainsos.Controllers.AdminController,
                controllerAs: 'controller'
            })
            .state('languages', {
                url: '/languages',
                templateUrl: '/ngApp/views/languages.html',
                controller: mainsos.Controllers.LanguagesController,
                controllerAs: 'controller'
            })
           .state('lessons', {
                url: '/lessons',
                templateUrl: '/ngApp/views/lessons.html',
                controller: mainsos.Controllers.LessonsController,
                controllerAs: 'controller'
            })
            .state('questions', {
                url: '/questions',
                templateUrl: '/ngApp/views/questions.html',
                controller: mainsos.Controllers.QuestionController,
                controllerAs: 'controller'
            })
            .state('answers', {
                url: '/answers',
                templateUrl: '/ngApp/views/answers.html',
                controller: mainsos.Controllers.AnswerController,
                controllerAs: 'controller'
            })
            .state('test', {
                url: '/test',
                templateUrl: '/ngApp/views/test.html',
                controller: mainsos.Controllers.TestController,//needs to be deleted
                controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
