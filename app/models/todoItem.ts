
//import {TodoItem } from '../../models/todoitem'
import {IJson } from './IJson'


export class TodoItem implements IJson {
    private otitle: string = "";
    private osummary: string = "";
    
    get title():string {
        return this.otitle;
    }
    // set title(value:string) {
    //     this.otitle = value;
    // }
    
    get summary():string {
        return this.osummary;
    }
    // set summary(value:string) {
    //     this.osummary = value;
    // }
    
    constructor() {
        console.log('TodoItem.constructor');
    }
    
    // constructor(title: string
    // , summary: string) {
 
    //     this.title = title;
    //     this.summary = summary;
    //     console.log('TodoItem.constructor');
    //     }
    
    
    

  initTodoItem(title: string
    , summary: string) : TodoItem;
    initTodoItem(title: any
    , summary?: string) : TodoItem {
        
    
    if (typeof title === 'string') {
        this.otitle = title;
        this.osummary = summary;
    }
    else {
        if (typeof title === 'object') {
            this.otitle = title.title;
            this.osummary = title.summary;
        }
        else {
            throw new Error("Title must be of type string or any");
        }   
    }
        
      
      console.log('TodoItem.initTodoItem');
      return this;
      }
      
      // typescript native string interpolation using backtick
      
      toString(): string {
        return `{"title": "${this.title}", "summary": "${this.summary}"}`; // As of version 1.4
    }//"{"title":"a","summary":"a"}"
    
    getJSON(): string {//why getJson??????
        return `{"title": "${this.title}", "summary": "${this.summary}"}`; // As of version 1.4
    }
    
    example(x) {//string, number, boolean, string[], () => string, {a: string, b: number }
        x.name = "foo";
        var q = x + x;
        alert(q);
        window.onmousemove = function(e) {e.clientX;}
    }
}