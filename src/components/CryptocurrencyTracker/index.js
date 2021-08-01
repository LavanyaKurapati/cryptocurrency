// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true, currencyList: []}

  componentDidMount() {
    this.getDetails()
  }

  getDetails = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const fetchedData = data.map(eachCurrency => ({
      id: eachCurrency.id,
      currencyLogoUrl: eachCurrency.currency_logo,
      currencyName: eachCurrency.currency_name,
      usdValue: eachCurrency.usd_value,
      euroValue: eachCurrency.euro_value,
    }))
    this.setState({currencyList: fetchedData, isLoading: false})
  }

  renderCryptocurrencyView = () => {
    const {currencyList} = this.state
    return <CryptocurrenciesList currencyList={currencyList} />
  }

  renderLoadingView = () => (
    <div testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? this.renderLoadingView() : this.renderCryptocurrencyView()}
      </div>
    )
  }
}
export default CryptocurrencyTracker
