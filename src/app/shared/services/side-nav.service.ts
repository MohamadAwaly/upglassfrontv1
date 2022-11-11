import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  private _opened$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {
  }

  public isOpened(value: boolean): void {
    this._opened$.next(value);
  }

  public getOpened (): Observable<boolean>{
    return this._opened$.asObservable();
  }
}
