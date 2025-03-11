import axios from "./../../utils/Axios"
import { loadPerson } from "../reducers/personSlice"
export {removePerson} from '../reducers/personSlice'

export const asyncLoadperson=(id)=>async (dispatch,getState)=>{
  try{
    const detail=await axios.get(`/person/${id}`)
    const externalId= await axios.get(`/person/${id}/external_ids`)
    const combinedCredits= await axios.get(`/person/${id}/combined_credits`)
    const tvCredits= await axios.get(`/person/${id}/tv_credits`)
    const movieCredits= await axios.get(`/person/${id}/movie_credits`)
   
   
     

    let theUltimateDetails={
      detail:detail.data,
      externalId:externalId.data,
      combinedCredits:combinedCredits,
      tvCredits:tvCredits,
      movieCredits:movieCredits
     


    }
    dispatch(loadPerson(theUltimateDetails))
    console.log(theUltimateDetails);
    
  }
    catch(err)
    {
      console.log(err);
    }
  }
