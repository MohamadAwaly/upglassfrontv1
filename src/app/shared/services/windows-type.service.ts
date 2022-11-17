import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {WindowsType} from "../interfaces/windows-type";

@Injectable({
  providedIn: 'root'
})
export class WindowsTypeService {

  public windowsType$: BehaviorSubject<WindowsType[]> = new BehaviorSubject<WindowsType[]>([]);

  constructor(private _http: HttpClient) {
  }

  /**
   * Get list of windows
   */
  public getWindowsType(): Observable<WindowsType []> {
    return this._http.get<WindowsType[]>("http://localhost:8080/upglass/windowType/windowstype").pipe(
      tap((windowsType: WindowsType[]) => {
          this.windowsType$.next(windowsType);
        }
      )
    )
  }
}
