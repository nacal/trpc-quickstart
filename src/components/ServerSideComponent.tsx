import { FC } from 'react'
import { createCaller } from '@/server'

export const ServerSideComponent: FC = async () => {
  const caller = createCaller({})
  const data = await caller.hello()
  return (
    <div>
      <h1>Server Side Component</h1>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}
