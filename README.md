1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

The difference between getElementById, getElementsByClassName, querySelector and querySelectorAll is :
#getElementById:
Whenever you need to get one specific element or item using a giving id, using getElementById is best in this case.

#getElementsByClassName:
But whenever you need to get multiple items for example doing same thing by clicking multiple buttons giving all the buttons same class, so this case getElementByClassName is used mostly.

#querySelector:
By using QuerySelector, you can select the element that matches the CSS element
and if the QuerySelector get matched by same CSS selector and get multiple elements, it's only provide the 1st element of all the matched element.

#querySelectorAll:
QuerySelectorAll is almost same as QuerySelector, it just provides all the elements that matches with the CSS selector.

2. How do you create and insert a new element into the DOM?

#1st step is to access the parent node where I am going to put my create
element inside the parent node.
2nd step is after accessing the parent node we have to create an element
using document.createElement("").
3rd step is to append the created element into the parent container
like for example, parentContainer.appendChild(newDiv);

3. What is Event Bubbling and how does it work?

#When you use eventListener to a child element and click, 
it 1st click the child element, then it's parent and then it's
grand parents like container type, and it's happens like bubbling up from the bottom until the it reaches completely top of the DOM like document;


4. What is Event Delegation in JavaScript? Why is it useful?

you don't have to add all the element to event listener for click 
rather give only to the parents so wherever you click parent or child 
the click will work because the parent will catch events from the child
this is called event delegation.

It is useful because it helps reduce memory usage in big apps..


5. What is the difference between preventDefault() and stopPropagation() methods?

#PreventDefault() prevents or stops the default actions of an element
normally use for form from submitting automatically.

#stopPropagation() stops bubbling and capturing which specific element you want. 


