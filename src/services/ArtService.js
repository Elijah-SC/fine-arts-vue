import { api } from "./AxiosService.js"

class ArtService {
  async getArt() {
    const response = await api.get(`api/artworks`)
    console.log(`got 🖼️`, response.data)
  }

}

export const artService = new ArtService()