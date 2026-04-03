import { Container } from "@/shared/layout/container";
import { NewsletterInput } from "./components/newsletter-input";
import { NewsletterInfo } from "./components/newsletter-info";

export default function Newsletter() {
  return (
    <section>
      <Container className="pt-24 pb-14">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <NewsletterInfo />
          <NewsletterInput />
        </div>
      </Container>
    </section>
  );
}
