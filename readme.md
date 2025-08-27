### 6. Answer the following questions clearly:

1. What is the difference between **getElementById, getElementsByClassName, and
   querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()**
   methods?

---

1. What is the difference between **getElementById, getElementsByClassName, and
   querySelector / querySelectorAll**?

=> getElementById -- get one specific id

=> getElementsByClassName -- get all elements of same class name (more than one)

=> querySelector -- From multiple same name id or class, get the `first element`
of id or class name

=> querySelectorAll -- It selects all elements of same id or class name, if
there's more than one

2. How do you **create and insert a new element into the DOM**?

=> i. First create a section or tag by `createElement`

=> ii. Then set the innerText or innerHTML to the created element

=> iii. Now append the innerText or innerHTML to created element

3. What is **Event Bubbling** and how does it work?

=> When an event happens on an element, the event runs. Then it triggers to it's
parent element, after this it triggers next parent div...

It happens all the way to html or document

4. What is **Event Delegation** in JavaScript? Why is it useful?

=> Instead of targeting multiple event listeners to multiple child element,
target a single event listener their parent element, this is called event
delegation.

It's very useful for --

⁎ Better Performance - it performs better (while it's not required to listens so
many events)

⁎ Clean Code -- No need to repeat multiple events

⁎ Easy to handle

5. What is the difference between **preventDefault() and stopPropagation()**
   methods? preventDefault() =>

=> preventDefault() -- It prevents browsers default behavior! It only prevents
browsers default events

=> stopPropagation() -- It stops the Event Bubbling! It stops an event before
reaching its parent
