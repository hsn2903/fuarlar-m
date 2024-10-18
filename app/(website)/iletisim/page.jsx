import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendMessage } from "@/lib/actions/messages";

export const metadata = {
  title: "İletişim",
};

export default async function IletisimPage() {
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

      <div className="w-full">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg mt-12">
          <form action={sendMessage} method="post" className="space-y-6">
            {/* Name Field */}
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-2 text-base font-semibold text-gray-800"
              >
                Ad Soyad
              </label>
              <Input
                id="name"
                name="name"
                placeholder="Ad Soyad"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-shadow duration-200"
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-2 text-base font-semibold text-gray-800"
              >
                E-posta
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="E-posta"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-shadow duration-200"
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col">
              <label
                htmlFor="phone"
                className="mb-2 text-base font-semibold text-gray-800"
              >
                Telefon
              </label>
              <Input
                id="phone"
                name="phone"
                placeholder="Telefon"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-shadow duration-200"
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-2 text-base font-semibold text-gray-800"
              >
                Mesaj
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Mesajınız"
                required
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-shadow duration-200"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-300 ease-in-out"
            >
              Gönder
            </Button>
          </form>
        </div>

        {/* Map Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="w-full h-80 rounded-lg shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10120.177751010599!2d28.97843277830672!3d41.05265939065575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x179cb600b76fc273!2s%C3%87in+Vizesi!5e0!3m2!1str!2str!4v1545996546542"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
