import { BarChartBlock } from './BarChartBlock';
import { LineChartBlock } from './LineChartBlock';
import { PieChartBlock } from './PieChartBlock';
import { RadarChartBlock } from './RadarChartBlock';
import { clsx } from 'clsx';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';

interface DashboardLayoutProps {
  theme: 'dark' | 'light';
}

export function DashboardLayout({ theme }: DashboardLayoutProps) {
  return (
    <div className={clsx(
      "min-h-screen p-8 transition-colors duration-300",
      theme === 'dark' ? "bg-[var(--color-bg-dark)] text-white" : "bg-[var(--color-bg-light)] text-slate-900"
    )}>
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
            <p className={theme === 'dark' ? "text-gray-400" : "text-gray-500"}>
              Overview of current performance metrics
            </p>
          </div>
          <div className="flex gap-4">
             <Link 
              to={theme === 'dark' ? '/light' : '/'}
              className={clsx(
                "p-2 rounded-full transition-colors",
                theme === 'dark' ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"
              )}
            >
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </Link>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <LineChartBlock theme={theme} />
          </div>
          <div className="lg:col-span-1">
             <PieChartBlock theme={theme} />
          </div>
          
          <div className="lg:col-span-1">
            <RadarChartBlock theme={theme} />
          </div>
          <div className="lg:col-span-2">
             <BarChartBlock theme={theme} />
          </div>
          
           {/* Duplicate some to fill the grid as per design density */}
           <div className="lg:col-span-1">
            <PieChartBlock theme={theme} />
          </div>
          <div className="lg:col-span-1">
            <BarChartBlock theme={theme} />
          </div>
           <div className="lg:col-span-1">
            <RadarChartBlock theme={theme} />
          </div>
        </div>
      </div>
    </div>
  );
}
