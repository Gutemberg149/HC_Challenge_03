import { useParams } from "react-router-dom"
import { PacientesData } from "../../Data/listaInfo";
import type { TipoPaciente } from "../../types/tipoInfo"
import { useEffect, useState } from "react";

export default function PacienteInfo() {
  const [dado, setDado] = useState<TipoPaciente | undefined>(undefined);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
     const paciente = PacientesData.find(p => p.id === Number(id));
    setDado(paciente);
  }, [id]);

  return (
    <div>
      <h1>Pacientes info</h1>
      {dado ? (
        <div>
          <p>ID: {dado.id}</p>
         <img src={dado.img} alt="" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
