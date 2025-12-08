'use client';

import * as React from 'react';
import { AnimatePresence, motion, type HTMLMotionProps } from 'motion/react';

import {
  useIsInView,
  type UseIsInViewOptions,
} from '@/hooks/use-is-in-view';
import { Slot, type WithAsChild } from '@/components/animate-ui/primitives/animate/slot';

type FadeOutProps = WithAsChild<
  {
    children?: React.ReactNode;
    delay?: number;
    initialOpacity?: number;
    opacity?: number;
    ref?: React.Ref<HTMLElement>;
  } & UseIsInViewOptions &
    HTMLMotionProps<'div'>
>;

function FadeOut({
  ref,
  transition = { type: 'spring', stiffness: 200, damping: 20 },
  delay = 0,
  inView = false,
  inViewMargin = '0px',
  inViewOnce = true,
  initialOpacity = 1,
  opacity = 0,
  asChild = false,
  ...props
}: FadeOutProps) {
  const { ref: localRef, isInView } = useIsInView(
    ref as React.Ref<HTMLElement>,
    {
      inView,
      inViewOnce,
      inViewMargin,
    },
  );

  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [isInView, delay]);

  const Component = asChild ? Slot : motion.div;

  return (
    <AnimatePresence>
    { isVisible && 
      (
        <Component
          ref={localRef as React.Ref<HTMLDivElement>}
          initial="visible"
          animate={isInView ? 'visible' : 'hidden'}
          exit="hidden"
          variants={{
            hidden: { opacity },
            visible: { opacity: initialOpacity },
          }}
          transition={{
            ...transition,
            delay: (transition?.delay ?? 0) + delay / 1000,
          }}
          {...props}
        />
    )}
    </AnimatePresence>
  );
}

type FadeOutListProps = Omit<FadeOutProps, 'children'> & {
  children: React.ReactElement | React.ReactElement[];
  holdDelay?: number;
};

function FadeOuts({
  children,
  delay = 0,
  holdDelay = 0,
  ...props
}: FadeOutListProps) {
  const array = React.Children.toArray(children) as React.ReactElement[];

  return (
    <>
      {array.map((child, index) => (
        <FadeOut
          key={child.key ?? index}
          delay={delay + index * holdDelay}
          {...props}
        >
          {child}
        </FadeOut>
      ))}
    </>
  );
}

export { FadeOut, FadeOuts, type FadeOutProps, type FadeOutListProps };
