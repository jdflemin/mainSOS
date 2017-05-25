namespace mainsos.Controller {

  export class AdminController {

    private admin; //data? what data is admin need?
    private language;

    constructor(private languageService) {}

    }
  }
  export class LogoutController {
    constructor(private adminService) {}

    public logout() {
      this.adminService.logout();
    }
  }
