
import useData from "./useData";

export interface Client {
    id: number
    name: string
    clientId: string
}

const useClients = () => useData<Client>('/getClients')

export default useClients