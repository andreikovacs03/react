import { motion } from 'framer-motion';
import { useState } from 'react';

import { Refresh } from '~/shared/components/Framer/Refresh';

import './styles.css';

export const Example = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Refresh onClick={() => setCount(count + 1)} />
      <div className="example-container">
        <motion.div animate={{ scale: 2 }} />
      </div>
    </>
  );
};
