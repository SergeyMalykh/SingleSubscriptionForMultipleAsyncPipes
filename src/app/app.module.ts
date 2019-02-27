import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { User1Component } from './components/user1/user1.component';
import { User2Component } from './components/user2/user2.component';
import { User3Component } from './components/user3/user3.component';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, User1Component, User2Component, User3Component],
  imports: [BrowserModule, HttpClientModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
