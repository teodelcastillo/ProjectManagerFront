import Client from "./Client";
import Project from "./Projects";

export default interface Appointment {
    date: string; // Puedes usar 'Date' en lugar de 'string' si lo prefieres
    time: string; // Puedes usar 'Date' en lugar de 'string' si lo prefieres
    description: string;
    is_done: boolean;
    done_date: string | null; // Puedes usar 'Date' en lugar de 'string' si lo prefieres
     // Debes definir la interfaz 'User' si la utilizas
    done_comment: string | null;
    client: Client | null; // Debes definir la interfaz 'Client' si la utilizas
    project: Project | null; // Debes definir la interfaz 'Project' si la utilizas
  }