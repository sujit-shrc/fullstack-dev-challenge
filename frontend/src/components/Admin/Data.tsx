import { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Typography, CircularProgress, styled } from '@mui/material';

const LoadingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '200px',
});

interface Student {
  id: number;
  name: string;
  email: string;
  branch: string;
}

const dummyData: Student[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', branch: 'Computer Science' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', branch: 'Electrical Engineering' },
];

const Data: React.FC = () => {
  const [students, setStudents] = useState<Student[]>(dummyData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
   
    setLoading(true);
    setTimeout(() => {
      setStudents(dummyData);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Student Details:
      </Typography>
      {loading ? (
        <LoadingContainer>
          <CircularProgress />
        </LoadingContainer>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Branch</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.id}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.branch}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default Data;
