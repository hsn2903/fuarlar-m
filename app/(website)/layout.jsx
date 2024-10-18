import Footer from "@/components/layouts/website/footer";
import GoUpButton from "@/components/layouts/website/go-up-button";
import MainNav from "@/components/layouts/website/main-nav";
import MobileNav from "@/components/layouts/website/mobile-nav";
import TopHeader from "@/components/layouts/website/top-header";
import WhatsAppButton from "@/components/layouts/website/whatsapp";

const WebsiteLayout = ({ children }) => {
  return (
    <div>
      <TopHeader />
      <MainNav />
      <MobileNav />
      <main>{children}</main>
      <WhatsAppButton />
      <GoUpButton />
      <Footer />
    </div>
  );
};

export default WebsiteLayout;
