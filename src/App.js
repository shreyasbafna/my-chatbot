import React, { useState } from 'react'
import './App.css';
import TagManager from 'react-gtm-module'

function App() {

  const [amount, setAmount] = useState(234.43)
  
TagManager.initialize(tagManagerArgs)

  const amt = amount;
  const tagManagerArgs = {
    gtmId: 'GTM-KJBRDM7',
    dataLayer:{
     event: 'nftAmount',
     amount: amt
    }
  }
  TagManager.dataLayer(tagManagerArgs)
  setAmount(234.43)
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Demo For Live Chat Bot / GTAG
        </p>
        <button className='buyNFT' onClick={() => alert('hello')}>
          Buy NFT
        </button>
      </header>
    </div>
  );
}

export default App;
