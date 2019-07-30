import React from 'react';
import { useSpring, animated } from 'react-spring';

export default function Title() {
  const interp = () => r => `translate3d(0, ${5 * Math.sin(r + (2 * Math.PI) / 1.6)}px, 0)`;

  const { radians } = useSpring({
    to: async (next) => {
      // eslint-disable-next-line no-await-in-loop
      while (1) await next({ radians: 2 * Math.PI });
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  });

  return (
    <animated.h1
      style={{ transform: radians.interpolate(interp()) }}
      className="text-monospace text-uppercase text-white text-center"
    >
      Jonathan Tseng
    </animated.h1>
  );
}
