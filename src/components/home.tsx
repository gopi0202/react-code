import { useEffect, useState } from "react";
import { createSecureContext } from "tls";
import Image from "./image";
import Viewer from "./view";

type AppProps = {
}; 

const Home = ({}: AppProps): JSX.Element => {
    // Used object to maintain unqiue values
    const [dogs, setDogs] = useState<any>({});
    const [ favourites, setFavourites] = useState<any>({});
    const [refresh, setRefresh] = useState<number>(0);
    
    useEffect(() => {
        fetchMyAPI();
        getFavourites();
    }, [refresh]);

    async function fetchMyAPI() {
        setDogs({});
        let tempObj:any ={}; 
        for (let i = 1; i < 7; i++) {
            let response = await fetch('https://random.dog/woof.json');
            response = await response.json();
            const url: string = response["url"];
            tempObj[url] = url;
        }
        setDogs(tempObj);
    }

    const getFavourites = () => {
        if (localStorage != undefined){
            const fav = JSON.parse(localStorage.getItem('favourites') || "{}");
            setFavourites(fav);
        }
    }
    
    const updateFavourites = (path: string): void => {
        setFavourites((current: any) => ({...current, [path]: path}));
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }

    const removeFav = (path: string): void => {
        if (favourites[path] != undefined) {
            const obj = favourites[path];
            delete obj[path];
            setFavourites(obj);
            localStorage.setItem('favourites', JSON.stringify(obj));
        }
    }
 
    const isMarkedFav = (path: string): boolean =>{
        console.log(favourites);
        return favourites[path] != undefined;
    }

    return (
    <div className="container">
    <Viewer
        images={Object.keys(dogs).map((path: string) => dogs[path])}
        updateFavourites={updateFavourites}
        removeFav={removeFav}
        isMarkedFav={isMarkedFav}
        allowUserAction={true}
    ></Viewer>
    {(Object.keys(dogs).length > 0) &&<button className="refresh" onClick={() => setRefresh(Math.random() * 1000)}>Refresh</button>}
    </div>
    );
}

export default Home;