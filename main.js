//Template String
//console.log(`My name is ${name} and I am ${age}`);

const person = {
  firstName: "Anthony",
  lastName: "Scales",
  age: 30,
  hobbies: ["music", "exercise", "dance"],
  address: {
    street: "19362 Marlowe",
    city: "Detroit",
    state: "MI"
  }
};

const todos = [
  {
    id: 1,
    text: "Take out trash",
    isCompleted: true
  },
  {
    id: 2,
    text: "Meeting with Boss",
    isCompleted: true
  },
  {
    id: 3,
    text: "Doctor Appt",
    isCompleted: false
  }
];
//forEach, map filter

//returns individually - forEach
todos.forEach(todo => {
  //   console.log(todo.text);
});

//returns an array - map
const todoText = todos.map(todo => {
  return todo.text;
});
//console.log(todoText)

//returns an array of todos - filter
const todosCompleted = todos
  .filter(todo => {
    return todo.isCompleted === true;
  })
  .map(todo => {
    return todo.text;
  });
//console.log(todosCompleted)

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2003 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// forEach
//companies.forEach(company => console.log(company.name));

// filter Get 21 and over
const canDrink = ages.filter(age => age >= 21);
//console.log(canDrink);

//Filter retail companies
const retailCompanies = companies.filter(
  company => company.category === "Retail"
);
//console.log(retailCompanies);

//filter companies from the 80s
const retailCompaniesFrom80s = companies.filter(
  company => company.start >= 1980 && company.start < 1990
);
//console.log(retailCompaniesFrom80s);

//filter companies that lasted at least 10 years
const tenYearCompanies = companies.filter(
  company => company.end - company.start >= 10
);
//console.log(tenYearCompanies)

// map
//Create array of company names
const companyNames = companies.map(company => company.name);
//console.log(companyNames);

//return Company name with start and end year
const testMap = companies.map(
  company => `${company.name} [${company.start} - ${company.end}]`
);
//console.log(testMap);

const agesSquare = ages.map(age => Math.sqrt(age));
console.log(agesSquare);

// sort
const sortedCompanies = companies.sort((a, b) => (
  a.start > b.start ? 1 : -1 ));
//console.log(sortedCompanies);

//Sort Ages
const sortAges = ages.sort((a,b) => (a-b))
console.log(sortAges);

// reduce
// let ageSum = 0;
// for(let i=0; i < ages.length; i++){
//     ageSum += ages[i];
// }

const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum)

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0)

console.log(totalYears)

//Combine methods
const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0); 

    console.log(combined)