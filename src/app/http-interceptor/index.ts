import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {httpErrorInterceptor} from "./HttpErrorInterceptor";


export const httpInterceptProviders = [
  {provide:HTTP_INTERCEPTORS,useClass:httpErrorInterceptor,multi:true}
];
