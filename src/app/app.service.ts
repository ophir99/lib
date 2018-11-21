import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
@Injectable({
  providedIn: "root"
})
export class AppService {
  constructor(private http: HttpClient) {}

  getData = () =>
    this.http.get(
      "http://ec2-18-225-32-22.us-east-2.compute.amazonaws.com/tweet/getall"
    );
  addData = data =>
    this.http.post(
      "http://ec2-18-225-32-22.us-east-2.compute.amazonaws.com/tweet/new",
      {
        title: data.title,
        text: data.text
      }
    );
  updateData = (id, data) =>
    this.http.put(
      `http://ec2-18-225-32-22.us-east-2.compute.amazonaws.com/tweet/${id}`,
      {
        title: data.title,
        text: data.text
      }
    );
  delData = id =>
    this.http.delete(
      `http://ec2-18-225-32-22.us-east-2.compute.amazonaws.com/tweet/${id}`
    );
}
