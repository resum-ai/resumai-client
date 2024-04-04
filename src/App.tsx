import { Flex } from '@/components/Wrapper';

import { Section1 } from './components/landing/Section1';
import { Section2 } from './components/landing/Section2';
import { Section3 } from './components/landing/Section3';

function App() {
  return (
    <Flex direction="column">
      <Section1 />
      <Section2 />
      <Section3 />
    </Flex>
  );
}

export default App;
