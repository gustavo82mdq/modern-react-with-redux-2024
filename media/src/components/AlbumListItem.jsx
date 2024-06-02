import ExpandablePanel from "./ExpandablePanel";
import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { useRemoveAlbumMutation } from "../store";
import PhotosList from "./PhotosList";

export default function AlbumListItem({album}) {
    const [removeAlbum, results] = useRemoveAlbumMutation()

    const handleRemoveAlbum = () => {
        removeAlbum(album)
    }

    const header = (
        <>
            <Button className="mr-2" onClick={handleRemoveAlbum} loading={results.isLoading}>
                <GoTrashcan/>
            </Button>
            {album.title}
        </>
    )

    return (
        <ExpandablePanel key={album.id} header={header}>
            <PhotosList album={album} />
        </ExpandablePanel>
    )
}