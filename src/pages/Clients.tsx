
import useClients from '../hooks/useClients'

const Clients = () => {

  const {data} = useClients()

  return (
    <ul>
      {data.map((client) => <li key={client.id}>{client.name}</li>)}
    </ul>
  )
}

export default Clients