import { FooterButton } from "../components/footer-button";
import { FooterRowContainer } from "../components/footer-row-container";
import { ScrollTopButton } from "../components/scroll-top-button";

export const FooterCredits = () => {
  return (
    <FooterRowContainer styles="justify-between items-center">
      <div className="text-sm text-gray-500 flex flex-col lg:flex-row gap-2">
        <h3>
          {" "}
          © {new Date().getFullYear()} DevStore. Todos os direitos reservados.
        </h3>

        <h3>
          Desenvolvido por{" "}
          <span className="text-white font-medium">João Barbosa</span>
        </h3>
      </div>

      <div className="flex flex-row gap-6">
        <FooterButton
          href="https://joaobarbosadev.vercel.app/"
          icon="/assets/ui/code-s-slash-line.png"
          isBlack={true}
        />

        <FooterButton
          href="https://www.linkedin.com/in/devjbarbosa/"
          icon="/assets/ui/linkedin-line.png"
          isBlack={true}
        />

        <FooterButton
          href="https://github.com/JoaoSBarbosa"
          icon="/assets/ui/github-line.png"
          isBlack={true}
        />

        <ScrollTopButton />
      </div>
    </FooterRowContainer>
  );
};
