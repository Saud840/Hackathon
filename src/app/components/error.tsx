import TopBar from "./topbar";
import Image from "next/image";
import Footer from "./footer";
function ErrorPage() {
  return (
    <div>
      <TopBar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Image
          src="/images/group197.png"
          alt="404"
          width={600}
          height={600}
        />
        <h1 className="text-2xl font-bold">Page Not Found</h1>
        <p className="text-gray-600">Sorry, we couldn't find the page.</p>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
