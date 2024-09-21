import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: '#f9f9f9', // Light background
    borderRadius: '10px',
    padding: theme.spacing(2),
  },
  headerCell: {
    fontWeight: 'bold',
  },
  tableCell: {
    color: '#666',
  },
  title: {
    textAlign: 'left', // Align text to the left
    marginBottom: theme.spacing(2), // Add margin below the title
    fontWeight: 'bold',
  },
}));

const TopSellingProducts = () => {
  const classes = useStyles();

  const rows = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' },
  ];

  return (
    <>
      <Typography variant="h6" component="div" className={classes.title}>
        Top Selling Products
      </Typography>
      <Table aria-label="top selling products table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headerCell}>Name</TableCell>
            <TableCell className={classes.headerCell}>Price</TableCell>
            <TableCell className={classes.headerCell}>Quantity</TableCell>
            <TableCell className={classes.headerCell}>Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className={classes.tableCell}>{row.name}</TableCell>
              <TableCell className={classes.tableCell}>{row.price}</TableCell>
              <TableCell className={classes.tableCell}>{row.quantity}</TableCell>
              <TableCell className={classes.tableCell}>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default TopSellingProducts;
