// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {currencyName, currencyLogoUrl, euroValue, usdValue} = currencyItem
  return (
    <li className="list-item">
      <div className="logo-type-container">
        <img src={currencyLogoUrl} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="sub-list-item">
        <p className="currency-value">{usdValue}</p>
        <p className="currency-value">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
