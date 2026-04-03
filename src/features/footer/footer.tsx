import { FooterContact } from "./sections/footer-contact";
import { FooterCredits } from "./sections/footer-credits";
import { FooterTop } from "./sections/footer-top";

export default function Footer() {
  return (
    <footer className="bg-black ">
      <div className="max-w-6xl mx-auto p-6 text-white">
        <FooterTop />

        <FooterContact />

        <FooterCredits />
      </div>
    </footer>
  );
}
