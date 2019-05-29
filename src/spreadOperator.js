let years = [2001, 2010, 2015, 2018];
let yearsCp = [2000, ...years, 2000]

console.log(yearsCp);

let address1 = {
    country: "Korea",
    city: "Seoul"
};

let address2 = {
    ...address1,
    city: "Busan"
};

console.log(address2);