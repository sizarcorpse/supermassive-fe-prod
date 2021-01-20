export const ThemeDistributor = (theme) => ({
  // // #global
  scui_link_underline_remove: {
    textTransform: "none",
    textDecoration: "none",
  },

  // #Header
  head_appBar: {
    height: 50,
    maxHeigth: 50,
    borderBottom: "1px solid rgba(227,227,227,1)",
    elevation: 0,
    backgroundColor: "#f9f7f7",
  },
  head_toolBar: {
    height: 50,
    maxHeigth: 50,
    minHeight: 50,
  },
  head_date_icon: {
    height: 15,
    width: 15,
    margin: theme.spacing(1),
  },
  head_iconButton: {
    height: 35,
    width: 35,
    padding: 0,
  },
  head_reaction_icon: {
    height: 25,
    width: 25,
  },

  // #Nav
  nav_appBar: {
    height: 117,
    maxHeigth: 117,
    // borderBottom: "1px solid rgba(227,227,227,1)",
    elevation: 0,
    backgroundColor: "#f9f7f7",
  },
  nav_toolBar: {
    height: 117,
    maxHeigth: 117,
    minHeight: 117,
  },
  nav_onHover: {
    cursor: "pointer",
    "&:hover": {
      color: "#fc415e",
    },
  },
  nav_subCategory_menu: {
    "& .MuiPopover-paper": {
      width: 580,
      height: 345,
      padding: 10,
      marginTop: 40,
      borderTop: "3px solid #fc415e",
    },
  },
  // // Nav small
  // scui_box_grid: {
  //   border: "1px solid pink",
  //   display: "grid",
  //   gridTemplateColumns: "repeat(auto-fill, minmax(633px, 1fr))",
  // },
  // // components => card
  // scui_card_cat: {
  //   position: "absolute",
  //   top: "24px",
  //   left: "7%",
  // },
  // scui_swiper_card_details: {
  //   position: "absolute",
  //   bottom: "5%",
  //   left: "5%",
  // },
  // scui_card_reaction_menu: {
  //   "& .MuiMenu-paper": {
  //     borderRadius: 50,
  //     padding: theme.spacing(0, 1),
  //     marginTop: theme.spacing(-6),
  //   },
  // },

  // #home page

  flexBox_root: {
    display: "flex",
    flexWrap: "wrap",
    margin: "24px auto",
  },

  flexBox_column: {
    [theme.breakpoints.down("xs")]: {
      flex: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      flex: "50%",
    },
    [theme.breakpoints.down("md")]: {
      flex: "33%",
    },
    [theme.breakpoints.up("lg")]: {
      flex: "25%",
    },
    [theme.breakpoints.up("xl")]: {
      flex: "25%",
    },
  },

  try: {
    maxWidth: 840,
    width: "100%",
    "& img": {
      maxWidth: 840,
      width: "100%",
      height: "auto",
      justifySelf: "center",
      textAlign: "center",
    },
    "& p": {
      fontSize: "15px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "300",
      textDecoration: "none solid rgb(255, 255, 255)",
      fontStyle: "normal",
      fontVariant: "normal",
      color: "#292b2c",
    },
    "& a": {
      fontSize: "16px",
      letterSpacing: ".5px",
      wordSpacing: "2px",
      fontWeight: "500",
      textDecoration: "none solid rgb(255, 255, 255)",
      fontStyle: "normal",
      fontVariant: "normal",
      color: "#6459ff",
    },
  },
  // ScuiTextAreaLarge: {
  //   width: "100%",
  //   maxHeight: 400,
  //   fontSize: 15,
  //   border: "1px solid #d3d1d1)",
  //   borderRadius: 5,
  //   background: "rgba(232,232,232,0.3)",
  //   padding: 24,
  // },
  // PostButton: {
  //   borderRadius: 0,
  //   height: 50,
  //   width: 200,
  //   background: "#a1a1a3",
  // },
});
