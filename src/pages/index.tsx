import Almuerzos from "../components/Almuerzos";
import Bebidas from "../components/Bebidas";
import Califica from "../components/Califica";
import DesayunosYCenas from "../components/DesayunosCenas";
import Eventos from "../components/Eventos";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Postres from "../components/Postres";
import Reserva from "../components/Reserva";
import Servicios from "../components/Servicios";
import Servicios2 from "../components/Servicios2";
import RadioGroupRating from "../components/StyledRating";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center bg-white max-w-full">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
      <Navbar />
      <Almuerzos />
      <DesayunosYCenas />
      <Postres />
      <Bebidas />
      <Reserva />
      <Eventos />
      <Servicios />
      <Servicios2 />
      <Califica />
      <RadioGroupRating />
      <Footer />
    </main>
  );
}
