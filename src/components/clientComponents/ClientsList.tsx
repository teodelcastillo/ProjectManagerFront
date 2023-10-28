
import useClients from '../../hooks/useClients'

const ClientsList = () => {
  const {clients} = useClients() 
  return (
    <ul>
        {clients.map(client => <li key={client.id}>{client.name}</li>)}
    </ul>
  )
}

export default ClientsList