import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { BasicComponent } from './basic/basic.component';
import { BasicBlocComponent } from './basic/basic-bloc/basic-bloc.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  declarations: [BasicComponent, BasicBlocComponent],
  exports: [BasicComponent, BasicBlocComponent]
})
export class VisualizationModule { }
