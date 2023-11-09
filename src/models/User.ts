import PaginationInfo from "./PaginationInfo"

export default interface User {
    paginationInfo?: PaginationInfo
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
}