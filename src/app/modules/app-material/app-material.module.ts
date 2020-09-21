import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatGridListModule, MatTableModule, MatButtonModule } from '@angular/material';


const modules = [DragDropModule, MatButtonModule, MatTableModule, MatGridListModule];

@NgModule({
  imports: modules,
  exports: modules
})
export class AppMaterialModule { }
