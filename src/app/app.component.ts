import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app.state";
import { AppService } from "./app.service";
import { FormBuilder } from "@angular/forms";
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
  tweetForm;
  person: Person = {
    name: "",
    age: "10",
    password: ""
  };
  data;
  studentData;
  array;
  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private appService: AppService
  ) {
    this.store.select("counter").subscribe(data => {
      console.log(data);
      this.data = data;
    });

    this.store.select("student").subscribe(data => {
      this.studentData = data;
    });

    this.appService.getData().subscribe((res: any) => {
      console.log(res);
      this.array = res.response;
    });
    this.tweetForm = this.fb.group({
      title: [],
      text: []
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

  addTweet() {
    this.appService.addData(this.tweetForm.value).subscribe(res => {
      console.log(res);
    });
  }

  edit(id) {
    this.appService.updateData(id, this.tweetForm.value).subscribe(res => {
      console.log(res);
    });
  }

  delete(id) {
    this.appService.delData(id).subscribe(res => {
      console.log(res);
      alert("Post is deleted");
    });
  }
}
