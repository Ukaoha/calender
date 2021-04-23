const select = document.querySelector('select');
const list = document.querySelector('.parent');
let h2 = document.querySelector('#h2');

const months = ['january', 'february', 'march']
const nodays = [31, 28, 31]

select.addEventListener('change', chizoba)

function chizoba () {
 const choice = select.value.toLowerCase();
//  let days = 31;
//  if(choice === 'february') {
//  days = 28;
//  } else if(choice === 'april' || choice === 'june' || choice === 'september'|| choice === 'november') {
//  days = 30;
//  }

 days = nodays[months.indexOf(choice)]

 createCalendar(days, choice);
}

function createCalendar(days, choice) {
 list.innerHTML = '';
//  h2.innerHTML = choice;
 h2 = document.createElement('h2')
 h2.innerHTML = choice
 h2.setAttribute('style', 'color: #000')
 list.appendChild(h2)
 for(let i = 1; i <= days; i++) {
 const listItem = document.createElement('li');
 listItem.textContent = i;
 list.appendChild(listItem);
 }
 }

function createMonths() {
    months.forEach(month => {
        const option = document.createElement('option')
        option.innerText = month
        select.appendChild(option)
    })
}

createMonths()