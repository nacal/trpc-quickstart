import { ClientSideComponent } from '@/components/ClientSideComponent'
import { ServerSideComponent } from '@/components/ServerSideComponent'

export default function Home() {
  return (
    <div>
      <ClientSideComponent />
      <ServerSideComponent />
    </div>
  )
}
