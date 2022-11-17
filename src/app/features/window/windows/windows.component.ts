import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WindowsService} from "../../../shared/services/windows.service";
import {Window} from "../../../shared/interfaces/window";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-windows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.scss']
})
export class WindowsComponent implements OnInit, OnDestroy {

  /**
   * get table pagination
   */
  @ViewChild(MatPaginator) public paginator!: MatPaginator;
  @ViewChild(MatSort) public sort!: MatSort;

  private subscription :Subscription = new Subscription();

  public displayedColumns: string[] = ['window-type', 'code', 'name', 'price', 'model-name', 'model-code', 'option', 'edit'];
  public dataSource: MatTableDataSource<Window> = new MatTableDataSource<Window>();

  constructor(private _windowService: WindowsService) {
  }

  ngOnInit(): void {
    this.subscription.add(this._windowService.getWindows().subscribe((w: Window[]) => {
      this.dataSource.data = w;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })) ;
  }

  updateFilter(event: Event): void {
    let filtre = (event.target as HTMLInputElement).value
    filtre = filtre.trim().toLowerCase();
    this.dataSource.filter = filtre;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
