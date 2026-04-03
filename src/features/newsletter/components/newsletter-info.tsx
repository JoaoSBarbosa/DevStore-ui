import Image from "next/image";

export const NewsletterInfo = () => {
  return (
    <div className="flex items-center gap-4 flex-col lg:flex-row w-full lg:w-1/2">
      <div>
        <Image
          src={"/assets/ui/mail-send-line.png"}
          alt="Newsletter Icon"
          width={60}
          height={60}
        />
      </div>
      <div className="flex flex-col lg:flex-col text-center lg:text-left gap-6 lg:gap-1">
        <h3 className="text-xl font-semibold">
          Fique por dentro das promoções!
        </h3>
        <p className="text-gray-300">
          Coloque seu e-mail e seja o primeiro a saber
        </p>
      </div>
    </div>
  );
};
