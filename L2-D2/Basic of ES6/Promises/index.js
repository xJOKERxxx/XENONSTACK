//Promises are usually used on network request such as trying to fetch some data from an API.

const buyFlightTickets = () => {
    return new Promise((resolve, reject) => { //returning new promise
        //set timeout((),3000) it takes 3 sec to run the content inside the function.
        setTimeout(() => {
            //const error = false;
            const error = true;
            if (error) {
                reject("Sorry your payement was not successful")
            } else {
                resolve("Thank you,your payment was successful");
            }
        }, 3000)

    })
}
buyFlightTickets()
    .then((success) => console.log(success)) //if everything is fine with no error then this fucntion will run.
    .catch((error) => console.log(error)); //if there is error then this fucntion will run.