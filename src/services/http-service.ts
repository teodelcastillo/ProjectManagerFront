import apiClient from "./api-client";

interface Entity {
    id: number
}

class httpService {

    endpoint: string
    constructor(endpoint: string) {
        this.endpoint = endpoint

    }

    get<T>(page?:number) {
        const controller = new AbortController()
        const params = page ? { page } : {}
        const request = apiClient.get<T[]>(this.endpoint, { 
            params,
            signal: controller.signal
        })
        return { request, cancel: () => controller.abort() }
    }

    delete(id: number) {
        return apiClient.delete(this.endpoint + '/' + id)
    }

    create<T>(entity: T) {
        return apiClient.post(this.endpoint + 'add/', entity)
    }

    update<T extends Entity>(entity: T) {
        return apiClient.put(this.endpoint + 'update/' + entity.id + '/', entity)
    }
}

const create = (endpoint: string) => new httpService(endpoint)

export default create