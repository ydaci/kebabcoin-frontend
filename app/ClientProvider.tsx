'use client'

import { WagmiProvider, createConfig } from 'wagmi'
import { polygon } from 'wagmi/chains'
import { http } from 'viem'
import { RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function ClientProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [queryClient] = useState(() => new QueryClient())

  const config = createConfig({
    chains: [polygon],
    transports: {
      [polygon.id]: http(),
    },
  })

  return (
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  )
}
