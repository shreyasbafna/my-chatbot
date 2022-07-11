import './App.css';
import TagManager from 'react-gtm-module'

function App() {

const tagManagerArgs = {
    gtmId: 'GTM-KJBRDM7'
}

TagManager.initialize(tagManagerArgs)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Demo For Live Chat Bot / GTAG
        </p>
      </header>
    </div>
  );
}

export default App;
