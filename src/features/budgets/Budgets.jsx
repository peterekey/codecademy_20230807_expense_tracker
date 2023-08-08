const remainingFundsClassname = (val) => {
  if (val > 0) {
    return "remaining-funds positive"
  } else if (val < 0) {
    return "remaining-funds negative"
  } else if (val == 0) {
    return "remaining-funds null"
  } else {
    return "remaining-funds"
  }
} 

const Budget = (props) => {
  const { amount, category } = props
  return (
    <li className="budget-container">
      <div className="category-label">Category</div>
      <div className="category-wrapper">
        <h3 className="category-value">{category}</h3>
        <form className="budget-form">
          <input className="amount-input" type="number" step="0.01" value={amount}></input>
          <button className="update-button">Update</button>
        </form>
      </div>
      <h4 className={remainingFundsClassname(amount)}>
        Funds remaining: {amount}
      </h4>
    </li>
  )
}

export default Budget