# Ionic 2 Todo TypeScript

This project is meant to demonstrate a traditional JavaScript Ionic 2 app converted to TypeScript.

## Environment

I am using Microsoft Visual Studio Code (VSC) => 0.10.10.
VSC is an excellent choice for editing as it understands TypeScript out of the box.

Check your environment against these node modules:  
nvm --version => 0.25.4  
node -v => v5.7.1  
tsc -v => Version 1.8.7  
ionic -v => 2.0.0-beta.19  

I use Node Version Manager (NVM) it let's me try stable and unstable builds in seconds.

These are the node modules:  
npm install -g typescript  
npm install -g ionic@beta  
npm install -g cordova  

You may try other node module versions, these are what I tested against.

## Installation

Download or clone the project from GitHub and run the following via the Command Prompt (Windows) or Terminal (Mac and Linux):

```
npm install
```
If you get an error, people are aware and working the issue, so do the following.
Add "declare var Promise: PromiseConstructor;" to the top of "node_modules/angular2/src/facade/promise.d.ts" file.


This will install all Ionic 2, Node.js and Angular 2 dependencies into the project.

Next run the project.

```
ionic serve
```

## TypeScript examples are laced throughout the source code
todoItem.ts: example(), native string, overload, getter, setter, implements, private, public
Ijson.ts: interface  
evenbetterTodoItem.ts: extends, super  
App.ts: decorator, types, lambda, root  
ListPage.ts: dataservice promise, lambda, new clases, additem (pop lambda), listitem  
Add-Item.ts: constructor, init overloads, pop  
Item-detail.ts: events, ionic serve c, debug  

## Hints
ionic serve -b // to make changes without launching the browser every time.  
Once the server is up type a "c" to output the console log output.  
I added logging to show when events happen.  

Ionic server commands, enter:
  restart or r to restart the client app from the root
  goto or g and a url to have the app navigate to the given url
  consolelogs or c to enable/disable console log output
  serverlogs or s to enable/disable server log output
  quit or q to shutdown the server and exit

## How this project began
npm install –g ionic@beta cordova typescript  
ionic start ionic2-todo-ts blank --v2 --ts  
cd ionic2-todo-ts  
I started with Josh Morony's JavaScript base and converted it to TypeScript.  
Note: I renamed description to summary, if you ever port to iOS description equals toString  

## Resources

Anders Hejlsburg: father of TypeScript
https://channel9.msdn.com/posts/Anders-Hejlsberg-Introducing-TypeScript

Josh Morony: Ionic2 JavaScript Todo app
http://www.joshmorony.com/build-a-todo-app-from-scratch-with-ionic-2-video-tutorial/

I saved a PDF of the presentation: TypeScriptOnly20160209.pdf
