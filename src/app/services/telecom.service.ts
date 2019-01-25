import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TelecomService {
  todosUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todosLimit = '?_limit=5';

  constructor(private http: HttpClient) {}

  // Get Todos
  getTodos(): Observable<Todo[]> {
    // .get<Todo[]>    ==> todo type from modules
    console.log('calling get endpoint to get todos');
    return this.http.get(`${this.todosUrl}${this.todosLimit}`);
  }

  getTelecoms(): Observable<Todo[]> {

    return this.getTodos().subscribe()
  }
}
