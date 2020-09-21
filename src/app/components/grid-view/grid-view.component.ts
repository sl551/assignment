import { AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, CdkDropList} from '@angular/cdk/drag-drop';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.css']
})
export class GridViewComponent implements OnInit, AfterViewChecked {
  tiles: Tile[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'five', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'six', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'seven', cols:4, rows: 1, color: 'lightpink'},
    {text: 'eight', cols: 2, rows: 2, color: '#DDBDF1'},
    {text: 'Nine', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Ten', cols: 2, rows: 1, color: 'lightblue'},
  ];
  emptyTiles: Tile[] = [
  ];
 
  emptylist = []

  constructor(private cdRef: ChangeDetectorRef) {  }

  ngOnInit() {
  }

  ngAfterViewChecked() {
    this.cdRef.detectChanges();
 }

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    console.log(this.emptylist)
  }
 
}
