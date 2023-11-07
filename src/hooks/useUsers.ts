import User from "../models/User";
import useData from "./useData";

const useUsers = () => useData<User>('/users')

export default useUsers