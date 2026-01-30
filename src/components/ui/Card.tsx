import { twMerge } from 'tailwind-merge';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: 'dark' | 'light';
}

export function Card({ children, className, theme = 'dark', ...props }: CardProps) {
  return (
    <div
      className={twMerge(
        'rounded-3xl p-6 shadow-xl flex flex-col',
        theme === 'dark' ? 'bg-card-dark text-white' : 'bg-card-light text-slate-900',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
