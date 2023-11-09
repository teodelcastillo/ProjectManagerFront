import PaginationInfo from "./PaginationInfo"

export default interface Client {
    paginationInfo?: PaginationInfo
    id: number
    name: string
    clientID: string
    ammount_of_projects: number
}