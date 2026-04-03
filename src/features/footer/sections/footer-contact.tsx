import Image from "next/image";
import { FooterRowContainer } from "../components/footer-row-container";
import { FooterButton } from "../components/footer-button";
import { FooterRowCard } from "../components/footer-row-card";
export const FooterContact = () => {
  return (
    <FooterRowContainer styles="justify-between items-center">
      <FooterRowCard title="Precisa de ajuda?" cardStyles="flex-1">
        <FooterButton
          href="mailto:suporte@devweb.com.br"
          icon="/assets/ui/mail-line.png"
          label="suporte@devweb.com.br"
        />

        <FooterButton
          href=""
          icon="/assets/ui/phone-line.png"
          label="(11) 99999-9999"
        />
      </FooterRowCard>

      <FooterRowCard title="Acompanhe nas redes sociais">
        <FooterButton href="" icon="/assets/ui/instagram-line.png" />
        <FooterButton href="" icon="/assets/ui/linkedin-line.png" />
        <FooterButton href="" icon="/assets/ui/facebook-line.png" />
        <FooterButton href="" icon="/assets/ui/twitter-x-fill.png" />
      </FooterRowCard>
    </FooterRowContainer>
  );
};
