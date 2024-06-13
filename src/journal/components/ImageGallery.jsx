
import { ImageList, ImageListItem } from '@mui/material/';

export const ImageGallery = ({ images }) => {
    if (!images || images.length === 0) return;
    return (
        <ImageList sx={{ width: '100%', height: 500 }} cols={4} rowHeight={200}>
            if()
            {images.map((image) => (
                <ImageListItem key={image}>
                    <img
                        srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src={`${image}?w=164&h=164&fit=crop&auto=format`}
                        alt={'Note Image'}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}
