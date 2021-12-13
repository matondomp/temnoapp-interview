
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import Navigation from './src/navigation';
import { ProviderItemContext } from './src/hooks/detailsProductContex'

export default function App() {

    return (
      <SafeAreaProvider>
        <ProviderItemContext>
             <Navigation />  
        </ProviderItemContext>
      </SafeAreaProvider>
    );
  
}
