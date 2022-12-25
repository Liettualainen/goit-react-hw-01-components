import { PropTypes } from 'prop-types';

import {
    TransactionHistoryShape, TransactionHistoryStripedRow,
    DescriptionShape, Descriptionheadshape, Descriptionheadtr, TransactionHistoryTypecolumn,
} from './TransactionHistory.styled'; 

export const TransactionHistory = ({ items }) => {
    return <TransactionHistoryShape>
        <Descriptionheadshape>
            <Descriptionheadtr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </Descriptionheadtr>
        </Descriptionheadshape>
        <DescriptionShape>
            {(items.map(items =>
                <TransactionHistoryStripedRow>
                    <TransactionHistoryTypecolumn>
                        {items.type}
                    </TransactionHistoryTypecolumn>
                    <td>{items.amount}</td>
                    <td>{items.currency}</td>
                </TransactionHistoryStripedRow>
            ))}
        </DescriptionShape>
    </TransactionHistoryShape>
        };

TransactionHistory.propTypes = {
  items: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.number.isRequired,
    }).isRequired
}
