import { AfterViewChecked, ChangeDetectorRef, Component, OnInit,ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';
import { MatTable, MatTableDataSource } from '@angular/material';
import clonedeep from 'lodash.clonedeep';
export interface CustomerList {
  no:number
  name: string;
  city: string;
  mobile: number;
}

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})



export class CustomerListComponent implements OnInit,AfterViewChecked {
  displayedColumns: string[] = ['no', 'name', 'city', 'mobile'];
  list: CustomerList[];
  list2: CustomerList[];
  dataSource;
  dataSource2;
  constructor(private cdRef: ChangeDetectorRef) {  }

  ngOnInit() {
    this.list=[
      {no:1, name: 'sachin', city:'Nashik', mobile:8600239524 },
      {no:2, name: 'Vishal', city:'Pune', mobile:8967895475 },
      {no:3, name: 'Avdhoot', city:'Solapur', mobile:9978654789 },
      {no:4, name: 'mukesh', city:'Satara', mobile:7896541236 }
    
    ];
    this.list2=[
      {no:5, name: 'Husen', city:'Pune', mobile:9789674124 },
      {no:6, name: 'Rahul', city:'Nashik', mobile:7896879587 },  
      {no:7, name: 'Manish', city:'Aurangabad', mobile:7789654124 },
      {no:8, name: 'Sandip', city:'Nashik', mobile:8698745789 },
    ]
    this.dataSource = new MatTableDataSource(this.list);
    this.dataSource2 = new MatTableDataSource(this.list2);
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
 }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }

    
    this.dataSource.data = clonedeep(this.dataSource.data);
    this.dataSource2.data = clonedeep(this.dataSource2.data);
  }

  
}
