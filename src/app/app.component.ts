import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo_app';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'eat', done: true },
    { description: 'sleep', done: false },
    { description: 'play', done: true },
    { description: 'laugh', done: false },
  ];

  get item(){
    if (this.filter === 'all'){
      return this.allItems
    }
    return this.allItems.filter(item => item.done === true ? item.done:!item.done)
  }
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false
    });
  }
  
}


