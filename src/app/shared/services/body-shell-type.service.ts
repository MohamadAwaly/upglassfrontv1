import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BodyShelType} from "../interfaces/body-shel-type";

@Injectable({
  providedIn: 'root'
})
export class BodyShellTypeService {

  public bodyShellType$: BehaviorSubject<BodyShelType[]> = new BehaviorSubject<BodyShelType[]>([]);

  constructor(private _http: HttpClient) {
  }

  /**
   * Get list of windows
   */
  public getBodyShellType(): Observable<BodyShelType []> {
    return this._http.get<BodyShelType[]>("http://localhost:8080/upglass/bodyShellType/bodysShellType").pipe(
      tap((bodyShellType: BodyShelType[]) => {
          this.bodyShellType$.next(bodyShellType);
        }
      )
    )
  }
}
