import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { VisualizationModule } from '../visualization/visualization.module';
import { IndexationComponent } from './indexation.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    VisualizationModule
  ],
  declarations: [IndexationComponent],
  exports: [IndexationComponent]
})
export class IndexationModule { }
