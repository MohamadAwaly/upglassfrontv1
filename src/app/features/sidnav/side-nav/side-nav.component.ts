import {Component, OnDestroy, OnInit} from '@angular/core';
import {SideNavService} from "../../../shared/services/side-nav.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit, OnDestroy {
  public opened : boolean = true;

  private _subscription : Subscription  = new Subscription();

  constructor(private _sideNave : SideNavService) { }

  ngOnInit(): void {
    this._subscription.add(this._sideNave.getOpened().subscribe((opened:boolean)=> this.opened = opened));
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

}
