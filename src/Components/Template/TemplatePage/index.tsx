import { Footer } from "../../Footer";
import { HeaderUnauthenticated } from "../../Header/HeadersUnauthenticated";

export const TemplatePage = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <HeaderUnauthenticated />
      {children}
      <Footer />
    </>
  );
};
