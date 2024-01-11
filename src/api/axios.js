import axios from "axios"

const instance = axios.create({
  baseURL: `https://api.themoviedb.org/3`,
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGUyNWRlZTQzY2FkZDQ5YTM0OTk4ZDk1OWRjNDkwMSIsInN1YiI6IjY1OTZkMTljZWY5ZDcyMmFiMzEyYjUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CmCLHMParGuaO2ugIFtk77R_pVb2OfFjoHafK8Nlcg4'
  },
  params: {
    api_key:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNGUyNWRlZTQzY2FkZDQ5YTM0OTk4ZDk1OWRjNDkwMSIsInN1YiI6IjY1OTZkMTljZWY5ZDcyMmFiMzEyYjUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CmCLHMParGuaO2ugIFtk77R_pVb2OfFjoHafK8Nlcg4',
    language: "ko-KR"
  }
})

export default instance



