import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
