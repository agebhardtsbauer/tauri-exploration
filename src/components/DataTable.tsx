import React from 'react';
import { Button, Box, TextField } from "@mui/material";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { DemoScenaro } from '@src/types/Scenario';

interface DataTableProps {
  data: DemoScenaro[];
}

const DataTable: React.FC<DataTableProps> = ({ data }: DataTableProps) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Job Definition Name</TableCell>
            <TableCell>Extract File</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.team}</TableCell>
              <TableCell>
                <Button variant="contained">Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
