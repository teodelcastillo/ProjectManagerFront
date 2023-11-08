import Client from "./Client";
import Project from "./Projects";

export default interface Appointment {
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
    project: Project | null | number; 
    projectName: string
  }