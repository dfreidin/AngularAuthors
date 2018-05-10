import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  authors = [];

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAuthors();
  }

  getAuthors() {
    let observable = this._httpService.getAuthors();
    observable.subscribe(data => {
      if(data["message"] == "Success") {
        this.authors = data["data"]
      }
    });
  }

  deleteAuthor(id: string) {
    let observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {this.getAuthors()});
  }

}
