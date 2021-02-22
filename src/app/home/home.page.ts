import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



// import { Component, ElementRef, OnInit } from '@angular/core';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

// @Component({
//   selector: 'app-home',
//   templateUrl: 'home.page.html',
//   styleUrls: ['home.page.scss'],
// })
// export class HomePage implements OnInit {



//    /**
//     * Property that will store the selected hyperlink from the view template 
//     * @private
//     * @name _link
//     * @type {string}
//     */
//    private _link : string;



//    /**
//     * HTML string that contains embedded hyperlinks (that we will be 'activating'
//     * later on in the script)
//     * @public
//     * @name snippet
//     * @type {string}
//     */
//    public snippet : string = `
//                               <ul>
//                                  <li>
//                                      <a href="https://lin.ee/z7kLUCI">ไอรู้สู้โควิดถามตอบ</a>
                                   
                                   
//                                  </li>
                                 
//                               </ul>`;
                              

// // <a href="https://lin.ee/z7kLUCI"><img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0"></a>


//    /**
//     * Initialises the class with required dependencies
//     * @constructs
//     * @param {InAppBrowser}   _browser      Ionic Native InAppBrowser plugin module
//     * @param {ElementRef}     _element      Angular ElementRef module
//     */
//    constructor(private _browser : InAppBrowser,
//                private _element : ElementRef)
//    {  }




//    /**
//     * Use Angular OnInit lifecycle hook to trigger functionality when the view is initialising
//     * @public 
//     * @method ngOnInit
//     * @return {none}
//     */
//    public ngOnInit() : void
//    {
//       this._enableDynamicHyperlinks();
//    }




//    /**
//     * Enable hyperlinks that are embedded within a HTML string
//     * @private
//     * @method _enableDynamicHyperlinks
//     * @return {none}
//     */
//    private _enableDynamicHyperlinks() : void
//    {
//       // Provide a minor delay to allow the HTML to be rendered and 'found'
//       // within the view template
//       setTimeout(() => 
//       {
//          // Query the DOM to find ALL occurrences of the <a> hyperlink tag
//          const urls : any    = this._element.nativeElement.querySelectorAll('a');

//          // Iterate through these
//          urls.forEach((url) => 
//          {
//             // Listen for a click event on each hyperlink found
//             url.addEventListener('click', (event) => 
//             {
//                // Retrieve the href value from the selected hyperlink
//                event.preventDefault();
//                this._link = event.target.href;

//                // Log values to the console and open the link within the InAppBrowser plugin
//                console.log('Name is: ' + event.target.innerText);
//                console.log('Link is: ' + this._link);
//                this._launchInAppBrowser(this._link);
//             }, false);
//          });
//       }, 2000);
//     }
// /**
//     * Creates/launches an Ionic Native InAppBrowser window to display hyperlink locations within 
//     * @private
//     * @method _launchInAppBrowser
//     * @param {string}    link           The URL to visit within the InAppBrowser window 
//     * @return {none}
//     */
//    private _launchInAppBrowser(link : string) : void
//    {
//       let opts : string = "location=yes,clearcache=yes,hidespinner=no"
//       this._browser.create(link, '_blank', opts);
//    }

// }