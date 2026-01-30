import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Card } from '../ui/Card';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface PieChartBlockProps {
  theme?: 'dark' | 'light';
}

export function PieChartBlock({ theme = 'dark' }: PieChartBlockProps) {
  return (
    <Card theme={theme} className="h-80 w-full">
      <h3 className="text-lg font-semibold mb-4">Distribution</h3>
      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip 
               contentStyle={{ 
                backgroundColor: theme === 'dark' ? '#2d2d3d' : '#fff',
                borderColor: 'transparent',
                borderRadius: '8px',
                color: theme === 'dark' ? '#fff' : '#000'
              }}
            />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
