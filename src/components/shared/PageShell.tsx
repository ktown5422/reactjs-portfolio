import BackgroundGlow from "./BackgroundGlow";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip">
      <BackgroundGlow />
      <Navbar />
      <main className="relative z-10 mx-auto w-full max-w-6xl flex-1 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageShell;
