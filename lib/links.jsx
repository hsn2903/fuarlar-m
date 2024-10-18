import {
  AreaChart,
  MapPin,
  Home,
  Hotel,
  Image,
  ImageIcon,
  Plane,
  File,
  UserCircle,
  Lock,
} from "lucide-react";
import { FAIR_SECTORS } from "./constants";

export const WEBSITE_NAV_LINKS = [
  // {
  //   title: "Anasayfa",
  //   link: "/",
  // },
  {
    title: "Sektörel Fuarlar",
    link: "/fuarlar",
    subLinks: FAIR_SECTORS.map((sector) => ({
      title: sector.sector,
      link: `/fuarlar/${sector.sectorSlug}`,
      subLinks: sector.categories.map((category) => ({
        title: category.category,
        link: `/fuarlar/${sector.sectorSlug}/${category.categorySlug}`,
      })),
    })),
  },
  {
    title: "Vize Hizmetleri",
    link: "",
    subLinks: [
      {
        title: "Çin Vizesi",
        link: "/vize-hizmetleri/cin-vizesi",
      },
      {
        title: "Schengen Vizesi",
        link: "/vize-hizmetleri/schengen-vizesi",
      },
      {
        title: "Çin Vizesi İşlemleri 2023",
        link: "/vize-hizmetleri/çin-vize",
      },
    ],
  },
  {
    title: "Medya Galeri",
    link: "",
    subLinks: [
      {
        title: "Basında Biz",
        link: "/basinda-biz",
      },
      {
        title: "İstanbul Ticaret Odası Toplantı",
        link: "/basinda-biz/istanbul-ticaret-odası-toplantı",
      },
    ],
  },
  {
    title: "S.S.S.",
    link: "",
    subLinks: [
      {
        title: "Kosgeb",
        link: "/sikca-sorulan-sorular/kosgeb",
      },
      {
        title: "Schengen vizesi nedir?",
        link: "/sikca-sorulan-sorular/schengen-vizesi-sss",
      },
      {
        title: "Schengen Vizesi İle İlgili Sorular ve Cevapları",
        link: "/sikca-sorulan-sorular/schengen-sık-sorulan-sorular",
      },
    ],
  },
  // {
  //   title: "Hakkımızda",
  //   link: "/hakkimizda",
  // },
  // {
  //   title: "İletişim",
  //   link: "",
  //   subLinks: [
  //     {
  //       title: "Adresimiz",
  //       link: "/iletisim",
  //     },
  //     {
  //       title: "Bize Yazın",
  //       link: "/bize-yazin",
  //     },
  //   ],
  // },
];

export const ADMIN_LINKS = [
  {
    href: "/admin",
    label: "Home",
    icon: <Home className="h-4 w-4" />,
  },
  {
    href: "/admin/fairs",
    label: "Fairs",
    icon: <Plane className="h-4 w-4" />,
  },
  {
    href: "/admin/tours",
    label: "Tours",
    icon: <MapPin className="h-4 w-4" />,
  },
  {
    href: "/admin/posts",
    label: "Blog",
    icon: <File className="h-4 w-4" />,
  },
  {
    href: "/admin/hotels",
    label: "Hotels",
    icon: <Hotel className="h-4 w-4" />,
  },
  {
    href: "/admin/fair-images",
    label: "Fair Images",
    icon: <Image className="h-4 w-4" />,
  },
  {
    href: "/admin/tour-images",
    label: "Tour Images",
    icon: <ImageIcon className="h-4 w-4" />,
  },
  {
    href: "/admin/stats",
    label: "Stats",
    icon: <AreaChart className="h-4 w-4" />,
  },
  {
    href: "/admin/users",
    label: "Kullanıcılar",
    icon: <UserCircle className="h-4 w-4" />,
  },
  {
    href: "/admin/admin",
    label: "Yönetim",
    icon: <Lock className="h-4 w-4" />,
  },
];
