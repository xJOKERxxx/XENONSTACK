// function Welcome(props) {
//   return <h1>HELLO {props.name}</h1>;
// }

// const element = <Welcome name="ANKUSH" />;
// ReactDOM.render(element, document.getElementById('root'));



//...Composing Components....
// function Welcome(props) {
//   return <h1>Hello {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Ankush" />
//       <Welcome name="Sanjay" />
//       <Welcome name="Subhankar" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );



//....Extracting Components....
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return /*#__PURE__*/(
    React.createElement("img", {
      className: "Avatar",
      src: props.user.avatarUrl,
      alt: props.user.name }));


}

function UserInfo(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "UserInfo" }, /*#__PURE__*/
    React.createElement(Avatar, { user: props.user }), /*#__PURE__*/
    React.createElement("div", { className: "UserInfo-name" }, props.user.name)));


}

function Comment(props) {
  return /*#__PURE__*/(
    React.createElement("div", { className: "Comment" }, /*#__PURE__*/
    React.createElement(UserInfo, { user: props.author }), /*#__PURE__*/
    React.createElement("div", { className: "Comment-text" }, props.text), /*#__PURE__*/
    React.createElement("div", { className: "Comment-date" },
    formatDate(props.date))));



}

const comment = {
  date: new Date(),
  text: 'PSG',
  author: {
    name: 'Neymar',
    avatarUrl: 'https://i.pinimg.com/236x/e5/66/90/e566901a83c85907e6b3c70ad8bcde51.jpg' } };


ReactDOM.render( /*#__PURE__*/
React.createElement(Comment, {
  date: comment.date,
  text: comment.text,
  author: comment.author }),

document.getElementById('root'));