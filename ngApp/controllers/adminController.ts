namespace mainsos.Controller {

  export class AdminController {

    private admin; //data? what data is admin need?
    private language;

    constructor(private languageService) {}

    public restoreDefaultDisplay(){

    }
    public restoreDefaultAdd(){

    }
    public restoreDefaultSearch(){

    }
    public clearContentDisplay(){

    }
    public clearContentAdd(){

    }
    public clearContentSearch(){

    }

    }
  }
  export class LogoutController {
    constructor(private adminService) {}

    public logout() {
      this.adminService.logout();
    }
  }
