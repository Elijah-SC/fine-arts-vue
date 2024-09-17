import { Artwork } from "@/models/Artwork.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class ArtService {
  async getArt() {
    const response = await api.get(`api/artworks`)
    // console.log(`got 🖼️`, response.data.artworks)
    const newArtworks = response.data.artworks.map(artPOJO => new Artwork(artPOJO))
    AppState.artworks = newArtworks
  }

}

export const artService = new ArtService()