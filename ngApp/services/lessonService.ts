namespace mainsos.Services {

    export class LessonServices {
      private LESSON_RESOURCE = this.$resource('http://localhost:3004/api/v1/lessons/:id');
      private COURSE_LESSON_RESOURCE = this.$resource('http://localhost:3004/api/v1/lessons/course/:id/lessons');

      constructor(private $resource) {}

      public getAll() {
        return this.LESSON_RESOURCE.query();
      }

      public get(id) {
        return this.LESSON_RESOURCE.get({id: id});
      }

      public getAllCourseLessons(courseId) {
        return this.COURSE_LESSON_RESOURCE.query({id: courseId});
      }

      public add(course) {
        return this.LESSON_RESOURCE.save(course).$promise;
      }

      public edit(id) {
        return this.LESSON_RESOURCE.post({id: id}).$promise;
      }

      public delete(id){
        return this.LESSON_RESOURCE.delete({id: id}).$promise;
      }
    }

    angular.module('SOS').service('lessonServices', LessonServices);
}
