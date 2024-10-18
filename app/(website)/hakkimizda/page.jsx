import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";

const HakkimizdaPage = () => {
  return (
    <div>
      <div
        className="h-[320px] flex flex-col justify-center items-center bg-no-repeat bg-cover bg-center shadow-md"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url("/images/bg.jpg")`,
        }}
      >
        <div className="bg-black/40 p-8 rounded-md shadow-lg">
          <h6 className="text-white text-2xl font-semibold mb-4 tracking-wide">
            Hakkımızda
          </h6>
          <ul className="flex items-center gap-2 text-sm">
            <li className="flex items-center gap-1">
              <Link
                href="/"
                className="hover:text-gray-200 text-gray-100 transition-colors duration-200"
              >
                Anasayfa
              </Link>
              <IoChevronForwardOutline size={14} className="text-gray-200" />
            </li>
            <li className="flex items-center gap-1">
              <Link
                href="#"
                className="hover:text-gray-200 text-gray-100 transition-colors duration-200"
              >
                Hakkımızda
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 overflow-hidden max-w-7xl mx-auto rounded-lg">
        <div className="px-6 py-12 md:py-16 lg:px-20 antialiased">
          <div className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed">
            <p className="mt-4 text-gray-600 dark:text-gray-400 leading-8">
              Altın Turizm, www.FuarSorgu.com Uluslararası sektörel fuar arama
              web portalını hizmetinize sunuyor. En önemli amacı; yılların
              verdiği Çin hakkındaki deneyimlerini, internet ortamına taşımak ve
              böylece internet üzerinden yönetilebilen sistem sayesinde
              firmaların iş seyahatleri maliyetlerinden ve rezervasyon için
              ayıracakları zamandan tasarruf edilmesini sağlamaktır. Bu
              teknoloji ortamını turizmde hızla kullanıcılarının hizmetine
              sunarak, kaliteli ve güvenilir hizmet veren bir seyahat acentası
              olmayı hedeflemektedir.
            </p>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8">
              Firma Kurucularımızdan Yunus Yoldaş Altın, seyahat acentasının ana
              pazarı olarak Coğrafi, Kültürel, Siyasal ve Ticari alanlarda
              uzmanı olduğu Çin, Hong Kong ve Tayvan destinasyonu olarak
              belirlemiştir. 1995 yılında Üniversite Eğitimine Shanghai Fudan
              Üniversitesin’de Basın Yayın Bölümünde okuyarak başlamıştır.
              Üniversite Eğitiminin son sınıfında İstanbul Fatih Üniversitesi,
              Fen Edebiyat Fakültesine geçiş yaparak Çin Dili ve Edebiyatı
              Bölümünden 2001 yılında mezun olup Filolog ünvanını almıştır.
            </p>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8">
              Ulaşım ve iletişimin; teknolojinin sağladığı avantajlarla hızla
              gelişmesi ve öneminin her alanda ön planda tutulmasıyla birlikte
              dünyadaki ülkelerde birbirini hızla takip etmeye ve dünya ekonomi
              pazarında hızla ilerlemeye dolayısıyla rekabete başlamıştır.
              Globalleşmeden nasibini fazlasıyla alan Çin, hammadde, işgücü,
              maliyetleri açısından daha cazip hale geldiğinden dünya
              ekonomisinde büyüyen dev ve rakip tanımayan bir ülke haline
              gelmiştir.
            </p>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8">
              Çin ticari sistemi, ülkemizdeki ticari sistemden farklılıklar
              göstermektedir. Çin, gelenek ve göreneklerine sıkı sıkıya bağlı
              yaşamını ticaret hayatında da devam ettirmektedir. Esnek olmayan
              katı kurallar ve İngilizcenin bile halen yaygın olmadığı bu ülkede
              iletişim en önemli problemlerden biri olmaya devam ediyor.
            </p>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-8">
              FuarSorgu.com Uluslar arası Sektörel Fuar Arama Portalı ile
              özellikle Çin Halk Cumhuriyetindeki fuarlara gitmek isteyen iş
              adamlarımıza gidecekleri fuarlar hakkında bilgilendirmek, Vize –
              Uçak Bileti – Otel hizmetlerinin yanı sıra Çin’deki partnerimiz
              olan Dış Ticaret Firmamız ile birlikte Ürün ve Pazar Araştırması,
              Malların Takibi vb gibi geniş seçeneklerimiz, servis kalitemiz,
              teknolojimiz ve zengin içeriğimizle hizmetinizdeyiz.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HakkimizdaPage;
