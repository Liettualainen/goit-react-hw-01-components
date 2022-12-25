import styled from "styled-components";

export const  TransactionHistoryShape = styled.table`
padding-top: 50px;
width: 1200px;
`;

export const Descriptionheadshape = styled.thead`
font-size: 30px;
text-transform: uppercase; 
line-height: 3;
color: white;
background-color: #57b2c2; 
`;

export const Descriptionheadtr = styled.tr`
`;

export const DescriptionShape = styled.tbody`
`;

export const TransactionHistoryStripedRow = styled.tr`
text-transform: capitalize;
line-height: 3;
text-align: center;
:nth-child(even) {background-color:#e9f2f2;}
background-color: #f5faf9;
`;

export const TransactionHistoryTypecolumn = styled.tr`
text-indent: 5em;
`;

