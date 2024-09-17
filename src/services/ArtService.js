import { Artwork } from "@/models/Artwork.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class ArtService {
  async getArt() {
    const response = await api.get(`api/artworks`)
    console.log(`got 🖼️`, response.data)
    this.handleResponseData(response.data)
  }

  async changePage(pageNumber) {
    const response = await api.get(`api/artworks?page=${pageNumber}`)
    console.log(response.data)
    this.handleResponseData(response.data)
  }
  handleResponseData(responseData) {
    const newArtworks = responseData.artworks.map(artPOJO => new Artwork(artPOJO))
    AppState.artworks = newArtworks
    AppState.currentPage = responseData.page
    AppState.totalPages = responseData.pages
    console.log(AppState.currentPage, `out of`, AppState.totalPages, `pages`)
  }

}

export const artService = new ArtService()