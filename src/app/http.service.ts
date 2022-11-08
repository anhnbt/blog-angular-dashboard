import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService extends HttpClient {

  constructor(handler: HttpHandler) {
    super(handler);
  }

//   request(url: string | Request, options?: any): Observable<Response> {
//     const headers = new Headers({ 'Content-Type': 'application/json' });
//     options = new RequestOptions({ headers: headers });

//     return super.request(url, options)
//         .catch(error => Observable.throw(error.json() || 'Erreur serveur'));
// }
}
