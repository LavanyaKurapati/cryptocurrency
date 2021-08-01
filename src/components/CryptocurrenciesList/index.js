// Write your JS code here
import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  renderCurrencyHeader = () => (
    <div className="list-header">
      <h1 className="coin-type-heading">Coin Type</h1>
      <div className="sub-list-container">
        <p className="coin-currency-heading">USD</p>
        <p className="coin-currency-heading">EURO</p>
      </div>
    </div>
  )

  renderCurrenciesView = () => {
    const {currencyList} = this.props
    return (
      <div className="currency-list-container">
        {this.renderCurrencyHeader()}
        <ul className="list-container">
          {currencyList.map(eachItem => (
            <CryptocurrencyItem currencyItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          className="image"
          alt="Cryptocurrency Tracker"
        />
        {this.renderCurrenciesView()}
      </div>
    )
  }
}

export default CryptocurrenciesList
