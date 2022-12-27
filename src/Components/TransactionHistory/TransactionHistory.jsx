import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
const TransactionHistory = ({ transactionData }) => {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactionData.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactionData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default TransactionHistory;
