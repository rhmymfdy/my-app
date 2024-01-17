
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Header from "./Header";
import Footer from "./Footer";


const LayoutAdmin = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};



export default LayoutAdmin;
