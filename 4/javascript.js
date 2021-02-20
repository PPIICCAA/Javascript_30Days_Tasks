const inventors = [
    {first: "Albert", last: "Einstein", year: 1879, passed: 1955},
    {first: "Alberta", last: "Einsteiwewen", year: 1239, passed: 1300},
    {first: "wd", last: "wd", year: 1939, passed: 2000},



]
const people = ["Beak, Clean","Beak, Clean",
"Beak, Clean","Beak, Clean",
"Beak, Clean","Beak, Clean",
"Beak, Clean","Beak, Clean",
"Beak, Clean","Beak, Clean",
"Beak, Clean","Beak, Clean"]


const fifteen = inventors.filter(inventor => (inventor.year >= 1800 && inventor.year <= 1900 ? true : false))
// 1

const fullName = inventors.map(inventor => (`${inventor.first} ${inventor.last}`))
// 2

const sortNames = inventors.sort((personOne, PersonTwo) => (personOne.year > PersonTwo.year ? 1 : -1))
// 3

const livePerson = inventors.reduce((total, inventor) => {return total + (inventor.passed - inventor.year)}, 0)
// 4

const oldest = inventors.sort((personOne, PersonTwo) => {
    const lastguy = personOne.passed - personOne.year
    const newguy = PersonTwo.passed - PersonTwo.year
    return lastguy > newguy ? 1 : -1;
})
// 5

/* const category = document.querySelector(".mw-category")
const links = Array.from(category.querySelectorAll("a"))
const de = links
                .map(link => link.textContent)
                .filter(streetName => streetName.includes("de"))
https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris */
// 6

const alpha = people.sort((personOne, PersonTwo) => {
    const [firstone, secondtwo] = personOne.split(", ")
    const [first, second] = PersonTwo.split(", ")
return personOne > PersonTwo ? 1 : -1
})

// 7
const date = ["car", "car", "truck", "truck", "bike", "walk", "van ", "bike", "walk", "car", "van", "car", "truck"]

const transports = date.reduce((obj, item) => {
    if (!obj[item]){
        obj[item] = 0
    }
    obj[item]++;
    return obj;
}, {})
// 8