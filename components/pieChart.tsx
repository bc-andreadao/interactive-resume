'use client';

import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { Paper, Typography, Box } from '@mui/material';

const data = [
  { name: 'API Reference', value: 40 },
  { name: 'Internal Docs', value: 25 },
  { name: 'Blog Posts', value: 20 },
  { name: 'Tutorials', value: 15 },
];

const COLORS = ['#b53b3b', '#1976d2', '#ff9800', '#4caf50']; // Customizable colors

export function WritingPieChart() {
  return (
    <Paper elevation={3} sx={{ padding: 3, maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Writing Formats Breakdown
      </Typography>
      <Box sx={{ height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={100}
              paddingAngle={5}
              dataKey="value"
              nameKey="name"
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </Paper>
  );
}
