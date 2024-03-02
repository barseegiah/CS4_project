// ClerkProvider.js
import React from 'react';
import { ClerkProvider } from '@clerk/clerk-react';
import { Provider as ClerkProviderExpo } from '@clerk/clerk-expo';

const ClerkProviderWrapper = ({ children }) => (
  <ClerkProvider>
    <ClerkProviderExpo>
      {children}
    </ClerkProviderExpo>
  </ClerkProvider>
);

export default ClerkProviderWrapper;
