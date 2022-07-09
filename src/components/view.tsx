import Image from "./image";

type Props = {
    images: string[];
    removeFav?: Function;
    updateFavourites?: Function;
    isMarkedFav?: Function
    allowUserAction: boolean;

}
const Viewer = ({images, isMarkedFav, removeFav, updateFavourites, allowUserAction}: Props) => {
    return   <div className="image-carousel">
    {images.length == 0 && allowUserAction && <div>Loading</div>}
    {images.length == 0 && (!allowUserAction) && <div>No Items available</div>}
    {images.length > 0 && images.map((path: string) => <Image
    path={path}
    addToFav={updateFavourites}
    isMarkedFav={isMarkedFav}
    removeFromFav={removeFav}
    key={path}
     allowUserAction={allowUserAction}
    />)}
</div>
}

export default Viewer;