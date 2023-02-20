import { Component } from '@angular/core';

interface Todo {
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list-component',
  templateUrl: './todo-list-component.component.html',
  styleUrls: ['./todo-list-component.component.css']
})
export class TodoListComponentComponent {
completeTask(_t9: Todo) {
throw new Error('Method not implemented.');
}

  todos: Todo[] = [
    { task: 'Learn Angular', completed: false },
    { task: 'Build a project', completed: false },
    { task: 'Exercise', completed: true },
    { task: 'Read a book', completed: true },
    { task: 'Watch a movie', completed: false },
  ];

  addTask(newTask: string): void {
    const todo: Todo = { task: newTask, completed: false };
    this.todos.push(todo);
  }   

} 

