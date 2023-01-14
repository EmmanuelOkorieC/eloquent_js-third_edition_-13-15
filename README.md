# Eloquent Javascript, 3rd Edition: A modern Introduction to programming
An overview, with solutions and explanation of exercises in chapters thirteen to fifteen of the ebook [Eloquent Javascript, 3rd Edition](https://eloquentjavascript.net/Eloquent_JavaScript.pdf) by Marijn Haverbeke

## Overview
### Chapter Thirteen: Javascript and The Browser
The author starts this chapter by reitarating the importance of browsers to the existence of javascript. And then went ahead to talk about how the browser is decentralized and is controlled and improved on by different browser vendors working in loose collaboration. This of course has it's pros and cons.

Putting cables between two or more computers and having them send data back and forth through these cables is called **computer networking** and has been around since the 1950s. This little idea led to the implementation of the grand network, the **internet** in the 1980s. The *internet* connects machines all over the planet and has certainly lived up to it's promise.

Over a network, data is transferred from one computer to another as a **sequence of bit shooting**. And for any effective communication to arise from bit shooting, both ends must know what the bits represent. A *network protocol* describes a style of communication over a network. There are protocols for doing a varying number of things over a network, sending email, fetching email, sharing files etc. 

A popular example is the *Hypertext transfer protocol* (HTTP) for retrieving named resources (chunks of information such as web pages or pictures). It specifies that the side making the request should start with a line like this, naming the resource and the version of protocol it is trying to use
```
GET /index13.html HTTP/1.1
```
Most protocols are built on other protocols. For example, the HTTP and a whole lot of varying protocols are built on the TCP (*transmission control protocol*) which makes sure that data arrives at it's correct destination in the correct order.

A TCP connection works as follows, one computer must be waiting or *listening* for other computers to start talking to it. To be able to listen for different kinds of communication at the same time on a single machine, each listener has a number (called a port) associated with it. Another computer then establishes a connection connecting to the target machine using that port number. The listening computer is called a *server* and the connecting computer is called the *client*.

The *world wide web* (not to be confused with the internet as a whole) is a **set of protocols and formats** that allow us visit web pages in a browser. The "web" part hints at the fact that pages can be interrelated. To be a part of the web, all you need to do is connect a machine to the internet and have it listen on port 80 with the HTTP protocol so that other computers can request for it's documents.

Each document on the web is named by a *uniform resource locator* (URL) which looks something like this 
```
http://eloquentjavascript.net/13_browser.html
```
The first part `http://` tells us that the URL uses the HTTP protocol (as opposed to the encrypted one HTTPS which would be `https://`). The second part `eloquentjavascript.net` indicates what server we are requesting the document from. And the last part `13_browser.html` identifies the specific document we are interested in.

Usually when you connect your machine to the internet, you get an *IP address* which is a number that can be used when making a request to your server and looks something like this `149.210.142.219` or `2001:4860:4860::8888` but it is awkward to type and difficult to remember so instead you can register a *domain name* to point at that IP Address. And in the example above, that domain name is `eloquentjavascript.net`.

So if you type this URL into the browser's address bar, it first has to find the IP Adress the domain name `eloquentjavascript.net` refers to. Then it makes a HTTP request to it asking for the resource `13_browser.html`. If that request succeeds, the server sends back the document which the browser displays on the screen. 

The document format used for webpages is HTML which stands for *Hypertext markup language*. An HTML document contains text as well as tags that give structure to the text describing things such as links, paragraphs, and headings. Tags are mostly wrapped in angle brackets `<>`. Some very important ones include 

* `<!doctype html>` - Mostly at the top of the document and tells the browser to interpret the page as modern HTML.
* `<html>` - represents the HTML document and contains a head and body tag
* `<head>` - contains information about the document
* `<body>` - contains the document itself.
* `<h1>` to `<h6>` - contained in the body tag and defines headings and subheadings
* `<p>` - contained in the body tag and defines a paragraph
* `<a>` - contained in the body tag and defines a link
* `<div>` - contained in the body tag and defines a division or section in the document
* `<span>` - contained in the body tag and defines an inline container for a part of a text or document
* `<input>` - contained in the body tag and defines a form field for user input
* `<button>` - contained in the body tag and defines a button
* `<title>` - contained in the head tag and declares the title of the document
* `<meta>` - contained in the head tag and defines metadata about an HTML document
* `<script>` - can be contained in the head or body tag and allows us include a piece of javascript in a document

Tags come in different forms. The ones that enclose something need a closing tag and the ones that don't like `<meta>` and `<input>` don't. Some opening tags, such as the one for the link (`<a>`), contain extra information in the form of name="value" pairs. These are called *attributes*. The `href`(hypertext reference) attripute on a link indicates it's destination.

Special notation such as the angle brackets need to be escaped if you want it included in the text of your HTML document. And to do that, we write an ampersand(&) character followed by a name or character code and a semicolon(;). E.g `&lt;`("less than" >) or `&gt;` ("greater than" >). This is called an *entity* . Since ampersand has a special meaning too, they need to be escaped as `&amp;`. Inside attribute values, which are wrapped in double quotes, `&quot;` can be used to insert an actual quote character.

Javascript can be written directly in the `<script>` tag. But including large programs directly in HTML documents is often impractical. The `<script>` tag can be given an "src" attribute to fetch a script file (a
text file containing a JavaScript program) from a URL.

When an HTML page references other URLs as part of itself—for example, an image file or a script, web browsers will retrieve them immediately and include them in the page. You can load ES modules in the browser by giving your script tag a `type="module"` attribute.

Some attributes can also contain javascript program. For example, the button tag has an *onclick* attribute that gets assigned a javascript program that runs when the button is clicked
```xml
<button onclick="alert('Boom!');">DO NOT PRESS</button>
```
Browsers limit what a javascript program may do: It can't look at files on your computer or modify anything not related to the web page it is embedded in. Isolating a program this way is called *sandboxing* and protects anyone browsing through the web from having their data stolen or accounts hacked or their computers infected by viruses from a malicious program.

### Chapter Fourteen: The Document Object Model
When a web page is opened in a browser, the browser retreives the HTML text and parses it to build up a model of the document's structure. This model is used to draw the page on the screen.

HTML documents resemble a nested set of boxes, with tags enclosed in tags, and the data structure the browser uses to represent it will follow this same shape. For each box, there is an object which we can interact with to find out what text or other boxes it contains, what HTML tag it represents. This representation by the browser is called the *Document Object Model* or DOM for short.

The global binding `document` gives us access to these objects. Its `documentElement` property refers to the object representing the `<html>` tag and since every HTML document has a head and body, it also has `head` and `body` properties pointing at those elements.

The DOM structure takes the shape of a tree, with objects nested in objects that are nested in objects and with a well defined root that does not point to itself. A typical syntax tree has nodes (just like in chapter 12 where the syntax tree had values, identifiers and application nodes) and the DOM isn't any different. Nodes for *elements* which represent HTML tags determine the structure of the document. These can have child nodes, which can be another element node or can be leaf nodes such as pieces of text or comment nodes.

Each DOM node has a `nodeType` property which contains a code (number) that identifies the type of node.  Elements have code 1 (also defined as the constant property `Node.ELEMENT_NODE`). Text nodes get code 3 (`Node.TEXT_NODE`). Comment nodes get code 8 (`Node.COMMENT_NODE`).

Since the DOM wasn't exactly built for javascript (but as a language neutral interface that can be used in other systems as well - not just HTML but also for XML), it means the interface often comes off weird and is not ideally what you would expect from a javascript program. For example, calling the `childNodes` property that elements in the DOM have returns an "array-like" object with a `length` property and properties labeled by numbers to access the child nodes. But it is an instance of the `NodeList` type, not a real array, so it does not have methods such as `slice` and `map`. 

DOM nodes contain a wealth of links to other nearby nodes. Every node has a `parentNode` property that points to the node it is a part of, if any. Likewise, every Element node (node type 1) has a `childNodes` property that points to an array-like object holding it's children. The `firstChild` and `lastChild` properties point to the first and last child elements or have the value `null` for nodes without children. `previousSibling` and `nextSibling` point at nodes that appear immediately or after a node. For a first child, `previousSibling` will be `null`, and for a last child, `nextSibling` will be `null`. There’s also the `children` property, which is like `childNodes` but contains only element (type 1) children, not other types of child nodes.

The `nodeValue` property of a text node holds the string of text that it
represents.

Following a fixed path when navigating the DOM (using links) can be a bad idea for a few reasons. For one, Your DOM structure might change later which might affect the nodes you're pointing at. Also text nodes are created even for whitespaces between nodes which makes it a bit complicated to work with. Instead there are more efficient ways to find elements in the DOM. All element nodes have a `getElementsByTagName` method, which collects all elements with the given tag name that are descendants (direct or indirect children) of that node and returns them as an array-like object. To find a specific single node, you can give it an id attribute and use `document.getElementById` instead. A third, similar method is `getElementsByClassName`, which, like `getElementsByTagName`, searches through the contents of an element node and retrieves all elements that have the given string in their "class" attribute.

Almost everything about the DOM data structure can be changed. The
shape of the document tree can be modified by changing parent-child
relationships. Some important methods for doing this includes:
* `remove` - removes a node from it's current parent node
* `appendChild` - adds a child node to the end of an element node
* `insertBefore` - inserts the node given as the first argument before the node given as second argument
* `replaceChild` - replaces a child node with another one. It takes as arguments two nodes: a new node and the node to be replaced.

Text nodes are created with the `document.createTextNode` method. This method takes a string as argument and gives us a text node that we can insert into the document to make it show up on the screen. The `document.createElement` method is used to create element nodes. It takes a tag name and returns a new empty node of the given type.

The `Array.from` method can be used to convert a `nodeList` collection (live or not) to a real array. (note- or like i have discovered recently spreading it in an array i.e `[...NodeListArray]`)

Standard attributes like `href` on links can be accessed through a property of the same name on the element's DOM Object. Made up attributes can be accessed or set by using the `setAttribute` and `getAttribute` methods. It is recommended to prefix names of such made-up attributes with `data-` to ensure they don't conflict with any other attributes.

Some HTML elements like `<h1>`, `<p>` are *block* elements as they take up the whole width of the document and are rendered on seperate lines. Others such as `<a>`, `<strong>` are *inline* elements and are rendered on the same line with their surrounding texts.

For any given document, browsers are able to compute a layout, which
gives each element a size and position based on its type and content. This layout is then used to actually draw the document.

The size and position of an element node can be accessed from Javascript:
* `offsetWidth` - returns the width the element takes up in pixels 
* `offsetHeight` - returns the height the element takes up in pixels
* `clientHeight` -  same as `offsetHeight` but ignores border width
* `clientWidth` -  same as `offsetWidth` but ignores border width
* `getBoundingClientRect` - returns an object with `top`,
`bottom`, `left`, and `right` properties, indicating the pixel positions of the sides of the element relative to the top left of the screen. Usually the most effective way to find the precise position of an element on the screen
* `pageXOffset`(deprecated, now `scrollX`) - returns your current scroll position on the X axis and affects `getBoundingClientRect` as it then returns the position relative to the whole document
* `pageYoffset`(deprecated, now `scrollY`) - returns your current scroll position on the Y-axis.

In the interest of speed, browsers do not immediately, re-layout a document when you change it but wait as long as they can. when a javascript program that changed the document finishes running, the browser computes a new layout to draw the document to the screen. Also when a program asks for the size or position of an element, providing correct information also requires computing a layout. So a program that alternates between reading the DOM layouts and changing the DOM forces a lot of layout computations to happen and will consequently run very slowly.

You can add styling to your HTML elements by adding `style` as an attribute
```xml
<p><a href="." style="color: green;text-decoration: none">Green link</a></p>
```
The `display` property when styling, controls whether an element is displayed as a block or inline element. The `block` value displays an element as block, `inline` as an inline element and `none` prevents an element from showing on the screen. This is a way to hide elements.

Javascript can manipulate the style of an element through the element's `style` property. 

You can also style an HTML document with a styling system called CSS (*cascading style sheets*). It can be given inside a `<style>` tag or in it's own separate document.

When multiple rules define a value for the same property, the most recently read rule gets a higher precedence and wins. For example, styling the text in a `<strong>` tag with `font-weight: normal` means the text would now be normal, not bold.

It is possible to target things other than tag names in CSS rules. A rule
for `.abc` applies to all elements with "abc" in their class attribute. A rule for `#xyz` applies to the element with an id attribute of "xyz" (which should be unique within the document).

The precedence rule favoring the most recently defined rule applies
only when the rules have the same specificity. A rule’s specificity is a measure of how precisely it describes matching elements, determined by the number and kind (tag, class, or ID) of element aspects it requires.

It is possible to use CSS selector syntax to find DOM elements. This is made posible by using the `querySelectorAll` or `querySelector` method. The `querySelectorAll` method takes a selector string and returns a NodeList containing all the elements that it matches. The `querySelector` method works the same way but will return only the first matching element or null when no element matches.

The *style* property `position` influences layout in a very poweful way. By default, it has the value `static` meaning an element sits in it's normal place in the document. This default value can be reset to the following:
* `relative` - element still takes up space in the document, but now the `top` and `left` style properties can be used to move it relative to that normal place
* `absolute` - element is removed from the normal document flow and is absolutely positioned relative to the top-left corner of the nearest enclosing element whose position property isn’t `static`, or relative to
the document if no such enclosing element exists.
* `fixed` - element is absolutely positioned relative to the top-left corner of the document and remains so even on scroll
* `sticky` - element is absolutely positioned relative to the top-left corner of the document and on scroll, sticks to the top of the page (or bottom)

The `requestAnimationFrame` function can be used to schedule an animation. This function runs whenever the browser is ready to repaint the screen. If we simply animated by updating the DOM in a loop, the page would freeze, and nothing would show up on the screen. Browsers do not update their display while a JavaScript program is running, nor do they allow any interaction with the page. This is why the `requestAnimationFrame` function is so important. To provide a smooth animation, the `requestAnimationFrame` function can be called recursively. For every call, It takes a function that it calls to update the DOM as argument. (This function itself takes the current time as it's default argument). Updates happen at about 60 per second (which is about 16.6ms per frame.

The `Math.sin` and `Math.cos` functions are useful for finding points on a circle around point(0, 0) with a radius of one. The unit for measuring angles when using these functions is called radians—a full circle is 2π radians, similar to how it is 360 degrees when measuring in degrees. So it's value between 0 and 2π indicates what point on the circle we are currently at. Positions (or angles) greater than 2π or less than 0 are also valid i.e a + 2π refers to the same angle as a.

### Chapter Fifteen: Handling Events
Browsers allow us register a function (called a *handler*) when a specific event occurs. This function takes an `event` object(with additional information about the event) as argument and we can use this object(or not) to handle what happens in the DOM or we can use it to read user input (e.g To figure out what key on the keyboard was pressed ).

The `addEventListener` method on DOM element objects or the `window` object helps us achieve this
```xml
<p>Click this document to activate the handler.</p>
<script>
window.addEventListener("click", () => {
console.log("You knocked?");
});
</script>
```
The `window` binding refers to a built-in object provided by the browser.
It represents the browser window that contains the document. Calling its
`addEventListener` method registers the second argument to be called whenever the event described by its first argument occurs. 

Giving a node an `onclick` attribute has a similar effect. This works for most types of events—you can attach a handler through the attribute whose name is the event name with `on` in front of it. 

But a node can have only one `onclick` attribute, so you can register only one handler per node that way. The `addEventListener` method allows you to add any number of handlers so that it is safe to add handlers even if there is already another handler on the element.

The `removeEventListener` method, called with arguments similar to `addEventListener`, removes a handler. 

An event object's `type` property holds a string identifying the type of event. The event object's `button` property on a "mousedown" event tells us which mouse button was pressed. 0 for the left, 1 for the middle and 2 for the right button

For most event types, handlers registered on nodes with children will also receive events that happen in the children. For example, If a button inside a paragraph is clicked, event handlers on the paragraph will also see the click event. This is called *propagation* and can be stopped by calling an event object's `stopPropagation` method. 

Most event objects have a `target` property that refers to the node where they originated. You can use this property to ensure that you’re not accidentally handling something that propagated up from a node you do not want to handle.

You can use an event object's `preventDefault` method to prevent a default action from taking place (For example you can use it to make sure that when you click a link, it doesn't take you to another page or when you right click, it does not pop up a context menu). It is important to note that not every default event can be prevented by javascript e.g scrolling

When a key on the keyboard is pressed, your browser fires a "keydown" event. When it is released, you get a "keyup" event. Despite its name, "keydown" fires not only when the key is physically pushed down. When a key is pressed and held, the event fires again every time the key repeats and it is important to be careful about this. 

Both events (keydown and keyup) have a `keys` property that holds a string that, for most keys, corresponds to what is being typed by pressing that key. Modifiers such as SHIFT, CTRL, META, ALT generate keys just like normal keys, But when looking for key combinations, you can also find out whether these keys are held down by looking at the `shiftKey`, `ctrlKey`, `altKey`, and `metaKey` properties of keyboard and mouse events. 

The DOM node where a key event originates depends on the element that has focus when the key is pressed. Most nodes cannot have focus unless you give them a `tabindex` attribute, but things like links, buttons, and form fields can.

To notice when something was typed, elements that you can type into,
such as the `<input>` and `<textarea>` tags, fire "input" events whenever the user changes their content.

Pressing a mouse button causes a number of events to fire. The `mousedown` and `mouseup` events are similar to the `keydown` and `keyup` and fire when the button is pressed and released. After the `mouseup`, a `click` event is fired on the most specific node that contained both the press and the release of the button. If two clicks happen close together, a `dblclick`(double-click) also fires after the second click event.

To get precise information about the place where a mouse event happened,
you can look at its `clientX` and `clientY` properties, which contain the
event’s coordinates (in pixels) relative to the top-left corner of the window, or `pageX` and `pageY`, which are relative to the top-left corner of the whole document (which may be different when the window has been scrolled).

Every time the mouse pointer moves, a "mousemove" event is fired. This event can be used to track the position of the mouse. A "mousemove" event has a `buttons` property which tells us which buttons are currently being held down. When this is zero, no buttons are down. When buttons are held, its value is the sum of the codes for those buttons—the left button has code 1, the right button 2, and the middle one 4. (different from that the `button` property in "mousedown"). (note- "mousemove" events fire very quick just like scroll events).

There are three touchscreen events. "touchstart" for when a finger starts touching the screen, "touchmove" when it is moved while touching and "touchend" when it stops touching the screen. Because many touchscreens can detect multiple fingers at the same time, these events don’t have a single set of coordinates associated with them. Rather, their event objects have a `touches` property, which holds an array-like object of points, each of which has its own `clientX`, `clientY`, `pageX`, and `pageY` properties. You’ll often want to call `preventDefault` in touch event handlers to override the browser’s default behavior (which may include scrolling the page on swiping) and to prevent the mouse events from being fired, for which you may also have a handler.

Whenever an element is scrolled, a "scroll" event is fired on it. This has various uses such as knowing what the user is currently looking at or
showing some indication of progress. 

The global `innerHeight` binding gives us the height of the windiow.  `document.body.scrollHeight` can be used to determine the total scrollable height of of a document.

When an element gains focus, the browser fires a "focus" event on it. When it loses focus, the element gets a "blur" event. Unlike other events, these events do not propagate.

When a page finishes loading, the "load" event fires on the window and the document body objects. This can be important for example if  your `script` tag appears before the DOM elements have been loaded. (note- the `DOMContentLoaded` event is similar to the `load` event. Only difference is in a case where your html document contains a lot of external resources, `DOMContentLoaded` will fire when  the DOM object has been loaded and you can start interacting with it before all the resources have been loaded(This is mostly an issue when network is slow)). 

Elements such as images and script tags that load an external file also
have a "load" event that indicates the files they reference were loaded. Like the focus-related events, loading events do not propagate.

When a page is closed or navigated away from (for example, by following
a link), a "beforeunload" event fires. The main use of this event is to
prevent the user from accidentally losing work by closing a document. Ideally it is done by assigning a non-null value to the event object's `returnValue` property. When you do that, the browser will show the user a dialog asking if they are sure they want to leave the page( New browsers default what goes in the dialog box but old browsers will use the value you assign to `returnValue`).

The fact that events can be processed only when nothing else is running
means that, if the event loop is tied up with other work, any interaction with the page (which happens through events) will be delayed until there’s time to process it. So say a `click` event calls a long running function, the page will be uninteractive till that function is done running. Now the simple solution in cases where you really have to do something time-consuming in the background is to use *web workers*. A worker is a JavaScript process that runs alongside the main script, on its own timeline. (note - This is much like creating a multithread).
```javascript
let squareWorker = new Worker("code/squareworker.js");
squareWorker.addEventListener("message", event => {
console.log("The worker responded:", event.data);
});
squareWorker.postMessage(10);
squareWorker.postMessage(24);
```
Worker objects post messages to the Worker file and listens for a response using the "message" event

```javascript
addEventListener("message", event => {
postMessage(event.data * event.data);
});
```
The above is our worker file and all it does is square the number it receives and responds to the main thread with the result. If this was a long running action, It'll return the result only when it is done with the computation. This means we can go ahead and do other things on the DOM while the computation is running.

Only values that can be represented as `JSON` can be sent as messages—the
other side will receive a copy of them, rather than the value itself.

Sometimes you need to cancel a function you have scheduled. This is done by storing the value returned by `setTimeout` and calling `clearTimeout`
on it.
```javascript
let bombTimer = setTimeout(() => {
console.log("BOOM!");
}, 500);

if (Math.random() < 0.5) { // 50% chance
console.log("Defused.");
clearTimeout(bombTimer);
}

//outputs Defused or outputs BOOM! after 500ms
```
The `cancelAnimationFrame` and `clearInterval` work in the same way, the former cancelling the frame returned by the `requestAnimationFrame` function and the latter cancelling the value returned by the `setInterval` function. (note- `setInterval` is used to set timers that should repeat after a given number of milliseconds).

Some types of events have the potential to fire rapidly, many times in a row (the "mousemove" and "scroll" events, for example). When handling such events, one must be careful not to do anything too time-consuming or the handler will take up so much time that interaction with the document starts to feel slow. 

If there is a need to do something nontrivial in such a handler,we  can use `setTimeout` to make sure we are not doing it too often. This is usually called *debouncing* the event. There are several slightly different approaches to this.

For example, if you want to react when the user has typed something but don't want to do it immediately for every input event. You can delay the action until there is a pause (when the user has stopped typing). This is usually done by wrapping our event action in a `setTimeout`, Then clearing it everytime the user inputs something. If the user delays inputing something by a specified number of milliseconds, the event action can then run
```xml
<textarea>Type something here...</textarea>
<script>
let textarea = document.querySelector("textarea");
let timeout;
textarea.addEventListener("input", () => {
clearTimeout(timeout);
timeout = setTimeout(() => console.log("Typed!"), 500
});
</script>
```
For the action above,"Typed" is logged only when there is a delay in typing by 500ms. Else it keeps clearing the `setTimeout` value and reassigning it. Giving an undefined value to `clearTimeout` or calling it on a timeout that has already fired has no effect. Thus, we don’t have to be careful about when to call it, and we simply do so for every event

We can use a slightly different pattern if we want to space responses so
that they’re separated by at least a certain length of time but want to fire them during a series of events, not just afterward (i.e fire the events every set amount of seconds and not afterwards like the first example). To do this we can set an action that runs only after a set amount of milliseconds and then doesn't run anymore
```xml
<script>
  let scheduled = null;
  window.addEventListener("mousemove", event => {
     if (!scheduled) {
      setTimeout(() => {
         document.body.textContent =
            `Mouse at ${scheduled.pageX}, ${scheduled.pageY}`;
         scheduled = null;
       }, 250);
     }
   scheduled = event;
});
</script>
```
The above example shows the current co-ordinates of the mouse after every 250ms. When `scheduled` is `null`, the event function wraps our action in a `setTimeout`and this action goes off to the event loop. The function then proceeds to reassign the `event` object to `scheduled`. For every "mousemove" event, it keeps doing that (reassign the `event` object to `scheduled`) until the function from the event loop runs and sets `scheduled` to `null` again and it sends another function to the event loop.

## Exercises
### Chapter Thirteen: Javascript and The Browser
* No exercises for this chapter

### Chapter Fourteen: The Document Object Model
* 14.1 Build a Table

For this exercise, I was tasked to build a table from a *data set* of mountains (an array of objects with `name`, `height`, and `place` properties). This table will have one column per key and one row per object, plus a header row with <th> elements at the top, listing the column names. it's DOM structure will look something like this
```xml
<table>
  <tr>
     <th>name</th>
     <th>height</th>
     <th>place</th>
  </tr>
  <tr>
     <td>Kilimanjaro</td>
     <td>5895</td>
     <td>Tanzania</td>
  </tr>
</table>
```
I was tasked to write this so that the columns are automatically derived from the objects, by taking the property names of the first object in the data. I was also tasked to add the resulting table to a `div` element with an id attribute of "mountains" so that it becomes visible in the document and to right-align cells that contain number values by setting their `style.textAlign` property to "right".

To start with, I went online and compiled a data-set of popular mountains and assigned this data-set to the binding `mountains`
```javascript
let mountains = [
    {
        name: 'kilimanjaro',
        height: 5895,
        place: "Tanzania"
    },
    {
        name: 'Everest',
        height: 8848,
        place: "Nepal-China"
    },
    {
        name: 'Fuji',
        height: 3776,
        place: "Japan"
    },
    {
        name: 'K2',
        height: 8611,
        place: "Pakistan"
    },
    {
        name: 'Matterhorn',
        height: 4478,
        place: "Switzerland"
    },
    {
        name: 'Elbrus',
        height: 5642,
        place: "Russia"
    }
]
```
Next, i proceeded to create a `table` Element and a Header row (`tr`) that will hold the `th`(table-header) elements. The `th` elements will be derived from the property names of the first object in the dataset
```javascript
const table = document.createElement('table')
const Headerrow = document.createElement('tr')
for (let name of Object.keys(mountains[0])) {
   const tableHead = document.createElement('th')
   tableHead.textContent = name
   Headerrow.appendChild(tableHead)
}
table.appendChild(Headerrow)
```
Since every object in the data set will represent a table row, I created a data Row (`tr`) element for every iteration of the `mountain` object and each one will hold the object's values as it's table-data(`td`)
```javascript
for(let i = 0; i < mountains.length; i++) {
    const dataRow = document.createElement('tr')
    for (let name of Object.keys(mountains[i])) {
        const data = document.createElement('td')
        data.textContent = mountains[i][name]
        dataRow.appendChild(data)
    }
    table.appendChild(dataRow)
}
```
To run this in the browser, i created an HTML document and for the body, added a `div` tag with an `id` attribute of "mountains". The `table` will be appended to this `div`
```xml
<body>
<div id="mountains"></div>

<script src="buildTable.js"></script>
</body>
```
```javascript
document.querySelector('#mountains').appendChild(table)
```
And it worked!. Then, I modified the code to right-align cells that contain number values
```javascript
for(let i = 0; i < mountains.length; i++) {
    const dataRow = document.createElement('tr')
    for (let head of Object.keys(mountains[i])) {
        const data = document.createElement('td')
        data.textContent = mountains[i][head]
        //changes
        if(typeof mountains[i][head] === "number") {
            data.style.textAlign = "right"
        }
        //end 
        dataRow.appendChild(data)
    }
    table.appendChild(dataRow)
}
```
* 14.2 Elements By Tag Name

For this exercise, I was tasked to implement the `document.getElementsByTagName` method as a function that takes a node and a string (the tag name) as arguments and returns an array containing all descendant element nodes with the given tag name. The author pointed that the `nodeName` property can be used to find the tag name of an element but it'll return the tag name in all uppercase

To get this working, I defined the function `getElementsByTagName` and assigned an empty array object to the binding `array`. `array` will hold all the descendant element nodes within the node passed in as argument and will be returned at the end of the function
```javascript
function getElementsByTagName(node, tag) {
    let array = []
    for (let elementNode of Array.from(node.children)) {
        if(elementNode.nodeName.toLowerCase() == tag) {
          array.push(elementNode)
        } 
        array = array.concat(getElementsByTagName(elementNode, tag))
        
      }
    return array
}
```
The recursive call to `getElementsByTagName` mimics searching through each node's direct descendant for another node with the given tag name. This will either return an array with the node(or nodes) or an empty array which will be concatenated to our old array and reassigned to `array` (since calling `concat` returns a new array ). 

To try the function out, i created an HTML document with a couple of `<p>` tags
```xml
<body>
<p>This is the first Paragraph</p>
<p>This is the Second Paragraph</p>
<p>This is the third Paragraph</p>
<div>
<p>This is the fourth Paragraph</p>
</div>

<script src="elementsByTagName.js"></script>
</body>
```
Then i called the function with `document.body` as the node and `p` as the tag name to search for
```javascript
console.log(getElementsByTagName(document.body, "p"))

//Outputs [p{}, p{}, p{}, p{}]
```
* 14.3 The Cat's Hat

For this exercise, I was tasked to extend the cat animation example defined in this chapter so that both the cat and his hat (`<img src="img/hat.png">`) orbit at opposite sides of the ellipse. Or the hat circles around the cat. Or just alter the animation in an interesting way. Ultimately i chose to make the cat and hat orbit at opposite sides with the hat circling around the cat. The author pointed out that to make positioning multiple objects easier, it is a good idea to switch to absolute positioning. And also to avoid using negative coordinates,
which would cause the image to move outside of the visible page, we could
add a fixed number of pixels to the position values.

The code for the cat animation is pretty straight forward 
```xml
<p style="text-align: center">
<img src="cat.jpg" width="200" height="100" id="cat" style="position:relative;">
</p>

<script>
 let cat = document.body.querySelector("#cat")
 let angle = Math.PI / 2 
  
   function animate(time, lastTime) {
    if(lastTime != null) {
         angle += (time - lastTime) * 0.001
    }
    cat.style.left = (Math.cos(angle) * 200) + "px";
    cat.style.top = (Math.sin(angle) * 20) + "px";
    
    requestAnimationFrame(newTime => animate(newTime, time))
   }

   requestAnimationFrame(animate)
</script>

```
The cat picture is given a "relative" position to allow us move the image. The `requestAnimationFrame` schedules the `animate` function that moves the image and calls itself again to schedule the next update. 

The image  itself  uses `Math.cos` and `Math.sin` to track it's X and Y position on a circle of a given width and height and then moves at a constant angle gotten from the difference between the current time and the last time the `requestAnimationFrame` function ran ( if a fixed angle was used instead, it would stutter say if another heavy task running on the same computer prevents the function from running for a fraction of a second). This will produce a clean animation of the cat image moving in an ellipse (large width, small height).

Modifying this to accommodate the hat image was pretty easy. All i did was add another `<img>` tag with the hat image as it's `src` attribute and in the script, assigned it's DOM element to the binding `hat`. I also changed the position style for both images to "absolute"
```xml
<p>
<img src="cat.jpg" width="200" height="100" id="cat" style="position:absolute;">
<img src="hat.png" width="200" height="100" id="hat" style="position:absolute;">
</p>
```
To make sure images don't move outside of the visible page since i'm absolutely positioning, I added 500px to the width and 200px to the height of both images. To make sure they orbit at opposite sides, I added another start angle for the hat image and changed the start angle for the cat image so they'll both start at extreme ends of the circle
```javascript
 let cat = document.body.querySelector("#cat")
 let hat = document.body.querySelector('#hat')
 let angle = Math.PI 
 let angle2 = Math.PI * 2
   
   function animate(time, lastTime) {
    if(lastTime != null) {
         angle += (time - lastTime) * 0.001
         angle2 -= (time - lastTime) * 0.001
    }
    cat.style.left = 500 + (Math.cos(angle) * 200) + "px";
    cat.style.top = 200 + (Math.sin(angle) * 20) + "px";
    hat.style.left = 500 + (Math.cos(angle2) * 300) + "px";
    hat.style.top = 200 + (Math.sin(angle2) * 140) + "px";
    
    requestAnimationFrame(newTime => animate(newTime, time))
   }

   requestAnimationFrame(animate)
```
The cat image will move clockwise by increasing it's angle and the hat image anticlockwise by decreasing it's angle. To make the hat circle around the cat, I increased the given width and height for the ellipse to 300px and 140px

### Chapter Fifteen: Handling Events
* 15.1 Balloon

For this exercise, I was tasked to write a page that displays a balloon (using the balloon emoji, 🎈). When the up arrow is pressed, it should inflate (grow) 10 percent, and when the down arrow is pressed, it should deflate (shrink) 10 percent. I was to make sure the keys change only the balloon, without scrolling the page. After getting this to work, I was tasked to add a feature where if the balloon blows up past a certain size, it explodes(The balloon emoji is replaced with an 💥 emoji, and the event handler is removed).

To get this working, i created a paragraph element and assigned the balloon emoji as it's text content. Then i made the font size 50px and aligned the text to the center of the page before appending the paragraph element to the body of the document
```javascript
let balloon = document.createElement('p')
balloon.textContent = "🎈"
balloon.style.fontSize = 50 + 'px'
balloon.style.textAlign = "center"

document.body.appendChild(balloon)
```
Then i proceeded to add the "keydown" Event listener to the `window` object
```javascript
window.addEventListener('keydown', increase)

function increase(event) {
    const size = Number(balloon.style.fontSize.replace(/px/, ''))
    console.log(size)
    if (event.key == "ArrowUp") {
        event.preventDefault()
        balloon.style.fontSize = (size + (0.1 * size)) + "px" 
    }
    if (event.key == "ArrowDown") {
        event.preventDefault()
        balloon.style.fontSize = Math.max(50, (size - (0.1 * size))) + "px"
    }
}
```
The event listener takes a function `increase` and when called, first grabs the font-size of the balloon and converts it from `String` to a number value that is easier to work with. This number is assigned to the binding `size`. When the up arrow is pressed, This size will increase by precisely 10%. When the down arrow is pressed, It decreases by precisely 10% but does not decrease below the font size of 50px i started with (So the balloon's size remains fixed and you can't deflate it without inflating the balloon first). The `preventDefault` method on the event object is called to prevent the page from scrolling up and down when pressing the up arrow or down arrow key.

After getting this to work, I then modified it to "explode" when the size gets to 170px
```javascript
function increase(event) {
    const size = Number(balloon.style.fontSize.replace(/px/, ''))
    console.log(size)
    if (event.key == "ArrowUp") {
        event.preventDefault()
        //changes
        if (size < 170) {
            balloon.style.fontSize = (size + (0.1 * size)) + "px" 
        } else {
            balloon.textContent = '💥'
            window.removeEventListener('keydown', increase)
        } 
      //end of change
    }
    if (event.key == "ArrowDown") {
        event.preventDefault()
        balloon.style.fontSize = Math.max(50, (size - (0.1 * size))) + "px"
    }
}
```
You can view the result in the browser [here!](https://chapter15balloon.netlify.app/)

* 15.2 Mouse Trail

For this exercise, I was tasked to implement a *mouse trail*- a series of elements that would follow the mouse pointer as one moved it across the page. A very simple solution the author suggested was to start with a fixed number of trail elements and cycle through them, moving the next one to the mouse’s current position every time a "mousemove" event occurs.

I had never seen a mouse trail before this exercise ;O so the first thing i did was check out some videos on youtube to see how a mouse trail worked to give me a clearer picture of exactly what i was creating. There were lots of really cool videos of different implementations of a mouse trail, some were really really fancy and beautiful ( A work of art if you ask me) and the others were basic implementations but i got the idea- The trailing elements track the location of your mouse and use this as it's position. The first trailing element will be at the mouse current location and the next trailing element will be at it's previous location, the next, at the location before that, and so on (*a trail*) 

To implement this, I started by styling a class `dot` in the HTML file that would define how the trail elements look
```xml
<style>
.dot {
        display: none;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: blue;
        position: absolute;
     }
</style>
<script src="mouseTrail.js"></script>
```
The `dot` class gets a `display` value of "none" as i want the mouse trail to only be visible when i move the mouse. It also gets a `position` value of "absolute" as i do not want it to follow the flow of the document. 

Then i proceeded to create 10 div elements, adding 'dot' as it's class name and appended all of them to the `document.body` object
```javascript
for (let i = 0; i < 10; i++) {
    let div = document.createElement('div')
    div.className = "dot"
    document.body.appendChild(div)
}
```
The next thing was adding the event listener to the `window` object.
```javascript
let div = document.body.querySelectorAll('.dot')
let i = 0 
window.addEventListener('mousemove', event => {
      div[i].style.top = (event.pageY - 5) + 'px'
      div[i].style.left = (event.pageX - 5) + "px"
      div[i].style.display = "block"
      i++
    
})
```
Following the author's advice, I cycled through the div elements and moved each one to the mouse's current position every time the "mousemove" event fired. The binding `i`(representing the array's index) helped me move through the elements. 

And the code did work, except it throws an error after it is done cycling through the elements as `i` keeps incrementing by 1 till it surpasses the length of the array's index. I needed a way to keep cycling through the elements repeatedly with `i`. So i added a little condition after incrementing `i` in the event function. If `i`is greater than the "array's length - 1" (arrays start from 0), it simply gets reassigned 0 before the event function is called again
```javascript
let div = document.body.querySelectorAll('.dot')
let i = 0
window.addEventListener('mousemove', event => {
      div[i].style.top = (event.pageY - 5) + 'px'
      div[i].style.left = (event.pageX - 5) + "px"
      div[i].style.display = "block"
      i++
      //changes
      i > (div.length - 1) ? i = 0 : i = i
    
})
```
And it worked!
You can view the result in the browser [here](https://chapter15mousetrail.netlify.app/)

* 15.3 Tabs

For this exercise, I was tasked to implement a simple tabbed interface. Tabbed interfaces allow you select an interface panel by choosing from a number of tabs “sticking out” above an element (you select a tab, and an interface shows. You select another tab and another interface shows).

I was tasked to write a function, `asTabs`, that takes a DOM node and creates a tabbed interface showing the child elements of that node. It should insert a list of `<button>`elements at the top of the node, one for each child element, containing text retrieved from the `data-tabname` attribute of the child. All but one of the original children should be hidden (given a display style of none). The currently visible node can be selected by clicking the buttons. After getting this to work, i was tasked to extend it to style the button for the currently selected tab so that it is obvious which tab is selected.

The first thing i did for this exercise was structure out a HTML document with 3 sections. A beginning, middle and end. I generated text for these sections using the [lipsum generator](lipsum.com)
```xml
<div data-tabname= "Beginning">
  <h1>The Beginning</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mauris
    libero, scelerisque in mi in, interdum tristique nisi. Pellentesque
    tincidunt, leo quis convallis condimentum, felis nisl aliquam lacus, 
    eu interdum tortor lorem sed est. Ut tristique porttitor diam, vitae
    pulvinar sem tempor et. Fusce eget molestie mi. Integer et turpis
    vestibulum, egestas tortor id, blandit nulla. Nullam hendrerit sed diam
    at placerat. Phasellus justo leo, hendrerit luctus mauris vel, 
    pulvinar venenatis massa. Duis et ipsum et ante blandit suscipit. 
  </p>
</div>
    
<div data-tabname="Middle">
  <h1>The Middle</h1>
  <p>
    Vestibulum vestibulum placerat massa ut egestas. Fusce vitae ultricies
    mauris, at semper massa. Integer consequat neque id purus tempor, id
    suscipit erat sollicitudin. Duis eget dapibus magna. Vivamus dapibus
    tellus at orci imperdiet, at lacinia sapien feugiat. Nam nec faucibus
    nulla, non ultricies libero. Quisque sed nisl a turpis aliquam 
    accumsan non nec nunc. Phasellus finibus tellus et massa maximus auctor
    . Sed sodales mauris accumsan accumsan vehicula. Sed facilisis at lacus
    at pellentesque. Phasellus sit amet finibus diam. Aliquam semper mollis
    erat, nec interdum ante semper ac. Curabitur commodo velit a egestas
    semper. Praesent consectetur tincidunt dolor id pharetra. Sed vulputate
    eros sit amet augue porttitor gravida. 
  </p>
</div>

<div data-tabname="End">
  <h1>The End</h1>
  <p>
    Nulla aliquet sem neque, vel venenatis mi egestas nec. Vestibulum
    ultrices lorem lacus, eget interdum nisi placerat gravida. Pellentesque
    bibendum orci et quam sollicitudin maximus. Donec ullamcorper massa feugiat odio auctor pretium. Phasellus ut lacus sed tellus hendrerit
    condimentum. Aenean congue facilisis purus, a accumsan diam iaculis a.
    Aliquam sodales risus nec massa consequat, non tempor lectus congue.
    Proin in justo nisl. Mauris eget porttitor diam, quis mollis eros.
    Vivamus malesuada eget leo sit amet scelerisque. Sed sapien massa,
    vestibulum non egestas quis, tristique sit amet mi. Class aptent taciti
    sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
  </p>
</div>

<script src="tabs.js"></script>
```
Then i proceeded to write the `asTabs` function 
```javascript
function asTabs(node) {
    let div = document.createElement('div')
    let children = Array.from(node.children)
    
    for (let element of children) {
        let pick = children[0]
        element == pick ? element.style.display = "block" : element.style.display = "none"
        
        
        if(element.nodeName != "SCRIPT") {
        let button = document.createElement('button')
        let text = element.getAttribute('data-tabname')
        button.textContent = text
        div.appendChild(button)

        button.addEventListener('click', event => {
            check(element, children, button)
        })
        }

        
    }

```
In the function, i start off by creating a `div` element that would hold the tab buttons I create for each child element in the node(passed in as argument). 

Then i looped through all the child elements and if It is not the script tag (since this can also appear as a child element if the `document.body` is the node passed in), a button is created for it. The text content for this button will be gotten from the child elements `data-tabname` attribute. 

After creating and appending the buttons to the `div` element, I inserted it at the top of the page using the `insertBefore` method 
```javascript
 document.body.insertBefore(div, document.body.firstChild)
```
Then i went back to the `asTabs` function to write this part and make sure only the first child element was visible
```javascript
let pick = children[0]
        element == pick ? element.style.display = "block" : element.style.display = "none"
```
`pick` which will be the first child element in the loop, gets a display of "block" and the rest a display of "none" 

After getting that to work, i proceeded to add the event listener to the button to allow us switch interfaces. This will be done by calling the `check` function passing the *current child element being iterated through*, *the array of child elements* and the *current button*. 

I had to make it call this function in the event listener because i wanted the 'click' event to do the same thing for all buttons (since i am adding the listeners in a loop) and at the same time do things differently for each button (`check` switches the tab depending on the arguments passed in)  
```javascript
function check(element, children, button) {
   for (let child of children) {
    if (child == element)  child.style.display = "block"
    else child.style.display = "none"
   }
 }
```
`check` loops over the array of child elements and runs a similar code from before. If the element being iterated through(`child`) is the same as the one passed in as argument(`element`), it's display becomes visible and the rest is hidden. 

After getting this to work, i extended the code to style the button for the currently selected tab so that it is obvious which tab is selected.

For the styling, i defined a class `selected` that will get added to the button when clicked
```xml
<style>
        .selected {
            background-color: tomato;
            color: #fff;
            border-radius: 7px;
            padding: 6px;
            border: none;
            margin: 3px;
        }
</style>
```
Then i modified the `check` function 
```javascript
 function check(element, children, button) {
   for (let child of children) {
    if (child == element)  child.style.display = "block"
    else child.style.display = "none"
   }
   //changes
   for (let select of Array.from(div.children)) {
    if(select == button) select.className = "selected"
    else select.className = ""
   }
   //end
 }
```
Styling the button follows the same approach from before. The second for loop iterates through the buttons in the `div` element. And if the one being iterated through(`select`) is the clicked button(`button`), It gets the class `selected` else it get's no class. 

You can view the result in the browser [here](https://chapter15tabs.netlify.app/)
