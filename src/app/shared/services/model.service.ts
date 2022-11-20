import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {Brand} from "../interfaces/brand";
import {HttpClient} from "@angular/common/http";
import {Model} from "../interfaces/model";

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  public model$: BehaviorSubject<Model[]> = new BehaviorSubject<Model[]>([]);

  constructor(private _http: HttpClient) {
  }

  /**
   * Get list of windows
   */

  public getModelsByIdBrand(id : number ): Observable<Model []> {
    return this._http.get<Model[]>(`http://localhost:8080/upglass/model/${id}`).pipe(
      tap((models: Model[]) => {
          this.model$.next(models);
        }
      )
    )
  }
}
