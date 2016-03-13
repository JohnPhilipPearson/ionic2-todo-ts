import {Storage, SqlStorage} from 'ionic-angular';
import {Injectable} from 'angular2/core';

 
@Injectable()
export class DataService {
    storage: Storage;
    data: any[] = [];
    constructor(){
        console.log('DataService.constructor');
        this.storage = new Storage(SqlStorage, {name:'todo'});
        this.data = null;
 
        this.storage.get('todos').then((todos) => {
            this.data = JSON.parse(todos);
            if (!(Object.prototype.toString.call(this.data) === '[object Array]')){
            this.data = [];
            console.log('DataService.constructor.storage.get', this.data.length );
        }
        else {
            console.log('DataService.constructor.storage.get', this.data.length );
        }
        });
 
    }
 
    getData() {
        console.log('DataService.getData');
        return this.storage.get('todos'); 
    }
    
    removeData() {
        console.log('DataService.removeData');
        this.storage.remove('todos'); 
    }
 
    save(item){
        console.log('DataService.save', item);
        if(!this.data){
            this.data = [item];
            let newData = JSON.stringify(item);
            this.storage.set('todos', newData);
        } else {
            this.data.push(item);
            let newData = JSON.stringify(this.data);
            this.storage.set('todos', newData);
        }
    }
    saveItems(items){
        console.log('DataService.save', items);
        if(!items){
            throw new Error('saveItems failed');
        } else {
            this.data = items;
            let newData = JSON.stringify(this.data);
            this.storage.set('todos', newData);
        }
    }
    //3	todos	[{"title":"a","description":"a"},{"title":"b","description":"b"},{"title":"c","description":"c"}]
    //4	todos	[{"title":"a","summary":"a"},{"title":"b","summary":"b"},{"title":"c","summary":"c"}]
}