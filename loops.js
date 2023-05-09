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

//function for getting the number of days for the current month
const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i += 1) {
        result.push(i)
    }
    return result
}

const createData = () => {
    const current = new Date()
    current.setDate(1)

    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)
    
    const weeks = createArray(5)
    const days = createArray(7)
    let value = null
    const result = []
    //creating a week object
    for (const weekIndex of weeks) {
        result.push( {
           week: weekIndex + 1,
           days: []
       })
    
       for (const dayIndex of days) {
        const day = dayIndex - startDay + (weekIndex * 7) + 1
        const isValid = day > 0 && day <= daysInMonth//
        
         result[weekIndex].days.push({
            dayOfWeek: dayIndex + 1,
            value: isValid ? day : " ",
            })
        }
        
    }
    return console.log(result)
}
const addCell = (existing, classString, value) => {
     const result = /* html */ `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
}

const createHtml = (data) => {
    let result = ''

    for (let week of data) {
        let inner = ""
        addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`)
    
        for (let dayOfWeek in data) {
            let classString = 'table__cell'
            
					const isToday = new Date() === value
           const  isWeekend = dayOfWeek = 1 && dayOfWeek == 7
           const  isAlternate = week / 2
        
           classString = table__cell

						if (isToday) classString = `${classString} table__cell_today`
            if (isWeekend) classString === `${classString} table__cell_weekend`
            if (isAlternate) classString === `${classString} table__cell_alternate`
            addCell(inner, classString, value)
        }

        return result = `<tr>${inner}</tr>`
    }
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)