
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data
const data = [
  { name: 'Student 1', branch: 'Computer Science', course: 'B.Tech' },
  { name: 'Student 2', branch: 'Electrical Engineering', course: 'B.Tech' },
  { name: 'Student 3', branch: 'Mechanical Engineering', course: 'B.Tech' },
  { name: 'Student 1', branch: 'Computer Science', course: 'B.Tech' },
  { name: 'Student 2', branch: 'Electrical Engineering', course: 'B.Tech' },
  { name: 'Student 3', branch: 'Mechanical Engineering', course: 'B.Tech' },
  { name: 'Student 1', branch: 'Computer Science', course: 'B.Tech' },
  { name: 'Student 2', branch: 'Mechanical Engineering', course: 'B.Tech' },
  { name: 'Student 3', branch: 'Mechanical Engineering', course: 'B.Tech' },
  { name: 'Student 1', branch: 'Mechanical Engineering', course: 'B.Tech' },
  { name: 'Student 2', branch: 'Mechanical Engineering', course: 'B.Tech' },
  { name: 'Student 3', branch: 'Civil Engineering', course: 'B.Tech' },
];

const Analytics: React.FC = () => {
  const branchData = data.reduce((acc, entry) => {
    acc[entry.branch] = (acc[entry.branch] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = Object.keys(branchData).map((branch) => ({
    branch,
    students: branchData[branch],
  }));

  return (
    <div>
      <h2>Student Analytics</h2>
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
    </div>
  );
};

export default Analytics;
