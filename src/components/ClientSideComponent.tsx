'use client'

import { FC } from 'react'
import { trpc } from '@/trpc/client'

export const ClientSideComponent: FC = () => {
  const { data } = trpc.hello.useQuery()

  return (
    <div>
      <h1>Client Side Component</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}
