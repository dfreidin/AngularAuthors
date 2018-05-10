import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAuthors() {
    return this._http.get("/authors");
  }
  getAuthor(id: string) {
    return this._http.get(`/authors/${id}`);
  }
  createAuthor(new_author) {
    return this._http.post("/authors", new_author);
  }
  updateAuthor(id: string, author) {
    return this._http.patch(`/authors/${id}`, author);
  }
  deleteAuthor(id: string) {
    return this._http.delete(`/authors/${id}`);
  }
}
