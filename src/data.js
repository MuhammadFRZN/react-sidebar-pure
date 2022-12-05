export const navlink = [
  {
    id: 1,
    url: "/",
    text: "Home",
    imageSrc: "/home.png",
    subcat: [
      {
        id: 1,
        url: "/home/subcat1",
        text: "Home subcat 1",
        parentId: 1,
      },
      {
        id: 2,
        url: "/home/subcat2",
        text: "Home subcat 2",
        parentId: 1,
      },
    ],
  },
  {
    id: 2,
    url: "/about",
    text: "About",
    imageSrc: "/about.png",
    subcat: [
      {
        id: 1,
        url: "/about/subcat1",
        text: "About subcat 1",
        parentId: 2,
      },
      {
        id: 2,
        url: "/about/subcat2",
        text: "About subcat 2",
        parentId: 2,
      },
    ],
  },
  {
    id: 3,
    url: "/contact",
    text: "Contact",
    imageSrc: "/contact.png",
    subcat: [
      {
        id: 1,
        url: "/contact/subcat1",
        text: "Contact subcat 1",
        parentId: 3,
      },
      {
        id: 2,
        url: "/contact/subcat2",
        text: "Contact subcat 2",
        parentId: 3,
      },
    ],
  },
  {
    id: 4,
    url: "/gallery",
    text: "Gallery",
    imageSrc: "/gallery.png",
    subcat: [
      {
        id: 1,
        url: "/gallery/subcat1",
        text: "Gallery subcat 1",
        parentId: 4,
      },
      {
        id: 2,
        url: "/gallery/subcat2",
        text: "Gallery subcat 2",
        parentId: 4,
      },
    ],
  },
];
