import React from 'react'
import { PrivyProvider } from '@privy-io/react-auth'

const ASTRO_PRIVY_ID = 'clvlgowym05sntz327zrsveof'

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <PrivyProvider
      appId={ASTRO_PRIVY_ID}
      config={{
        embeddedWallets: {
          createOnLogin: 'off'
        }
      }}
    >
      {children}
    </PrivyProvider>
  )
}
