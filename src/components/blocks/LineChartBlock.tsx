import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card } from '../ui/Card';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

interface LineChartBlockProps {
  theme?: 'dark' | 'light';
}

export function LineChartBlock({ theme = 'dark' }: LineChartBlockProps) {
  const strokeColor1 = '#8884d8';
  const strokeColor2 = '#82ca9d';
  const gridColor = theme === 'dark' ? '#444' : '#eee';
  const textColor = theme === 'dark' ? '#ccc' : '#666';

  return (
    <Card theme={theme} className="h-80 w-full">
      <h3 className="text-lg font-semibold mb-4">Traffic Trends</h3>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
              contentStyle={{ 
                backgroundColor: theme === 'dark' ? '#2d2d3d' : '#fff',
                borderColor: 'transparent',
                borderRadius: '8px',
                color: theme === 'dark' ? '#fff' : '#000'
              }}
            />
            <Line type="monotone" dataKey="pv" stroke={strokeColor1} strokeWidth={3} dot={false} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke={strokeColor2} strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
