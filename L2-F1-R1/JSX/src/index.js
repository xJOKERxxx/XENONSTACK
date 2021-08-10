import React from 'react';
import ReactDOM from 'react-dom';
import image from './images/image.jpg';


//....Introduction of JSX......... 


// const name = 'ANKUSH';
// const element = < h1 > HELLO,
//     { name } < /h1>;

// ReactDOM.render(
//     element,
//     document.getElementById('root')
// );



// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = {
//     firstName: 'ANKUSH',
//     lastName: 'NAUDIYAL'
// };

// const element = ( <
//     h1 >
//     HELLO, { formatName(user) } <
//     /h1>
// );






// const element1 = < img src = { image }
// />;




//....Rendering Elements.........
// ReactDOM.render(
//     element, document.getElementById('root')
// );


// ReactDOM.render(
//     element1, document.getElementById('Image')
// );




//.........Rendering an Element into the DOM........
function tick() {
    const element = ( <
        div >
        <
        h1 > HELLO ANKUSH < /h1> <
        h2 > { new Date().toLocaleTimeString() }. < /h2> < /
        div >
    );
    ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);