import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { TvShows } from '../models/tv-shows';
import { CONFIG } from '../core/config';

@Injectable()
export class TvShowService {
  private tvshowurl = CONFIG.baseUrls.tv_shows;

  constructor( private http : Http ) {}

  getTvShows() : Observable<TvShows[]> {
    return this.http.get(this.tvshowurl)
      .map((res: Response) => res.json())
  }

}
