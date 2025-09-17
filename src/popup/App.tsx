import { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "GET_LANGUAGE" }, (res) => {
      if (res?.language) setLang(res.language);
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    chrome.runtime.sendMessage({ type: "SET_LANGUAGE", language: newLang });
  };


  return (
     <div>
      <h1>Polyglotter</h1>
      <label>
        Target language:
        <select value={lang} onChange={handleChange}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="es">Japanese</option>
          <option value="de">Portuguese</option>
          <option value="de">Spanish</option>
        </select>
      </label>
    </div>
  );
}

export default App
