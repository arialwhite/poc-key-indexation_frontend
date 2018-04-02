import { Gradient } from '../../../shared/api/cassandra-api';
import { ElementRef, HostListener, Input, Renderer } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-basic-bloc',
  templateUrl: './basic-bloc.component.html',
  styleUrls: ['./basic-bloc.component.scss']
})
export class BasicBlocComponent implements OnInit {

  @Input() gradient: Gradient;

  css: string;
  maximized: boolean = false;

  constructor(
    private el: ElementRef, 
    private renderer: Renderer
  ) { }

  ngOnInit() {
    this.css = this.gradient ? this.gradient.toCss(): '#fff';
  }

  @HostListener('click', ['$event'])
  onClick($event) {
    if (!this.maximized) {
      this.maximize();
    }
  }

  minimize($event) {
    this.renderer.setElementClass(this.el.nativeElement, 'state-maximized', false);
    this.maximized = false;
    $event.stopPropagation();
  }

  maximize() {
    this.renderer.setElementClass(this.el.nativeElement, 'state-maximized', true);
    this.maximized = true;
  }

}
