import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  updateValue:string=''
  showUpdateInput:boolean=false

  @Input () todo:string=''
  @Input () i:number=0
  @Input () todos:Array<string>=[]
  @Input () newTodo:string=''
  // @Input () removeTodo:(i:number)=>void;
  
  constructor() {}

  ngOnInit(): void {
  }
  removeTodo(i:number):void{
    this.todos.splice(i,1)
  }
  updateTodo(i:number,newTodo:string){
    this.todos.splice(i,1,newTodo)
  }
  changeUpdateInput(){
    if(this.showUpdateInput){this.showUpdateInput=false}else{this.showUpdateInput=true}
  }
}
