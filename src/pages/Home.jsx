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
    <main className="relative bg-[#151012]">
      <Hero />
      {nombreInvitado && <Ceremony nombre={nombreInvitado} />}
      <Date />
      <ButtonConfirmation />
    </main>
  );
}

export default Home;
