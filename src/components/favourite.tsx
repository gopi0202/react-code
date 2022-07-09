import { useEffect, useState } from "react";
import Viewer from "./view";

type AppProps = {
}; 

const Favourites = ({  }: AppProps): JSX.Element => {
    const [favourite, setFavourites] = useState<any>({});
    useEffect(() => {
        if (localStorage != undefined){
            const fav = JSON.parse(localStorage.getItem('favourites') || "{}");
            setFavourites(fav);
        }
    }, []);
    return <Viewer
    images={Object.keys(favourite).map((path: string) => favourite[path])}
    allowUserAction={false}
></Viewer>
}


export  default Favourites;