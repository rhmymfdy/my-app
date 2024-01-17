import "@/styles/globals.css";
import LayoutAdmin from "@/components/LayoutAdmin";

export default function App({ Component, pageProps }) {
  return (
    <LayoutAdmin>
      <Component {...pageProps} />
    </LayoutAdmin>
  );
}
