import axios from "axios"

const postData = {
    projectName: String,
    client: String,
    projectId: String,
    projectFolderNumber: String,
    projectDescription: String,
    projectLink: String,
    projectJury: String

}

axios.post('/newProject/', postData)
    .then((response) => {
        console.log('Respuesta enviada al servidor. ', response.data)
    })
    .catch((error) => {
        console.log("Error: ", error)
    })