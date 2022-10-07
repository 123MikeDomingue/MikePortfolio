// created a new IntersectionObserver object. The intersection Observer API enables developers to understand the visibility and position of target DOM elements relative to an intersection root.

// The IntersectionObserver interface can be used to observe changes in the intersection of an intersection root and one or more target Elements.

const observer = new IntersectionObserver((entries) =>{
 // this function is for each entry or element 
 // this function will run anytime the visibility of one of the observe elements changes
 // because this funcion runs through multiple entries you have to use a for each 
 entries.forEach((entry) => {
  // conditional statement that checks if the entry is intersecting or is not 
  if(entry.isIntersecting){
   entry.target.classList.add('show')
  } else {
   entry.target.classList.remove('show');
  }

 });
});
// grabs all the elements that has the hidden class
const hiddenElements = document.querySelectorAll('.hidden');
// Observe All hidden elements 
hiddenElements.forEach((el) => observer.observe(el));
