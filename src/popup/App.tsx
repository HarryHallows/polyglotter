import './App.css'

function App() {
  const handleClick = () => {
    chrome.runtime.sendMessage({ type: "PING", text: "Hello from popup!" }, (res) => {
      console.log("Background response:", res);
    });
  };

  return (
    <div>
      <h1>My Extension Popup</h1>
      <button onClick={handleClick}>Ping Background</button>
    </div>
  );
}

export default App
