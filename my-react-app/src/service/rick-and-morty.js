import { axiosInstance } from "./api"

class RickAndMortyService{
    getAllCharacters = async () => await axiosInstance.get("/charcters")
    getAllEpisodes = async () => await axiosInstance.get("/episodes")
    getAllLocation = async () => await axiosInstance.get("/location")

}

export const RickAndMortyService = new RickAndMortyService()