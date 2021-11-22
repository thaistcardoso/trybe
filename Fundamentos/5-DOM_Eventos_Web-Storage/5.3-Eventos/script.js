function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
//   function addFridayAndHoliday() {
//         const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
//         const monthDayList = document.querySelector('#days');

//         for (let numero = 0; numero < dezDaysList.length; numero += 1) {
//             const day = dezDaysList[numero];
//             if (day === 24 || day === 25 || day === 31) {
//                 monthDayList[numero].classList.add('holiday');
//             };
//             if (day === 4 || day === 11 || day === 18 || day === 25) {
//                 monthDayList[numero].classList.add('friday');
//             };
//             console.log(day, typeof(day));
//         };
//     };
//     addFridayAndHoliday();
    

    function createDaysOfMonth() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const monthDays = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        const numDays = dezDaysList[index];
        const monthDayListItem = document.createElement('li');
        if (numDays === 24 || numDays === 31) {
            monthDayListItem.innerHTML = numDays;
            monthDayListItem.className = 'day holiday';
            monthDays.appendChild(monthDayListItem); 
        } else if (numDays === 4 || numDays === 11 ||numDays === 18) {
            monthDayListItem.innerHTML = numDays;
            monthDayListItem.className = 'day friday';
            monthDays.appendChild(monthDayListItem); 
        } else if (numDays === 25) {
            monthDayListItem.innerHTML = numDays;
            monthDayListItem.className = 'day holiday friday';
            monthDays.appendChild(monthDayListItem); 
        } else {
            monthDayListItem.innerHTML = numDays;
            monthDayListItem.className = 'day';
            monthDays.appendChild(monthDayListItem); 
        };
             
    };
};
createDaysOfMonth();

function addButtonHoliday(string){
    const divBotao = document.querySelector('.buttons-container');
    const holidayBtn = document.createElement('button');
    holidayBtn.id = 'btn-holiday';
    divBotao.appendChild(holidayBtn);
    holidayBtn.innerHTML = string;
};

addButtonHoliday('Feriados');


function holidayColor() {
    let holidayBtn = document.querySelector('#btn-holiday');
    let holidays = document.querySelectorAll('.holiday');
    let bgcolor = 'rgb(238,238,238)';
    let setNewColor = 'white';

    holidayBtn.addEventListener('click', function() {
        for (let index = 0; index < holidays.length; index += 1) {
            if (holidays[index].style.backgroundColor === setNewColor){
                holidays[index].style.backgroundColor = bgcolor;
            } else {
                holidays[index].style.backgroundColor = setNewColor
            }
        }
    });
}
holidayColor()

function addButtonFriday(string){
    const divBotao = document.querySelector('.buttons-container');
    const fridayBtn = document.createElement('button');
    fridayBtn.id = 'btn-friday';
    divBotao.appendChild(fridayBtn);
    fridayBtn.innerHTML = string;
}

addButtonFriday('Sexta-feira');


function fridayBtn(fridayDaysArray){
    let fridarybtn = document.querySelector('#btn-friday');
    let fridayDays = document.getElementsByClassName('friday');
    let fridayString = 'SEXTOU o/';
    
    fridayBtn.addEventListener('click', function() {
        for (let index = 0; index < fridayDays.length; index += 1){
            if (fridayDays[index].innerHTML !== fridayString) {
                fridayDays[index].innerHTML = fridayString;
            } else{
                fridayDays[index].innerHTML = fridayDaysArray[index];
            }
        }
    })
}
let fridaysDaysDez = [4, 11, 18, 25];
fridayBtn(fridaysDaysDez);