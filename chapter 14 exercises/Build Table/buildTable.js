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

const table = document.createElement('table')
const Headerrow = document.createElement('tr')
for (let name of Object.keys(mountains[0])) {
   const td = document.createElement('th')
   td.textContent = name
   Headerrow.appendChild(td)
}
table.appendChild(Headerrow)

for(let i = 0; i < mountains.length; i++) {
    const dataRow = document.createElement('tr')
    for (let name of Object.keys(mountains[i])) {
        const data = document.createElement('td')
        data.textContent = mountains[i][name]
        if(typeof mountains[i][name] === "number") {
            data.style.textAlign = "right"
        }
        dataRow.appendChild(data)
    }
    table.appendChild(dataRow)
}


document.querySelector('#mountains').appendChild(table)
