import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app.state";

import { trigger, style, transition, animate } from "@angular/animations";
interface Person {
  name: string;
  age: string;
  password: string;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [
    trigger("wow", [
      transition("void => *", [
        style({ color: "red", opacity: 0 }),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {
  title = "storepro";
  person: Person = {
    name: "",
    age: "10",
    password: ""
  };
  data;
  studentData;
  constructor(private store: Store<AppState>) {
    this.store.select("counter").subscribe(data => {
      console.log(data);
      this.data = data;
    });

    this.store.select("student").subscribe(data => {
      this.studentData = data;
    });
  }

  add() {
    this.store.dispatch({ type: "INC" });
    this.store.dispatch({
      type: "ADD_STUD",
      payload: { name: "something", age: 90 }
    });
  }
  dec() {
    this.store.dispatch({ type: "DEC" });
  }
}
