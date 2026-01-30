import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/Card';

const data = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 2000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

interface BarChartBlockProps {
  theme?: 'dark' | 'light';
}

export function BarChartBlock({ theme = 'dark' }: BarChartBlockProps) {
  const barColor = theme === 'dark' ? '#6E6EF7' : '#5A5AB5';
  const gridColor = theme === 'dark' ? '#444' : '#eee';
  const textColor = theme === 'dark' ? '#ccc' : '#666';

  return (
    <Card theme={theme} className="h-80 w-full">
      <h3 className="text-lg font-semibold mb-4">Weekly Revenue</h3>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={gridColor} />
            <XAxis 
              dataKey="name" 
              stroke={textColor} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: textColor }}
            />
            <YAxis 
              stroke={textColor} 
              axisLine={false}
              tickLine={false}
              tick={{ fill: textColor }}
            />
            <Tooltip 
              cursor={{ fill: theme === 'dark' ? '#ffffff10' : '#00000010' }}
              contentStyle={{ 
                backgroundColor: theme === 'dark' ? '#2d2d3d' : '#fff',
                borderColor: 'transparent',
                borderRadius: '8px',
                color: theme === 'dark' ? '#fff' : '#000'
              }}
            />
            <Bar dataKey="value" fill={barColor} radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
