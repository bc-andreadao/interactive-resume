import { Box, Tooltip } from '@mui/material';
import {
  SiGit,
  SiGithub,
  SiMarkdown,
  SiSwagger,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss
} from 'react-icons/si';

const tools = [
  { name: 'Git', icon: <SiGit />, scale: 1.3 },
  { name: 'GitHub', icon: <SiGithub />, scale: 1.2 },
  { name: 'Markdown', icon: <SiMarkdown />, scale: 2.1 },
  { name: 'Swagger', icon: <SiSwagger />, scale: 2.9 },
  { name: 'HTML', icon: <SiHtml5 />, scale: 1.1 },
  { name: 'CSS', icon: <SiCss3 />, scale: 1.1 },
  { name: 'React', icon: <SiReact />, scale: 2.2 },
  { name: 'Next.js', icon: <SiNextdotjs />, scale: 0.2 },
  { name: 'Astro', icon: <SiAstro />, scale: 0.8 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, scale: 0.5 }
];

export function IconCluster() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        mt: 4,
        mb: 4,
      }}
    >
      {tools.map((tool) => (
        <Tooltip title={tool.name} key={tool.name}>
          <Box
            sx={{
              fontSize: `${tool.scale * 40}px`,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'scale(1.2)',
                cursor: 'pointer',
              },
            }}
          >
            {tool.icon}
          </Box>
        </Tooltip>
      ))}
    </Box>
  );
}
