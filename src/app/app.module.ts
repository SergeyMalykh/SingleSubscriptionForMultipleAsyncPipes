import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { User1Component } from './components/user1/user1.component';
import { User2Component } from './components/user2/user2.component';
import { User3Component } from './components/user3/user3.component';
import { UserService } from './services/user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromUser from './state/user/user.reducer';

@NgModule({
  declarations: [AppComponent, User1Component, User2Component, User3Component],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature('user', fromUser.reducer)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
