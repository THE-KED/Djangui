import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../Services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {


  const authService = inject(AuthService);
  console.log("auth",authService.isAuth,authService.role);
  if(authService.isAuth){
    return true;
  }
  else {
    let router = inject(Router);
    console.log("roteur",router);
    router.navigateByUrl("/login");
    return false;
  }

};
