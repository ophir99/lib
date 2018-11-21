import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppActions } from "./app.actions";
import { StudentActions } from "./app.actions";
import { PerfectModule } from "dist/perfect";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PerfectModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ counter: AppActions, student: StudentActions })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
