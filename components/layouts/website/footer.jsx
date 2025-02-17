import Link from "next/link";
import Image from "next/image";
import SocialAccounts from "./social-accounts";
import Logo from "./logo";
import tursabLogo from "@/assets/images/footer-images/footer-tursab.png";
import iataLogo from "@/assets/images/footer-images/footer-iata.png";
import astaLogo from "@/assets/images/footer-images/footer-asta.png";
import pataLogo from "@/assets/images/footer-images/footer-pata.png";
import thyLogo from "@/assets/images/footer-images/footer-thy.png";
import musiadLogo from "@/assets/images/footer-images/footer-musiad.png";

/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  return (
    <footer className="pt-12">
      <div className="border-b border-t border-gray-200 pt-12">
        <div className="wrapper ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[auto_1fr_1fr_1fr] gap-10">
            {/* contacts */}
            <div className="">
              <div className="mb-5">
                <h4 className="sub-heading">Yardıma mı ihtiyacınız var?</h4>
                <div className="flex items-center gap-4">
                  <div className="mr-4 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width="40px"
                      height="40px"
                    >
                      <path
                        fillRule="evenodd"
                        className="fill-blue-600"
                        d="M36.093,16.717 L33.133,16.717 L30.864,19.693 C30.717,19.886 30.487,20.000 30.244,20.000 C30.244,20.000 30.243,20.000 30.243,20.000 C30.000,20.000 29.771,19.888 29.623,19.695 L27.335,16.717 L24.372,16.717 C22.218,16.717 20.465,14.965 20.465,12.811 L20.465,3.907 C20.465,1.753 22.218,0.001 24.372,0.001 L36.093,0.001 C38.247,0.001 40.000,1.753 40.000,3.907 L40.000,12.811 C40.000,14.965 38.247,16.717 36.093,16.717 ZM38.437,3.907 C38.437,2.615 37.386,1.563 36.093,1.563 L24.372,1.563 C23.080,1.563 22.028,2.615 22.028,3.907 L22.028,12.811 C22.028,14.103 23.080,15.155 24.372,15.155 L27.721,15.155 C27.964,15.155 28.193,15.268 28.340,15.460 L30.240,17.934 L32.124,15.462 C32.272,15.269 32.502,15.155 32.746,15.155 L36.093,15.155 C37.386,15.155 38.437,14.103 38.437,12.811 L38.437,12.811 L38.437,3.907 ZM31.014,8.429 L31.014,9.647 C31.014,10.078 30.664,10.428 30.232,10.428 C29.801,10.428 29.451,10.078 29.451,9.647 L29.451,8.239 C29.451,7.618 29.876,7.089 30.485,6.953 C31.041,6.829 31.416,6.323 31.376,5.752 C31.337,5.186 30.881,4.730 30.316,4.691 C29.992,4.669 29.685,4.777 29.451,4.996 C29.216,5.216 29.086,5.514 29.086,5.834 C29.086,6.266 28.736,6.616 28.305,6.616 C27.873,6.616 27.523,6.266 27.523,5.834 C27.523,5.087 27.837,4.365 28.384,3.854 C28.939,3.336 29.663,3.081 30.423,3.132 C31.763,3.225 32.843,4.304 32.935,5.644 C33.024,6.927 32.225,8.068 31.014,8.429 ZM30.233,11.646 C30.438,11.646 30.640,11.729 30.785,11.874 C30.930,12.020 31.014,12.221 31.014,12.427 C31.014,12.633 30.930,12.834 30.785,12.980 C30.640,13.125 30.438,13.209 30.233,13.209 C30.027,13.209 29.825,13.125 29.680,12.980 C29.535,12.834 29.451,12.633 29.451,12.427 C29.451,12.221 29.535,12.020 29.680,11.874 C29.825,11.729 30.027,11.646 30.233,11.646 ZM14.440,16.019 L23.973,25.550 L24.760,24.764 C24.760,24.764 24.760,24.764 24.760,24.764 C24.760,24.764 24.761,24.763 24.761,24.763 L26.731,22.794 C27.574,21.951 28.695,21.487 29.887,21.487 C31.079,21.487 32.200,21.951 33.043,22.794 L38.693,28.442 C39.536,29.285 40.000,30.406 40.000,31.598 C40.000,32.790 39.536,33.910 38.693,34.753 L37.204,36.242 C34.780,38.665 31.557,40.000 28.129,40.000 C24.701,40.000 21.478,38.665 19.054,36.242 L13.486,30.676 C13.181,30.370 13.181,29.875 13.486,29.570 C13.792,29.265 14.286,29.265 14.592,29.570 L20.159,35.137 C22.288,37.265 25.118,38.438 28.129,38.438 C30.646,38.438 33.038,37.617 34.998,36.104 L25.313,26.421 L24.526,27.208 C24.221,27.513 23.726,27.513 23.421,27.208 L12.782,16.572 C12.636,16.425 12.553,16.227 12.553,16.019 C12.553,15.812 12.636,15.614 12.782,15.467 L16.092,12.158 C17.223,11.027 17.223,9.187 16.092,8.056 L10.448,2.413 C9.317,1.282 7.476,1.282 6.345,2.413 L4.928,3.830 L10.929,9.830 C11.234,10.135 11.234,10.630 10.929,10.935 C10.776,11.087 10.576,11.163 10.376,11.163 C10.176,11.163 9.976,11.087 9.824,10.935 L3.890,5.002 C0.490,9.418 0.812,15.794 4.856,19.837 L10.346,25.326 C10.651,25.631 10.651,26.126 10.346,26.431 C10.041,26.736 9.546,26.736 9.241,26.431 L3.751,20.943 C-1.253,15.940 -1.253,7.800 3.751,2.797 L5.240,1.308 C6.981,-0.432 9.813,-0.432 11.553,1.308 L17.197,6.951 C18.938,8.691 18.938,11.522 17.197,13.263 L14.440,16.019 ZM36.170,35.066 L37.588,33.648 C38.135,33.101 38.437,32.372 38.437,31.598 C38.437,30.823 38.135,30.094 37.587,29.547 L31.938,23.899 C31.390,23.351 30.662,23.049 29.887,23.049 C29.112,23.049 28.384,23.351 27.836,23.899 L26.418,25.316 L36.170,35.066 ZM11.492,12.280 C11.492,12.074 11.576,11.873 11.721,11.727 C11.866,11.581 12.068,11.498 12.274,11.498 C12.479,11.498 12.681,11.581 12.826,11.727 C12.971,11.873 13.055,12.074 13.055,12.280 C13.055,12.485 12.971,12.687 12.826,12.832 C12.681,12.977 12.479,13.061 12.274,13.061 C12.068,13.061 11.866,12.977 11.721,12.832 C11.576,12.687 11.492,12.485 11.492,12.280 ZM12.046,27.349 C12.252,27.349 12.453,27.433 12.599,27.578 C12.744,27.724 12.828,27.925 12.828,28.130 C12.828,28.336 12.744,28.538 12.599,28.683 C12.453,28.828 12.252,28.912 12.046,28.912 C11.841,28.912 11.639,28.828 11.494,28.683 C11.348,28.538 11.265,28.336 11.265,28.130 C11.265,27.925 11.348,27.724 11.494,27.578 C11.639,27.433 11.841,27.349 12.046,27.349 Z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <div className="mb-2 text-gray-700">
                      Sorularınız mı var? 7/24 bize ulaşın!
                    </div>
                    <a
                      href="tel:+90212-219-75-75"
                      className="block text-[#297cbb] text-lg"
                    >
                      <span>Bizi Arayın:</span>
                      <span className="text-[#297cbb] font-[500]">
                        (0212) 219 75 75
                      </span>
                    </a>
                  </div>
                  <Link href="tel:+90212-219-75-75" className=""></Link>
                </div>
              </div>

              <div className="">
                <div className="mb-4 w-96">
                  {/* <h4 className="sub-heading">İletişim Bilgileri</h4> */}
                  <span className="mb-2 text-gray-500">
                    ALTIN TURİZM Organizasyon Dış Tic. Ltd. Şti. Meşrutiyet,
                    Halaskargazi Cd. 98/8, 34363 Şişli/İstanbul
                  </span>
                </div>

                <SocialAccounts />
              </div>
            </div>
            {/* company */}
            <div className="">
              <h4 className="sub-heading">Vize Hizmetleri</h4>
              <ul className="">
                <li>
                  <Link
                    className="footer-link"
                    href="/vize-hizmetleri/cin-vizesi"
                  >
                    Çin Vizesi
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/vize-hizmetleri/schengen-vizesi"
                  >
                    Schengen Vizesi
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/vize-hizmetleri/çin-vize"
                  >
                    Çin Vizesi İşlemleri 2023
                  </Link>
                </li>
              </ul>
            </div>
            {/* other services */}
            <div className="">
              <h4 className="sub-heading">Medya Galeri</h4>
              <ul className="">
                <li>
                  <Link className="footer-link" href="/basinda-biz">
                    Basında Biz
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/basinda-biz/istanbul-ticaret-odası-toplantı"
                  >
                    İstanbul Ticaret Odası Toplantı
                  </Link>
                </li>
              </ul>
            </div>

            {/* support */}
            <div className="col-12 col-md-6 col-lg-4 col-xl-1.8 mb-6 mb-md-0">
              <h4 className="sub-heading">S.S.S</h4>
              <ul className="">
                <li>
                  <Link
                    className="footer-link"
                    href="/sikca-sorulan-sorular/kosgeb"
                  >
                    Kosgeb
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/sikca-sorulan-sorular/schengen-vizesi-sss"
                  >
                    Schengen vizesi nedir?
                  </Link>
                </li>
                <li>
                  <Link
                    className="footer-link"
                    href="/sikca-sorulan-sorular/schengen-sık-sorulan-sorular"
                  >
                    Schengen Vizesi İle İlgili Sorular ve Cevapları
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b border-t border-gray-200">
        <div className="wrapper py-4 ">
          <div className="flex items-center justify-between">
            <Logo />

            <section className="">
              <div className="flex items-center gap-4 justify-center flex-wrap py-3">
                <Image
                  src={tursabLogo}
                  alt="tursab logo"
                  width={80}
                  height={50}
                  className="w-auto h-12"
                />
                <Image
                  src={iataLogo}
                  alt="iata logo"
                  width={70}
                  height={40}
                  className="w-20 h-12"
                />
                <Image
                  src={astaLogo}
                  alt="asta logo"
                  width={70}
                  height={40}
                  className="w-20 h-auto"
                />
                <Image
                  src={pataLogo}
                  alt="pata logo"
                  width={70}
                  height={40}
                  className="w-20 h-auto"
                />
                <Image
                  src={thyLogo}
                  alt="thy logo"
                  width={80}
                  height={50}
                  className="w-auto h-12"
                />

                <Image
                  src={musiadLogo}
                  alt="musiad logo"
                  width={70}
                  height={40}
                  className="w-20 h-auto"
                />
              </div>
            </section>
          </div>
        </div>
      </div>

      <div className="wrapper py-6">
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Fuar Sorgu. Bütün hakları saklıdır.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link className="footer-link" href="/">
              Anasayfa
            </Link>

            <Link className="footer-link" href="/fuarlar">
              Sektörel Fuarlar
            </Link>

            <Link className="footer-link" href="/vize-hizmetleri">
              Vize Hizmetleri
            </Link>

            <Link className="footer-link" href="/basinda-biz">
              Medya Galeri
            </Link>

            <Link className="footer-link" href="/sss">
              S.S.S
            </Link>

            <Link className="footer-link" href="/hakkimizda">
              Hakkımızda
            </Link>

            <Link className="footer-link" href="/iletisim">
              İletişim
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
