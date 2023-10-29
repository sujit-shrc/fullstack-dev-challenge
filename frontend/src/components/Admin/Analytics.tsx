import { Typography, CircularProgress, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react';
import axiosInstance from '../../axios';

interface Student {
  id: number;
  name: string;
  email: string;
  branch: string;
}

interface ChartData {
  branch: string;
  students: number;
}

const Analytics: React.FC = () => {
  const [data, setData] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // API call to fetch students
    axiosInstance.get('/students')
      .then(response => {
        setData(response.data.students);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  let chartData: ChartData[] = [];

  if (data) {
    const branchData = data.reduce((acc, entry) => {
      acc[entry.branch] = (acc[entry.branch] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    chartData = Object.keys(branchData).map((branch) => ({
      branch,
      students: branchData[branch],
    }));
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
      <Typography variant="h4" gutterBottom>
        Student Analytics:
      </Typography>
      {loading ? (
        <CircularProgress />
      ) : (
        <ResponsiveContainer width={700} height={400}>
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="branch" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="students" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      )}
    </Box>
  );
};

export default Analytics;
