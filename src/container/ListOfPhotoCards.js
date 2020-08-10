import { withPhotos } from "../hoc/withPhotos";
import { ListOfPhotoCardsComponent } from "../components/listOfPhotoCards";

export const ListOfPhotoCards = withPhotos(ListOfPhotoCardsComponent);
