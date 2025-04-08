import Heading from "@/components/Heading";
import ModalGerarCobranca from "@/components/ModalGerarCobranca";
import { BanknoteArrowDown, BanknoteArrowUp, User } from "lucide-react";

function Cobrancas() {

  const clientesPendentes = [
    { id: 1, nome: "Fernando Torres", cpf: "129.674.321-58", valor: 1400 },
    { id: 2, nome: "Carla Silva", cpf: "983.234.129-80", valor: 980 },
    { id: 3, nome: "Paulo Souza", cpf: "143.854.651-00", valor: 2500 },
  ];

  const clientesQuePagaram = [
    { id: 1, nome: "Igor Patrick", cpf: "129.674.321-58", valor: 2200 },
    { id: 2, nome: "Luciana Kormann", cpf: "983.234.129-80", valor: 960 },
  ];

  return (
    <>
      <Heading as="h1" className="mt-4 mb-8">Cobranças</Heading>
      <div className="p-4 border-2 border-zinc-200 border-dashed rounded-lg dark:border-zinc-700">
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="space-y-2 p-4 rounded-sm bg-zinc-50 dark:bg-zinc-800">
            <span className="block text-2xl sm:text-5xl text-zinc-900 dark:text-zinc-100 font-extralight text-center">
              9
            </span>
            <div className="flex items-center gap-2 justify-center">
              <BanknoteArrowUp
                size={22}
                className="stroke-emerald-500 dark:stroke-emerald-400"
              />
              <p className="text-xs text-zinc-600 dark:text-zinc-300 text-center font">
                Recebidas
              </p>
            </div>
          </div>
          <div className="space-y-2 p-4 rounded-sm bg-zinc-50 dark:bg-zinc-800">
            <span className="block text-2xl sm:text-5xl text-zinc-900 dark:text-zinc-100 font-extralight text-center">
              3
            </span>
            <div className="flex items-center gap-2 justify-center">
              <BanknoteArrowDown
                size={22}
                className="stroke-red-500 dark:stroke-red-400"
              />
              <p className="text-xs text-zinc-600 dark:text-zinc-300 text-center font">
                Pendentes
              </p>
            </div>
          </div>
        </div>
        <Heading as="h2" className="mt-10 mb-1.5">Clientes que faltam pagar</Heading>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-500 border rounded border-zinc-200 dark:border-zinc-500">
        {clientesPendentes.map((cliente) => (
            <li
              key={cliente.id}
              className="p-2.5 flex items-center justify-between flex-wrap gap-2"
            >
              <div className="flex items-center gap-3">
                <User
                  size={18}
                  className="stroke-zinc-400 dark:stroke-zinc-400"
                />
                <div>
                  <Heading as="h3">{cliente.nome}</Heading>
                  <span className="block text-xs sm:text-sm text-zinc-700 dark:text-zinc-400">{cliente.cpf}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-zinc-700 dark:text-zinc-200 pr-4">R$ {cliente.valor}</span>
                <ModalGerarCobranca clienteId={cliente.id} />
              </div>
            </li>
          ))}
        </ul>

        <Heading as="h2" className="mt-10 mb-1.5">Clientes que pagaram</Heading>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-500 border rounded border-zinc-200 dark:border-zinc-500">
          {clientesQuePagaram.map((cliente) => (
            <li
              key={cliente.id}
              className="p-2.5 flex items-center justify-between flex-wrap gap-2"
            >
              <div className="flex items-center gap-3">
                <User
                  size={18}
                  className="stroke-zinc-400 dark:stroke-zinc-400"
                />
                <div>
                  <Heading as="h3">{cliente.nome}</Heading>
                  <span className="block text-xs sm:text-sm text-zinc-700 dark:text-zinc-400">{cliente.cpf}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-emerald-600 dark:text-emerald-400 pr-4">R$ {cliente.valor}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Cobrancas;
