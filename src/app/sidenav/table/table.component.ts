import {  AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  price: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', price: 1},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He', price: 10},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li', price: 100},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be', price: 1000},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B', price: 10000},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C', price: 100000},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N', price: 1000000},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O', price: 10000000},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F', price: 100000000},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne', price: 1000000000},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
  
})

export class TableComponent implements  AfterViewInit {

  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort=this.sort;
    this.dataSource.paginator=this.paginator;
  }
  displayedColumns: string[] = ['position', 'name', 'symbol', 'price', 'weight'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue:string){
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }
}
