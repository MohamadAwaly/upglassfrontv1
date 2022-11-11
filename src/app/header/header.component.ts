import {Component, OnChanges, OnInit} from '@angular/core';
import {SideNavService} from "../shared/services/side-nav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isOpened: boolean = true;

  constructor(private _sideNav: SideNavService) {
  }

  ngOnInit(): void {
  }


  public opened() {
    this.isOpened = !this.isOpened;
    this._sideNav.isOpened(this.isOpened);
  }

}
