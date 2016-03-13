import {Page, NavController, NavParams} from 'ionic-angular';
import {AddItemPage} from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import {DataService} from '../../providers/data/data';
import {IJson} from '../../models/IJson'
import {TodoItem } from '../../models/todoitem'
import {EvenBetterTodoItem } from '../../models/evenbettertodoitem'

@Page({
  templateUrl: 'build/pages/list/list.html',
})
export class ListPage {
    nav: NavController;
    dataService: DataService;
    items: any[] = [];// Note to use lambda items must be declared
  constructor(nav: NavController, dataService: DataService) {
      console.log('ListPage.constructor');
      
      this.nav = nav;
      this.dataService = dataService;
      
      this.dataService.getData().then((todos) => {
          let storedItems = JSON.parse(todos) || [];
          storedItems.forEach((item) => { //lambda
            let newItem = new TodoItem();//EvenBetterTodoItem
            //newItem.osummary = "jj";
            newItem.initTodoItem(item.title, item.summary);
            //newItem.initTodoItem(item);
            this.items.push(newItem);
        });
          
          
          
        //this.items = JSON.parse(todos) || [];
        if (!(Object.prototype.toString.call(this.items) === '[object Array]')){
            this.items = [];
        }
    });
    
      
    // this.items = [
    //     {title: 'hi1', summary: 'test1'},
    //     {title: 'hi2', summary: 'test2'},
    //     {title: 'hi3', summary: 'test3'},
    // ];
    
  }
  
  returnToList(item: IJson) {//TodoItem, EvenBetterTodoItem
      this.saveItem(item);
      this.nav.pop();
  }
  
    addItem() {
        console.log('ListPage.addItem', "new item");
        this.nav.push(AddItemPage
        , { listPage: this, pop: (item) => {this.returnToList(item) }} // lambda
        , {}
        ).then((value: any) => { 
            console.log('ListPage inside addItem success block', value );
        })
        .catch((reason:any) => {console.log('ListPage inside addItem catch block', reason )})
    
  }
 
  saveItem(item: IJson) {//TodoItem, EvenBetterTodoItem
    this.items.push(item);
    var newItem = JSON.parse(item.getJSON());
    this.dataService.save(newItem);
  }
  
  removeAllItems() {
      this.dataService.removeData();
  }
  
  myFunction() {
      
      let jj = new TodoItem();
        // jj.osummary = "jj";// uncomment to see private and only accessable in the class
      
      
      console.log('ListPage.myFunction', setAllItems);
      var setAllItems: any [] = [];
      this.items.forEach((item: IJson) => {//TodoItem, EvenBetterTodoItem
          
            // item.summary = item.title;// typescript error properties do not exist on IJson
            var newItem = JSON.parse(item.getJSON());
            setAllItems.push(newItem);
            console.log('ListPage.myFunction', newItem);
        });
      this.dataService.saveItems(setAllItems);
  }
  
 viewItem(item) {
     console.log('ListPage.viewItem', item);
     this.nav.push(ItemDetailPage
     , { item: item }
     , {}
     ).then((value: any) => {
         console.log('ListPage inside viewItem success block', item);}
     ).catch((reason:any)=>{console.log('ListPage inside viewItem catch block', reason )})
 }
  
}
