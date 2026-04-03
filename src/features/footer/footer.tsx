import { Container } from "@/shared/layout/container";
import { FooterContact } from "./sections/footer-contact";
import { FooterCredits } from "./sections/footer-credits";
import { FooterTop } from "./sections/footer-top";

export default function Footer() {
  return (
    <footer className="bg-black ">
      <Container className="text-white">
        <FooterTop />
        <FooterContact />
        <FooterCredits />
      </Container>
    </footer>
  );
}
