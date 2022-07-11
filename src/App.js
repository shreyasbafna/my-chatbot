import './App.css';
import TagManager from 'react-gtm-module'

function App() {

const tagManagerArgs = {
    gtmId: 'GTM-KJBRDM7'
}
TagManager.initialize(tagManagerArgs)

const purchaseNft = () => {
  console.log('here')
  const tagManagerArgs = {
    gtmId: 'GTM-KJBRDM7',
    dataLayer:{
     event: 'nftAmount',
     amount: '244'
    }
}
TagManager.dataLayer(tagManagerArgs)
}
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Demo For Live Chat Bot / GTAG
        </p>
        <button className='buyNFT' onClick={() => purchaseNft()}>
          Buy NFT
        </button>
      </header>
    </div>
  );
}

export default App;
