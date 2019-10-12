import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import {
    FormsModule
} from '@angular/forms';
import {
    AppRoutingModule
} from './app-routing.module';

import { AppComponent } from './app.component';
import { SearchUsersModule } from './search-user/search-users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        SearchUsersModule,
        AppRoutingModule,
        BrowserAnimationsModule
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
