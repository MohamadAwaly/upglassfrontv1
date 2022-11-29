import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {OptionsWindow} from "../interfaces/options-window";

@Injectable({
  providedIn: 'root'
})
export class OptionsWindowService {

  public model$: BehaviorSubject<OptionsWindow[]> = new BehaviorSubject<OptionsWindow[]>([]);

  constructor(private _http: HttpClient) {
  }

  /**
   * Get list of windows
   */

  public getOptions( ): Observable<OptionsWindow []> {
    return this._http.get<OptionsWindow[]>('http://localhost:8080/upglass/option/options').pipe(
      tap((OptionsWindow: OptionsWindow[]) => {
          this.model$.next(OptionsWindow);
        }
      )
    )
  }
}
