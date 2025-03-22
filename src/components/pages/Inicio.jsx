import { useState, useEffect } from "react"

const filmesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Inicio = () => {

    //console.log(filmesURL, apikey);
    const [topFilmes, setTopFilmes] = useState([]);
    const getTopRateFilmes = async (ur) =>{
      const res = await fetch(url);
      const data = await res.json();
      setTopFilmes(data.results);
      //console.log(data);
    };

    useEffect(()=>{
      const topRatedUrl = `${filmesURL}top_rated?${apikey}`;
       getTopRateFilmes(topRatedUrl);

    }, [])
  return (
    <div> {topFilmes && topFilmes.map((filme)=> <p>filme.title</p>)} </div>
  );
}

export default Inicio
