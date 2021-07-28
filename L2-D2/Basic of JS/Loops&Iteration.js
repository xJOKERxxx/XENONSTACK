//do while..
//let i = 0;
// do {
//     i += 1;
//     console.log(i);
// } while (i < 5);


// While..
// let n = 0;
// let x = 0;
// while (n < 3) {
//     n++;
//     x += n;
// }

//Break...
// let y = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//     console.log('Outer loops: ' + y);
//     y += 1;
//     z = 1;
//     while (true) {
//         console.log('Inner loops: ' + z);
//         z += 1;
//         if (z === 10 && y === 10) {
//             break labelCancelLoops;
//         } else if (z === 10) {
//             break;
//         }
//     }
// }


//Continue...
let i = 0;
let n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
        continue;
    }
    n += i; //n+=i means the value of n will add with i.
    console.log(n);
}