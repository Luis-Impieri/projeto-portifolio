'use client';

import { ReactNode } from 'react';
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react';

interface ProvidersProps {
  children: ReactNode;
}

export function Provider({ children }: ProvidersProps) {
  return <ChakraProvider>{children}</ChakraProvider>;
}
