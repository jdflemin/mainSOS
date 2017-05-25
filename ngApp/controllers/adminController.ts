namespace mainsos.Controllers {

  export class AdminController {

    private admin; //data? what data is admin need?
    private language;

    static $inject = ['languageService'];

    constructor(private languageService) {}

    }

  export class LogoutController {
    constructor(private adminService) {}

    public logout() {
      this.adminService.logout();
    }
  }
}
