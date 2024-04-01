import { Footer } from "../../Footer";
import { HeaderAuthenticated } from "../../Header/HeadersAuthenticated";

export const TemplatePageAutheticated = ({
  children,
}: {
  children: JSX.Element;
}) => {
  return (
    <>
      <HeaderAuthenticated />
      {children}
      <Footer />
    </>
  );
};
