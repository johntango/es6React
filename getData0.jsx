const App = () => {
  return <button onClick={() => alert("hello")}>Hello!</button>;
};

//---------------
ReactDOM.render(<App />, document.getElementById("root"));
