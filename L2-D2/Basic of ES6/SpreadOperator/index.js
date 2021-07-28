let Contacts = ["Ankush", "Arpit", "Sumit"];

//let personalFriends = Contacts;
let personalFriends = [...Contacts]; //'...' is spread operator and here we are making a copy of contacts which is stored in personalFriends.


Contacts.push("John");

//console.log(Contacts);
console.log(personalFriends);