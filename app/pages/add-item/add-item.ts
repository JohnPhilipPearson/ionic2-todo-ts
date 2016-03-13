import {Page, NavController, NavParams} from 'ionic-angular';
import {TodoItem } from '../../models/todoitem'
import {EvenBetterTodoItem } from '../../models/evenbettertodoitem'
 
@Page({
  templateUrl: 'build/pages/add-item/add-item.html',
})
 
export class AddItemPage {
    nav: NavController;
    navParams: NavParams;
    title: string;
    summary: string;
    constructor(nav: NavController, navParams: NavParams) {
        this.nav = nav;
        this.navParams = navParams;
 
        this.title = "";
        this.summary = "";
        console.log('AddItemPage.constructor');
        }
 
  saveItem() {
      console.log('AddItemPage.saveItem');
      // overload one
      let newItem = new TodoItem().initTodoItem(this.title 
      , this.summary);
      
      //   let foo = newItem.toString();
      //   let fooo = JSON.parse(foo);
      
      // overload two
      //   let newItem = new TodoItem();
      //   newItem.initTodoItem(newItemTemp);
      
      
      //this.navParams.get('listPage').saveItem(newItem);
      let pop = this.navParams.get('pop');
      pop(newItem);
      //this.nav.pop();
      console.log('AddItemPage.saveItem', pop);
      }
 
}