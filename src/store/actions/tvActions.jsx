import axios from "./../../utils/Axios"
import { loadTv as loadtv } from "../reducers/tvSlice"
export {removeTv as removetv} from '../reducers/tvSlice'

export const asyncLoadtv=(id)=>async (dispatch,getState)=>{
  try{
    const detail=await axios.get(`/tv/${id}`)
    const externalId= await axios.get(`/tv/${id}/external_ids`)
    const recommendations=await axios.get(`/tv/${id}/recommendations`)
    const videos=await axios.get(`/tv/${id}/videos`)
    const similar=await axios.get(`/tv/${id}/similar`)
    const translations=await axios.get(`/tv/${id}/translations`)
    const watchProvider=await axios.get(`/tv/${id}/watch/providers`)

    let theUltimateDetails={
      detail:detail.data,
      externalId:externalId.data,
      recommendations:recommendations.data.results,
      videos:videos.data.results.find(m=>m.type==="Trailer"),
      similar:similar.data.results,
      translations:translations.data.translations.map(t=>t.english_name),
      watchProvider:watchProvider.data.results.IN,


    }
    dispatch(loadtv(theUltimateDetails))
    console.log(theUltimateDetails);
    
  }
    catch(err)
    {
      console.log(err);
    }
  }
