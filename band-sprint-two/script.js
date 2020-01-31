
getElem = (elem) => {
    return getEl = document.querySelector(elem);
}

// insert section element with class of tour
console.log(getElem(".tour"));

window.onclick = () => console.log('WINDOW IS CLICKED');
// 2
const tour = document.querySelector('.tour__heading');
const addSection = e => {
  //console.log('TARGET', e.target);
  e.target.style.color = 'red';
  //logo.style.fontWeight = 'bold';
};
tour.addEventListener('click', addSection);


// how do I add an element to dom. 
// can I use e.target to add a class or add innerHTML