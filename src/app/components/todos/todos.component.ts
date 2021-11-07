import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[] = [];
  inputTodo:string = "";

  constructor() { 
  }

  ngOnInit(): void {
    this.todos = [
      {
        content: "Fare la spesa",
        completed: false,
      },
      {
        content: "Pagare le bollette",
        completed: true,
      },
    ]
  }

  toggleDone(id:number){
    this.todos.map((v, i) => {
      if (id == i) {
        v.completed = !v.completed;
      }

      return v;
    });
  }

  removeTodo(id:number) {
    this.todos.filter((v, i) => {
      if (id == i) {
        this.todos.splice(i, 1); 
      }
      return v;
    })
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    this.inputTodo = "";
  }
}
