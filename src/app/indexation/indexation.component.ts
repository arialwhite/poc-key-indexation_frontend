
import { Component, OnInit } from '@angular/core';
import { KafkaApiService } from '../shared/api/kafka-api/kafka-api.service';
import { Gradient, Color } from '../shared/api/cassandra-api';

import { generateGradientsByKeys } from './genGradients';

@Component({
  selector: 'ind-indexation',
  templateUrl: './indexation.component.html',
  styleUrls: ['./indexation.component.scss']
})
export class IndexationComponent implements OnInit {

  gradientsByColor: [Color, Gradient[]][]= [];

  constructor(
    private kafkaApi: KafkaApiService
  ) { }

  ngOnInit() {
  }

  generate() {
    const data = generateGradientsByKeys();
    this.gradientsByColor = [];
    data.forEach((gradients: Gradient[], color: Color) => {
      this.gradientsByColor.push([color, gradients]);
    });
  }

  save() {
    this.kafkaApi.sendAllGradients(this.gradientsByColor).take(1).toPromise().then(() => {
      alert('done');
    }, (err) => {
      console.error(err);
      alert('fail');
    });
  }

}
