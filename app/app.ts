import {App, Platform, Config} from 'ionic-angular';
import {ListPage} from './pages/list/list';
import {DataService} from './providers/data/data';
//Page, 
@App({
  template: `
    <ion-nav [root]="root"></ion-nav>
  `,
  providers: [DataService],
  // Check out the config API docs for more info
  // http://ionicframework.com/docs/v2/api/config/Config/
  config: { tabbarPlacement: 'bottom',
}

})
export class MyApp {
    
    platform: Platform;
    // rootPage: any;
    root: any;
    
  constructor(platform: Platform) {
    this.platform = platform;
    this.initializeApp();
    // this.rootPage = ListPage;
    this.root= ListPage;
    console.log('MyApp.constructor');
  }

  initializeApp() { //Lamda expression ()=>{}
    this.platform.ready().then(() => {
      console.log('MyApp.initializeApp Platform ready');
    });// Cordova Ready
  }
}
