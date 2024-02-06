const { useState, useEffect } = React;

const App = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    getQuote();
  }, []);

  const getQuote = () => {
    fetch('https://api.quotable.io/random').
    then(response => response.json()).
    then(data => {
      setQuote(data.content);
      setAuthor(data.author);
    }).
    catch(error => console.error('Error fetching quote:', error));
  };

  return /*#__PURE__*/(
    React.createElement("div", { id: "quote-box", className: "container" },
    React.createElement("div", { id: "text" }, quote),
    React.createElement("div", { id: "author" }, "- ", author),
    React.createElement("button", { id: "new-quote", className: "btn btn-primary", onClick: getQuote }, "New Quote"),


    React.createElement("a", {
      id: "tweet-quote",
      className: "btn btn-info",
      href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`,
      target: "_blank" }, "Tweet Quote")));
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));