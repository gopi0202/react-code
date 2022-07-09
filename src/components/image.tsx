type ImageProps ={
     path: string;
     isMarkedFav?: Function;
     addToFav?: Function;
     removeFromFav?: Function;
     allowUserAction: boolean;
};

const isImage = (path: string) => {
    return path == 'mp4' || path == 'webm' ? false : true;
}



const Image = ({path = "%PUBLIC_URL%/logo192.png", isMarkedFav= ()=>{}, addToFav = ()=>{}, removeFromFav= ()=>{}, allowUserAction}: ImageProps) => {
    const extension = path.split('.').pop()?.toLowerCase() || "";

    const clickHandler = () => {
        if (isMarkedFav(path)){
            removeFromFav(path);
        } else {
            addToFav(path);
        }
    }

    return <div>
        <div className="image-container">
            {isImage(extension)? <img className="image" src={path} alt={path}  />:<video className="image" src={path} autoPlay   />}
        </div>
        {allowUserAction&& <button onClick={clickHandler}>{isMarkedFav(path) ? "Remove Favourites" :"Add to Favourites"}</button>}
    </div>
} 

export default Image;