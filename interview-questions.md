# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer:

JSX, or JavaScript XML, is a markup language that allows dynamic integration of JavaScript code within an XML/HTML file. Transitioning between XML tags and JavaScript is triggered through the use of curly braces {}.

A small but significant difference between the syntax of both languages is the capitalization convention used for variables and functions. One common example is the use of event listeners to allow user-driven interaction as a cursor hovers, clicks, or taps an element. event.onclick in HTML and event.onClick in JSX may look similar, but the use of Pascal case in JSX means that the compiler would fail to recognize the code copied directly from an HTML file.

Researched answer:

JSX is a markup language that allows the use of HTML elements in JavaScript, placing them within the DOM directly vice requiring calls to createElement() or appendChild(). The compiler translates JSX into vanilla JavaScript at runtime, providing comparable speed and performance. Curly braces are used to include React variables/properties and other JavaScript expressions within HTML functions.

A notable syntax requirement of JSX is that all HTML elements require a top-level wrapper. This could be a <div></div> wrapper or an empty HTML tag/fragment <></>. Failing to include a wrapper throws an error.

1. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

Your answer: Yarn is a repository that assists with managing dependencies. The name is an acronym (or possibly backronym) that stands for "yet another repository negotiator." This is a snarky reference to the complex challenges associated with supporting version control management and dependencies between external modules and repos, while also commenting on the saturated market for automated solutions to this challenge. Yarn creates a package.json and yarn.lock file.

package.json => Provides the basic connection to yarn.

yarn.lock => Lists supported modules/repos and the version used when developing an application with the support of yarn.

Researched answer:

Yarn is an open-source project that combines aspects of package manager and project manager, designed to provide support for developers and teams to work efficiently and focus on ideas, rather than double checking details for dependencies. Yarn is expansible through plug-ins. Yarn is designed to provide an environment where applications can be developed and tested offline using local versions of dependencies. It also streamlines the process of updating files by consolidating and reducing unreadible changes during commits.

Yarn installs all of the dependencies listed within the package.json in the local node_modules folder. It also updates the yarn.lock file to track which versions of packages are being used by a project.

3. What is a React component?

Your answer:

In React, components serve as a combination of containers and object classes. They are dynamic, reusable elements that can be designed to provide specific behavior within an application. Some components are built to provide specific interaction through presenting graphics or data and listening to event triggers through user interaction. Other components are built to process data based upon the inputs provided from a user or other scripted behavior.

Each React component can employ hooks to manage its current state, define functions for processing data, and present HTML elements via a return block.

Researched answer:

Components are functions in React. They can receive prop objects as arguments during the function call. Within Their operation, a component can assess the attributes stored within the prop object via key: value pairs. Components return HTML code for rendering. JavaScript can be included within this HTML code through the JSX mark-up.

Although React implements both Class components and Function components, Function components are generally preferred for their readibility and simplicity. Function components and React Hooks provide similar capabilities and function to Class components.

4. What is the difference between state values and props in React?

Your answer:

State values are encapsulated within their React component. This prevents direct manipulation from the server, other components, or a user.

Props provide a vehicle for communication between components. By passing props within a hierarchy, components can share primitives and objects, including function objects.

One interesting aspect of the communcation of components via props is that props are passed from a parent to a child, allowing a child to communicate with their parent via functions passed with this call. This tree structure requires two adjacent components to communicate via their lowest common parent. Particularly with regards to props containing large amounts of raw data or multimedia objects, this seems inefficient. Graph organization of components could improve message routing by reducing the number of nodes that a prop must traverse. Passing pointers to an image, audio, or video element would reduce the overall bandwidth necessary to share those elements, although it requires an architecture that provides a memory storage location that could be accessed by different components within an app. Perhaps trading data security for efficiency.

Researched answer:

Reactjs.org confirms that sharing state between components requires "lifting state up" to a common ancestor (1). This allows the common ancestor to manage the logic necessary for processing the shared state while passing props down either branch where destination components can process and render based upon that state.

I did not find a simple, conclusive answer from the react website that describes how props are processed by the compiler. Since React extends JavaScript, and JavaScript objects are really pointers to locations in memory, this Reddit post (2) indicates that props passed through a tree would be pointers to the actual information in memory. As a best practice, it is still recommended to only provide props with specific attributes needed by a child or descendent.

(1) https://beta.reactjs.org/learn/sharing-state-between-components
(2) https://www.reddit.com/r/reactjs/comments/9uvdcn/is_performance_impacted_by_passing_very_large/

5. What is the DOM?

Your answer: The Direct Object Manual provides directions for the creation and management of elements within web pages.

Researched answer:

The Document Object Model (DOM) provides the raw data representation for objects that build content and documents within the internet. The DOM allows interactive representation of the objects/nodes within a webpage. Properties, methods, and events in webpages are each represented by an object. The DOM allows JavaScript to access and manipulate these objects through scripted rules. DOM is not a programming language, and seeks to maintain an agnostic approach that allows any language to implement the DOM.

6. STRETCH: Which is the difference between a div tag and a span tag?

Your answer:

<div> </div> tags provide a way to group HTML elements within a container. Each division can employ in-line attributes to guide presentation and interaction directly with that container. Alternatively, an id attribute could pull those directions into a seperate file for cleaner code or a class attribute could make those directions reusable for different elements.

I haven't used span tags, but the name suggests that they would share attributes across elements while divisions create barriers between elements.

Researched answer:

<span></span> tags allow inline association of attributes without otherwise separating the content within the tag from the surrounding content. For example, <span id="cool rules"> could be </span> used surrounding words within a <p></p> to modify those words without breaking apart the paragraph.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: The best programming. Or the worst. There's a lot of debate surrounding this. It relies upon encapsulating all data within objects, limiting interactions with those data to scripted methods, and driving the interaction of these objects to create dynamic and repeatable behavior within an application.

2. Ruby: Ruby is a dynamic, open-source programming language that was created in the mid-90s to provide simplicity and productivity for developers. It is a relatively neat language that provides just-in-time compilation and dynamic type checking of data and objects. All data are encoded in object classes, providing the flexibilty to develop code in either a functional organization or through object-oriented organization.

3. Implicit return:

While we have used explicit returns to end most functions, such that functions return undefined when no return statement is listed, implicit returns provide a means of returning values without using the return keyword.

Within JavaScript, functions created with the function keyword always require explicit returns. Arrow functions allow implicit returns of a resulting value. For example, a single-line higher-order function calling the .map method below returns the double of each value in the array.

console.log([1,2,3,4].map(value => value * 2)) // logs [2, 4, 6, 8]

For more complicated, multi-line arrow functions, the use of parenthesis instead of curly braces tells the compiler to implicitly return the final value.

4. Ruby blocks: Ruby blocks provide segments of code that can be invoked in the middle of a function. They are invoked with the keyword yield. Arguments can be passed through the yield statement to provide a block with parameters for operation. A function can invoke a block multiple times.

5. Ruby hashes: Hashes are key:value pairs, like any other object. Ruby implementation of hashes includes a number of public methods for setting, checking, and accessing these data. When a search does not find a given key or value, then a default value is returned. Hashes provide more efficient search algorthms by associating shorter keys to large values that could contain multi-media objects. Hashes also provide security through encryption to make values meaningless without appropriate decryption.

Ruby hashes are declared using the syntax:
hashName = Hash.new(defaultValue)
or
hashName = Hash.new
with a default value of nil

Ruby hashes are initialized using the syntax:
hashName = {key => value, key => value...}