import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http:HttpClient) { }

getBooks(): Observable<any>{
return this.http.get("http://localhost:7097/book/getall");
}

getBookById(id:number): Observable<any>{
  return this.http.get("http://localhost:7097/book/getbyid/"+id);
}

}
