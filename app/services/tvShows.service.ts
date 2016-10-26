import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TvShow } from '../models/tv-shows';
import { CONFIG } from '../core/config';

@Injectable()
export class TvShowService {
  private tvshowurl = CONFIG.baseUrls.tv_shows;

  constructor( private http : Http ) {}

  getTvShows() : Observable<TvShow[]> {
    return this.http.get(this.tvshowurl)
      .map(this.extractData)
  }

  private extractData (res: Response) {
    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json ? res.json() : null;
    return (body && body.data || {});
  }

}
