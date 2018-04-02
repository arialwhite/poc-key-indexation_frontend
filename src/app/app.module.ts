
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { VisualizationModule } from './visualization/visualization.module';
import { IndexationModule } from './indexation/indexation.module';

import { CassandraApiService } from './shared/api/cassandra-api';
import { KafkaApiService } from './shared/api/kafka-api/kafka-api.service';
import { SearchService } from './shared/search/search.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
    SharedModule,
    VisualizationModule,
    IndexationModule,
    HttpClientModule
  ],
  providers: [SearchService, CassandraApiService, KafkaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
