import { Box, Typography, LinearProgress } from '@mui/material';

const skills = [
  { name: 'Writing & Editing', value: 90 },
  { name: 'HTML / CSS / JavaScript', value: 75 },
  { name: 'Docs-as-Code / Git', value: 85 },
  { name: 'Markdown & Templates', value: 80 },
  { name: 'Communication & Collaboration', value: 88 },
];

export function SkillChart() {
  return (
        <Box sx={{ width: '100%', maxWidth: 200, mx: '50px' }}>
          {skills.map((skill) => (
            <Box key={skill.name} sx={{ mb: 3 }}>
              <Typography variant="body1" gutterBottom>{skill.name}</Typography>
              <LinearProgress
                variant="determinate"
                value={skill.value}
                sx={{
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#eee',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#b53b3b', // optional: match your icon color
                  },
                }}
              />
              <Typography variant="caption">{skill.value}%</Typography>
            </Box>
          ))}
        </Box>
  );
}

