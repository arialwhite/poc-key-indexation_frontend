import { SearchService } from '../../shared/search/search.service';
import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs/Rx';
import { Color, Gradient } from '../../shared/api/cassandra-api';

@Component({
  selector: 'ind-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  gradients$: Observable<any[]>;

  constructor(
    private search: SearchService
  ) { }

  ngOnInit() {
    this.gradients$ = this.search.fetchGradients();
  }
}
