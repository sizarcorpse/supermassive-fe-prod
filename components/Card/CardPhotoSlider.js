// #next :
import getConfig from "next/config";
import Image from "next/image";
// #contexts :

// #hooks :
import { MakeUrls } from "utils/MakeUrls";
// #components :

// #validations :

// #material-ui :
import { ThemeDistributor } from "styles/ThemeDistributor";
import { withStyles, Box } from "@material-ui/core";

// #other :
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
SwiperCore.use([Navigation, Pagination]);

// #mainFunction :

const CardPhotoSlider = (props) => {
  const { photos } = props;
  const { publicRuntimeConfig } = getConfig();
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      style={{ maxWidth: 405, maxHeight: 302 }}
    >
      {photos.map((photo, i) => (
        <SwiperSlide key={i} style={{ maxWidth: 405, maxHeight: 302 }}>
          <Box
            width="100%"
            height="100%"
            minHeight={302}
            style={{
              background: `url(${MakeUrls(photo.formats.medium)})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backdropFilter: "blur(10px)",
              backgroundPosition: "center",
              maxHeight: 302,
              overflow: "hidden",
            }}
          >
            <Image
              src={MakeUrls(photo)}
              width={photo.width}
              height={photo.height}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default withStyles(
  (theme) => ({
    ...ThemeDistributor(theme),
  }),
  { withTheme: true }
)(CardPhotoSlider);
