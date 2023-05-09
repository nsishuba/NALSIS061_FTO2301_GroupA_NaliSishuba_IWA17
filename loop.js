const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = [];
  
    for (let i = 0; i < length; i++) {
      result.push(i);
    }
  
    return result;
  }

  const createData = () => {
    const current = new Date();
    current.setDate(1);
  
    const startDay = current.getDay(); //Mon, Tues, Wed...
    console.log(current) 
    const daysInMonth = getDaysInMonth(current);
  
    const weeks = createArray(5);
    const days = createArray(7);
    let value = null;
  
    for (const weekIndex of weeks) {

        value = {
        week: weekIndex + 1,
        days: []
      };
  
      for (const dayIndex of days) {
        const day = dayIndex + weekIndex * 7 - startDay + 1; 
        const isValid = day > 0 && day <= daysInMonth;
  
        value.days.push({
          dayOfWeek: dayIndex,
          value: isValid ? day : " ",
        });
      }
  
      weeks[weekIndex] = value;
    }
  
    return weeks;
  }

  const addCell = (existing, classString, value) => {
    const result = /* html */ `
      <td class="${classString}">
        ${value}
      </td>
      ${existing}
    `;
  
    return result;
  }

  const createHtml = (data) => {
    let result = '';
  
    for (const { week, days } of data) {
      let inner = '';
      inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);
  
      for (const { dayOfWeek, value } of days) {
        let classString = 'table__cell';
        const isToday = new Date().getDate() === value
        const isWeekend = dayOfWeek === 1 || dayOfWeek === 7;
        const isAlternate = week % 2;
   
        if (isToday) {
          `${classString}table__cell_today`;
        }
        if (isWeekend) {
          `${classString} table__cell_weekend`;
        }
        if (isAlternate) {
          `${classString}table__cell_alternate`;
        }
       
        inner = addCell(inner, classString, value);
      }
  
      result = `${result}<tr>${inner}</tr>`;
    }
  
    return result;
  }
  
  const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)