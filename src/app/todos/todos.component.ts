import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  newTodo:string=''
  todos:Array<string>=['sleep','work']

  constructor() { }

  ngOnInit(): void {
  }

  addTodo(input:string):void{
    this.todos.push(input)
  }
  // boundedRmoveTodo=this.removeTodo.bind(this)
  // removeTodo(i:number):void{
  //   this.todos.splice(i,1)
  // }
  // remove=(i:any)=>{console.log('hi')}

}
