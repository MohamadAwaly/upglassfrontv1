import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {Window} from "../interfaces/window";

@Injectable({
  providedIn: 'root'
})
export class WindowsService {

  public windows$: BehaviorSubject<Window[]> = new BehaviorSubject<Window[]>([]);

  constructor(private _http: HttpClient) {
  }

  /**
   * Get list of windows
   */
  public getWindows(): Observable<Window []> {
    return this._http.get<Window[]>("http://localhost:8080/upglass/window/display").pipe(
      tap((windows: Window[]) => {
          this.windows$.next(windows);
        }
      )
    )
  }

  /**
   * add new window reference
   */
  public addwindow(window: Window) : void {
    this._http.post<Window>('http://localhost:8080/upglass/window/add',window).subscribe();
  }


}
