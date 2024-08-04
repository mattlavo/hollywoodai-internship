import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LandingFeatures from "@/components/LandingFeatures";
import ForgotPassword from "@/components/modals/ForgotPassword";
import LoginModal from "@/components/modals/LoginModal";
import SignUpModal from "@/components/modals/SignUpModal";
import Nav from "@/components/Nav";
import Steps from "@/components/Steps";
import Summary from "@/components/Summary";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <LandingFeatures />
      <Summary />
      <Steps />
      <Footer />
      <LoginModal />
      <SignUpModal />
      <ForgotPassword />
    </>
  );
}
