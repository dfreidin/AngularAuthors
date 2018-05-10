import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: string;
  private sub: any;
  author = {name: ""};
  errors: null;

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this.sub = this._route.params.subscribe(params => {
      this.id = params["id"];
      this.getAuthor();
    });
  }
  getAuthor() {
    this._httpService.getAuthor(this.id).subscribe(data => {
      console.log(data);
      if(data["message"] == "Success") {
        this.author = data["data"];
      }
    });
  }
  updateAuthor() {
    this._httpService.updateAuthor(this.id, this.author).subscribe(data => {
      if(data["message"] == "Success") {
        this._router.navigate(["/"]);
      }
      else {
        this.errors = data["error"];
      }
    });
  }

}
