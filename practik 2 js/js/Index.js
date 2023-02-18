const cities =[
    {
        name: 'Москва',
        population: '12506468',
    },
    {
        name: 'Санк-Петербург',
        population: '5351935',
    },
    {
        name: 'Новосибирск',
        population: '1612833',
    },
    {
        name: 'Калининград',
        population: '482443',
    },
    {
        name: 'Калуга',
        population: '336726'
    },
];

cities.unshift({
    name: 'Чечня',
    population: '321797',
});
cities.push({
    name: 'Москва',
    population: '12822748',
});

console.log(cities);

//2
cities.forEach((item) => {
    console.log(`Город ${item.name}, насиление ${item.population}`)
});

//3
let nev = cities.filter((item) => {
    return item.population > 1000000;
});

console.log(nev);

//4
let nev1 = cities.map((item) => {
    return item.population * 1.5;
});

console.log(nev1);

//5
let nev2 = nev1.reduce((sum, item) => {
    return sum + item;
});

console.log(nev2);