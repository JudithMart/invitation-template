import Hero from "../components/Hero";
import Date from "../components/Date";
import Ceremony from "../components/Ceremony";
import { invitadosCeremonia } from "../data/people";

import ButtonConfirmation from "../components/ButtonConfirmation";

function Home() {
  const params = new URLSearchParams(window.location.search);

  const codigoInvitado = params.get("i");

  const nombreInvitado = invitadosCeremonia[codigoInvitado];
  return (
    <main
      className="relative min-h-screen bg-cover bg-center bg-fixed 
    "
    >
      <Hero />
      {nombreInvitado && <Ceremony nombre={nombreInvitado} />}
      <Date />

      <ButtonConfirmation />
      {/* <Separator />
        <Location />
        <DressCode />
        
        <ImagenFondo />
        <Photos /> */}
      {/* </motion.div> */}
    </main>
  );
}

export default Home;
