let years = [2001, 2010, 2015, 2018];

for (let year of years) {
    console.log(year);
}

for (let year in years) {
    console.log("-> " + years[year]);
}

years.forEach((year) => {
    console.log(year);
})