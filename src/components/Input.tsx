import { motion, HTMLMotionProps } from 'framer-motion';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends Omit<HTMLMotionProps<"input">, "error"> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <div className="relative">
        <motion.input
          whileFocus={{ scale: 1.01 }}
          ref={ref}
          className={cn(
            'w-full bg-transparent border-b border-gray-700 py-2 px-4',
            'focus:outline-none focus:border-white transition-colors',
            'placeholder:text-gray-500',
            error && 'border-red-500',
            className
          )}
          {...props}
        />
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute left-0 top-full mt-1 text-sm text-red-500"
          >
            {error}
          </motion.span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input }; 