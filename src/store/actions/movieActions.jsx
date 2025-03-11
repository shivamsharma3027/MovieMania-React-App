import axios from "./../../utils/Axios"
import { loadMovie } from "../reducers/movieSlice"
export {removeMovie} from '../reducers/movieSlice'

export const asyncLoadMovie=(id)=>async (dispatch,getState)=>{
  try{
    const detail=await axios.get(`/movie/${id}`)
    const externalId= await axios.get(`/movie/${id}/external_ids`)
    const recommendations=await axios.get(`/movie/${id}/recommendations`)
    const videos=await axios.get(`/movie/${id}/videos`)
    const similar=await axios.get(`/movie/${id}/similar`)
    const translations=await axios.get(`/movie/${id}/translations`)
    const watchProvider=await axios.get(`/movie/${id}/watch/providers`)

    let theUltimateDetails={
      detail:detail.data,
      externalId:externalId.data,
      recommendations:recommendations.data.results,
      videos:videos.data.results.find(m=>m.type==="Trailer"),
      similar:similar.data.results,
      translations:translations.data.translations.map(t=>t.english_name),
      watchProvider:watchProvider.data.results.IN,


    }
    dispatch(loadMovie(theUltimateDetails))
    console.log(theUltimateDetails);
    
  }
    catch(err)
    {
      console.log(err);
    }
  }
