import { createFileRoute } from "@tanstack/react-router";

import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Menu from "@/components/site/Menu";
import Reservation from "@/components/site/Reservation";
import Testimonials from "@/components/site/Testimonials";
import Social from "@/components/site/Social";
import Footer from "@/components/site/Footer";

const title = "The Annavasal Hotel | Traditional Tamil Dining in Udumalpet & Palani";
const description =
  "Authentic Tamil cuisine, stone-ground masalas, filter kaapi and plantain-leaf feasts at The Annavasal Hotel. Book a table in Udumalpet or Palani.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface antialiased">
      <Header />
      <main className="w-full bg-surface pt-[7.5rem] xl:pt-[8.5rem]">
        <div className="flex w-full flex-col">
          <Hero />
          <Menu />
          <Reservation />
          <Testimonials />
          <Social />
        </div>
      </main>
      <Footer />
    </div>
  );
}
