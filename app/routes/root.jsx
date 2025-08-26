import { Outlet } from "react-router";

import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
export default function RootLayout() {
  return (
    <>
      <Nav />
      <main>
        <Outlet /> {/* renders child routes like Home, About, etc */}
      </main>
      <Footer />
    </>
  );
}
