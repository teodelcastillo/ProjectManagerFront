import Client from "./Client";
import PaginationInfo from "./PaginationInfo";
import Project from "./Projects";

export default interface Appointment {
    paginationInfo?: PaginationInfo
    title: string
    id: number
    date: string; 
    time: string; 
    description: string;
    is_done: boolean;
    done_date: string | null; 
     
    done_comment: string | null;
    client: Client | null; 
    clientName: string
    project: Project | null ; 
    projectName: string
  }