import { Component } from '@angular/core';
import { SearchService } from './shared/search/search.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'ind-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  currentSearch: string;

  constructor(
    private search: SearchService,
    private router: Router
  ){}

  onSearchColor(value: string) {
    this.search.notifyColor(value);
     this.router.navigate(['/home']);
  }

  goKafka(){
    window.open("http://localhost:9000");
  }

  goSpark(){
    window.open("http://localhost:18080");
  }

  goSwagger(){
    window.open("http://localhost:9333/swagger-ui.html");
  }

  demo(){
    this.router.navigate(['/kafka']);
  }
}
