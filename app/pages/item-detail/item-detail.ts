import {Page, NavController, NavParams} from 'ionic-angular';

@Page({
  templateUrl: 'build/pages/item-detail/item-detail.html',
})
 
export class ItemDetailPage {
    navParams: NavParams;
    title: string;
    summary: string;
    
  constructor(navParams: NavParams) {
    console.log('*ItemDetailPage.constructor ');
    this.navParams = navParams;
 
    this.title = this.navParams.get('item').title;
    this.summary = this.navParams.get('item').summary;
    let item = this.navParams.get('item').toString();
    console.log('*ItemDetailPage.constructor ', item);
  }
  
  onPageLoaded(){
      console.log('**ItemDetailPage.onPageLoaded ');
      console.log('**Runs when the page has loaded.');
      console.log('**This event only happens once per page being created and added to the DOM.');
      console.log('**If a page leaves but is cached, then this event will not fire again on a subsequent viewing.');
      console.log('**The onPageLoaded event is good place to put your setup code for the page');
  }
  
  onPageWillEnter() {
      console.log('***ItemDetailPage.onPageWillEnter ');
      console.log('***Runs when the page is about to enter and become the active page.');
  }
  
  onPageDidEnter() {
      console.log('****ItemDetailPage.onPageDidEnter ');
      console.log('****Runs when the page has fully entered and is now the active page.');
      console.log('****This event will fire, whether it was the first load or a cached page.');
  
  }
  
  onPageWillLeave() {
      console.log('****ItemDetailPage.onPageWillLeave ');
      console.log('****Runs when the page is about to leave and no longer be the active page.');
  }
  
  onPageDidLeave() {
      console.log('***ItemDetailPage.onPageDidLeave ');
      console.log('***Runs when the page is about to be destroyed and have its elements removed.');
  }
  
  onPageDidUnload() {
      console.log('**ItemDetailPage.onPageDidUnload ');
      console.log('**Runs after the page has been destroyed and its elements have been removed.');
      console.log('* Note: No ItemDetailPage.destructor ');
      console.log('* Garbage collection in Javascript');
  }
  
}