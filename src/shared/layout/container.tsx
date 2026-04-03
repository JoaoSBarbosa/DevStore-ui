type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};
export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`max-w-6xl mx-auto p-6 w-full ${className}`}>
      {children}
    </div>
  );
};
