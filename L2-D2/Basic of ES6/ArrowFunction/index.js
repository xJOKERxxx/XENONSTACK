//Types of Declaring a Function...
//1
const dinnerMenu = () => {
    return "Im going to eat Ramen for Dinner";
}
console.log(dinnerMenu());

//2
const lunchMenu = (food, drink) => `Im going to eat ${food} for lunch with ${drink}`;
console.log(lunchMenu("Burger", "Diet Coke"));


//3
const player = (name = "Neymar") => { //example of default parameter.
    console.log(`${name} is player of PSG`);
}

player();