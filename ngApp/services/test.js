var mainsos;
(function (mainsos) {
    var Service;
    (function (Service) {
        var TestService = (function () {
            function TestService($resource, $http) {
                this.$resource = $resource;
                this.$http = $http;
                this.TEST_RESOURCE = this.$resource('http://localhost:8080/api/v1/weightclasses');
            }
            TestService.prototype.getAll = function () {
                return this.TEST_RESOURCE.query();
            };
            return TestService;
        }());
        angular.module('mainsos').service('testService', TestService);
    })(Service = mainsos.Service || (mainsos.Service = {}));
})(mainsos || (mainsos = {}));
