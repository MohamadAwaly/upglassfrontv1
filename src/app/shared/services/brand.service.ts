import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Brand} from "../interfaces/brand";

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  public brand$: BehaviorSubject<Brand[]> = new BehaviorSubject<Brand[]>([]);

  constructor(private _http: HttpClient) {
  }

  /**
   * Get list of windows
   */
  public getWindows(): Observable<Brand []> {
    return this._http.get<Brand[]>("http://localhost:8080/upglass/brand/brands").pipe(
      tap((brands: Brand[]) => {
          this.brand$.next(brands);
        }
      )
    )
  }
}
