type ContactCardProps = {
  styles?: string;
  children?: React.ReactNode;
};

export const FooterRowContainer = ({ styles, children }: ContactCardProps) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-6 py-16 lg:py-10 border-b border-gray-700   ${styles}`}
    >
      {children}
    </div>
  );
};
