import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './components/todos/todos.component';
import { TelecomOpsComponent } from './components/telecom-ops/telecom-ops.component';
import { TelecomComponent } from './components/pages/telecom/telecom.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TelecomOpsComponent,
    TelecomComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
