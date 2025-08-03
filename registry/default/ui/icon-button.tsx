import { type VariantProps, cva } from 'class-variance-authority';
import { Loader2 } from 'lucide-react';
import { Slot } from 'radix-ui';
import { forwardRef, memo } from 'react';

import { cn } from '@/lib/utils';

export const iconButtonVariants = cva(
  'focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-md text-sm font-medium shadow-black/5 transition-all focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 hover:scale-110 active:scale-100 [&_svg]:stroke-[1.5]',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        xs: 'size-7 rounded-md [&_svg]:size-4',
        sm: 'size-8 rounded-md [&_svg]:size-4',
        md: 'size-9 [&_svg]:size-4.5',
        lg: '[&_svg]:size-5 size-10 rounded-md',
        xl: 'size-11 rounded-md [&_svg]:size-6',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  },
);

export interface IconButtonProps
  extends React.ComponentProps<'button'>,
    VariantProps<typeof iconButtonVariants> {
  asChild?: boolean;
  loading?: boolean;
  circle?: boolean;
}

export const IconButton = memo(
  forwardRef<HTMLButtonElement, IconButtonProps>(
    (
      {
        className,
        children,
        type = 'button',
        variant,
        size,
        asChild = false,
        loading = false,
        circle = false,
        ...restProps
      },
      ref,
    ) => {
      const Comp = asChild ? Slot.Root : 'button';
      const content = loading ? <Loader2 className='animate-spin' /> : children;

      return (
        <Comp
          type={asChild ? undefined : type}
          className={cn(
            iconButtonVariants({
              variant,
              size,
            }),
            circle && 'rounded-full',
            className,
          )}
          disabled={loading}
          ref={ref}
          {...restProps}
        >
          {content}
        </Comp>
      );
    },
  ),
);
