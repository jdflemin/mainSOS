namespace mainsos.Services {

    export class LessonServices {
      private LESSON_RESOURCE;
      private COURSE_LESSON_RESOURCE;

      constructor(private $resource) {
        this.LESSON_RESOURCE = $resource('http://localhost:3004/api/v1/lessons/:id');
        this.COURSE_LESSON_RESOURCE = $resource('http://localhost:3004/api/v1/lessons/courses/:id/lessons');
      }

      public getAll() {
        return this.LESSON_RESOURCE.query();
      }

      public getOne(id) {
        return this.LESSON_RESOURCE.get({id: id}).$promise;
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

    angular.module('mainsos').service('lessonServices', LessonServices);
}
