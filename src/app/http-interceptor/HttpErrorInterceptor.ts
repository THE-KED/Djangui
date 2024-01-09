import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {LoadingService} from "../Services/loading.service";
import {AuthService} from "../Services/auth.service";

@Injectable()
export class httpErrorInterceptor implements HttpInterceptor{

  constructor(private spinnerService:LoadingService,private authService:AuthService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(!req.url.includes("/auth/login")){
      let request = req.clone({
        headers: req.headers.set('Authorization','Bearer '+this.authService.accessToken)
      });

      this.spinnerService.requestStarted();
      return this.handler(next,request);
    }

    this.spinnerService.requestStarted();
    return this.handler(next,req);

  }
  handler(next:HttpHandler,request:HttpRequest<any>){
    return next.handle(request).pipe(
      tap((event)=>{
          if (event instanceof HttpResponse){
            this.spinnerService.requestEnded();
            this.spinnerService.resetSpinner();

          }
      },
        (err)=>{
          this.spinnerService.requestEnded();
          this.spinnerService.resetSpinner();
          throw err;
        }
        )
    );
  }
}
