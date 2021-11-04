import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/take'


@Injectable()
export class DataProvider {

  url: string = 'https://jsonplaceholder.typicode.com/';
  posts: string = 'posts';

  constructor(public http: HttpClient) {

  }

  gettAll() {
    // return this.http.get(this.url + this.posts).map(res=>res.json()).take(1);
  }

}
