type FooterRowCardProps = {
  title: string;
  cardStyles?: string;
  titleStyles?: string;
  children?: React.ReactNode;
  isFlexColumn?: boolean;
};
export const FooterRowCard = ({
  title,
  cardStyles,
  titleStyles,
  children,
  isFlexColumn,
}: FooterRowCardProps) => {
  const defaulChildrentyles = "flex gap-6";
  const optionStyles = `${isFlexColumn ? "flex-col md:flex-row" : "flex-row flex-wrap"}`;

  return (
    <div className={cardStyles}>
      <h3 className={`${titleStyles} mb-6 text-center lg:text-left`}>
        {title}
      </h3>
      <div className={`${optionStyles} ${defaulChildrentyles}`}>{children}</div>
    </div>
  );
};
