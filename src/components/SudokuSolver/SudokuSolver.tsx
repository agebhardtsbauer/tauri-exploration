
import React, { useState } from 'react';
import { TextField, Grid, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      padding: 0,
      textAlign: 'center',
    },
  },
  boldBorder: {
    border: '2px solid black',
  },
  cell: {
    width: '50px',
    height: '50px',
  }
});

const SudokuGrid: React.FC = () => {
  const classes = useStyles();

  // Initialize a 9x9 matrix with empty strings
  const initialMatrix: string[][] = Array(9).fill('').map(() => Array(9).fill(''));
  const [matrix, setMatrix] = useState(initialMatrix);

  const handleChange = (row: number, col: number, value: string) => {
    if (/^[1-9]?$/.test(value)) {
      const newMatrix = [...matrix];
      newMatrix[row][col] = value;
      setMatrix(newMatrix);
    }
  };

  const isBoldBorder = (i: number, j: number) => {
    return (i % 3 === 0 && i !== 0) || (j % 3 === 0 && j !== 0);
  };

  return (
    <div className="body-content" style={{ maxWidth: "450px", maxHeight: "450" }}>
      <Grid container spacing={1}>
        {matrix.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Grid
              key={`${rowIndex}-${colIndex}`}
              item
              className={`${classes.cell} ${isBoldBorder(rowIndex + 1, colIndex + 1) ? classes.boldBorder : ''}`}
            >
              <Button
                sx={{ width: '50px', height: '50px' }}
                onClick={() => handleChange(rowIndex, colIndex, '')}
                variant="contained"
                color="secondary"
              >
                {rowIndex + 1}-{colIndex + 1}
              </Button>
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
};

export default SudokuGrid;
