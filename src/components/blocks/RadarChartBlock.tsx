import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { Card } from '../ui/Card';

const data = [
  { subject: 'Math', A: 120, B: 110, fullMark: 150 },
  { subject: 'Chinese', A: 98, B: 130, fullMark: 150 },
  { subject: 'English', A: 86, B: 130, fullMark: 150 },
  { subject: 'Geography', A: 99, B: 100, fullMark: 150 },
  { subject: 'Physics', A: 85, B: 90, fullMark: 150 },
  { subject: 'History', A: 65, B: 85, fullMark: 150 },
];

interface RadarChartBlockProps {
  theme?: 'dark' | 'light';
}

export function RadarChartBlock({ theme = 'dark' }: RadarChartBlockProps) {
  const gridColor = theme === 'dark' ? '#666' : '#ccc';
  const textColor = theme === 'dark' ? '#ccc' : '#666';

  return (
    <Card theme={theme} className="h-80 w-full">
      <h3 className="text-lg font-semibold mb-4">Performance</h3>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke={gridColor} />
            <PolarAngleAxis dataKey="subject" tick={{ fill: textColor, fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
            <Radar name="Student A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Student B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Tooltip 
               contentStyle={{ 
                backgroundColor: theme === 'dark' ? '#2d2d3d' : '#fff',
                borderColor: 'transparent',
                borderRadius: '8px',
                color: theme === 'dark' ? '#fff' : '#000'
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
