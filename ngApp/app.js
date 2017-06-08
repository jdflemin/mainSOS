var mainsos;
(function (mainsos) {
    angular.module('mainsos', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
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
            .state('lessons', {
            url: '/lessons/:id',
            templateUrl: '/ngApp/views/lessons.html',
            controller: mainsos.Controllers.LessonsController,
            controllerAs: 'controller'
        })
            .state('questions', {
            url: '/questions/:id',
            templateUrl: '/ngApp/views/questions.html',
            controller: mainsos.Controllers.QuestionController,
            controllerAs: 'controller'
        })
            .state('answers', {
            url: '/answers/:id',
            templateUrl: '/ngApp/views/answers.html',
            controller: mainsos.Controllers.AnswerController,
            controllerAs: 'controller'
        })
            .state('adminCourse', {
            url: '/admincourse',
            templateUrl: '/ngApp/views/admincourse.html',
            controller: mainsos.Controllers.AdminCoursesController,
            controllerAs: 'controller'
        })
            .state('adminLessons', {
            url: '/adminlessons',
            templateUrl: '/ngApp/views/adminlessons.html',
            controller: mainsos.Controllers.AdminLessonsController,
            controllerAs: 'controller'
        })
            .state('adminQuestions', {
            url: '/adminQuesions',
            templateUrl: '/ngApp/views/adminquestions.html',
            controller: mainsos.Controllers.AdminQuestionsController,
            controllerAs: 'controller'
        })
            .state('adminAnswers', {
            url: '/adminanswers',
            templateUrl: '/ngApp/views/adminanswers.html',
            controller: mainsos.Controllers.AdminAnswersController,
            controllerAs: 'controller'
        })
            .state('searchPage', {
            url: '/searchPage/:search',
            templateUrl: '/ngApp/views/searchPage.html',
            controller: mainsos.Controllers.SearchController,
            controllerAs: 'controller'
        })
            .state('test', {
            url: '/test',
            templateUrl: '/ngApp/views/test.html',
            controller: mainsos.Controllers.TestController,
            controllerAs: 'controller'
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: '/ngApp/views/notFound.html'
        });
        $urlRouterProvider.otherwise('/notFound');
        $locationProvider.html5Mode(true);
    });
})(mainsos || (mainsos = {}));
