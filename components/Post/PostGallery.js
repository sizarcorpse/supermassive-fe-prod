import React, { useState, useCallback } from "react";
// #next :

// import Image from 'next/image';

// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";

// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, makeStyles, Box } from "@material-ui/core";

// #other :
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";

// React.useLayoutEffect = React.useEffect;

const PostGallery = (props) => {
  const { classes, gallery } = props;
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photoSet = [];

  if (gallery.length > 0) {
    gallery.map(async (photo) => {
      let image = {
        src: MakeUrls(photo.formats.large),
        width: photo.formats.large.width,
        height: photo.formats.large.height,
        source: {
          download: MakeUrls(photo),
          fullscreen: MakeUrls(photo),
          regular: MakeUrls(photo.formats.large),
          thumbnail: MakeUrls(photo.formats.large),
        },
      };
      photoSet.push(image);
    });
  }

  return (
    <Box my={2} mx={4}>
      <Gallery photos={photoSet} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              style={{ backgroundColor: "#f9f7f7" }}
              allowFullscreen="true"
              isFullscreen="true"
              autoSize={true}
              preventScroll="true"
              currentIndex={currentImage}
              views={photoSet.map((photo) => ({
                ...photo,
                srcset: photo.srcSet,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Box>
  );
};
export default PostGallery;
