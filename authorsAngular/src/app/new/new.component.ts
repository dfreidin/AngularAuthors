import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  new_author = {name: ""};
  errors = null;

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.new_author = {name: ""};
  }

  createAuthor() {
    let observable = this._httpService.createAuthor(this.new_author);
    observable.subscribe(data => {
      if(data["message"] == "Success") {
        this.new_author = {name: ""};
        this._router.navigate(["/"]);
      }
      else {
        this.errors = data["error"];
      }
    });
  }

}
