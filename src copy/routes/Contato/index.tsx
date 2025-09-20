//Mensagem informações do contato vai aparecer no cosole.
import  { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BsFillTelephoneFill } from "react-icons/bs";


type FormData = {
  nome: string;
  sobrenome: string;
  email: string;
  telefone?: string;
  mensagem: string;
};

export default function Contato() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    setValue("nome", "");
    setValue("sobrenome", "");
    setValue("email", "");
    setValue("telefone", "");
    setValue("mensagem", "");
  }, [setValue]);

  const onSubmit = (data: FormData) => {
  console.log("Form Data:", data);
  setSuccessMessage("Mensagem enviada com sucesso!");
  setTimeout(() => {
    setSuccessMessage("");
  }, 3000);

  reset();
};

     document.title = "Contato";

  return (
    <div className="h-full flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-10 max-w-6xl">
        <h1 className="sm:textxl md:text-2xl gl:text-3xl font-bold text-foreground mb-4 text-blue-950 md:mb-12 ">
          Hospital Das Clínicas - Contato
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-around gap-1">
          <div className="md:w-[250px]">
            <h3 className="text-[16px] md:text-4xl font-semibold">Tem Alguma dúvida?</h3>
            <p className="text-gray-700 leading-relaxed text-[12px] md:text-[15px]">
              Olá! Estamos aqui para ajudar você. Caso tenha alguma dúvida,
              sugestão ou solicitação, por favor, deixe sua mensagem. Nossa
              equipe entrará em contato o mais rápido possível.
            </p>

            <div className="flex items-center justify-start space-x-3 text-gray-700 text-lg mt-1 md:mt-4">
              <BsFillTelephoneFill />
              <p className="text-[12px] md:text-[15px]">(11)****34**1</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:w-1/2 bg-white p-6"
            noValidate
          >
            {successMessage && (
              <p className="mb-4 text-green-600 font-semibold">{successMessage}</p>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder="Nome*"
                {...register("nome", { required: "Nome é obrigatório" })}
                className={`flex-1 border  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.nome ? "border-red-500" : "border-gray-300"
                }`}
              />
              <input
                type="text"
                placeholder="Sobrenome*"
                {...register("sobrenome", {
                  required: "Sobrenome é obrigatório",
                })}
                className={`flex-1 border  px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  errors.sobrenome ? "border-red-500" : "border-gray-300"
                }`}
              />
            </div>

            <input
              type="email"
              placeholder="Email*"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value:
                    /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "Email inválido",
                },
              })}
              className={`w-full border  px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />

            <input
              type="tel"
              placeholder="Telefone (opcional)"
              {...register("telefone")}
              className="w-full border  px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-300"
            />

            <textarea
              id="myTextarea"
              maxLength={1000}
              placeholder="Digite sua mensagem aqui*"
              {...register("mensagem", { required: "Mensagem é obrigatória" })}
              className={`w-full border  px-3 py-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.mensagem ? "border-red-500" : "border-gray-300"
              }`}
              rows={5}
            ></textarea>

            <button
              type="submit"
              id="btn-enviar"
              className="w-full bg-black text-white font-semibold px-6 py-3  hover:bg-blue-700 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
