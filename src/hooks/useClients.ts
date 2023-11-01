
import Client from "../models/Client";
import useData from "./useData";


const useClients = () => useData<Client>('/clients')

export default useClients