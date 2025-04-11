import { useEffect, useState } from "react";
import Heading from "@/components/Heading";
import ModalCriarCobranca from "@/components/ModalCriarCobranca";
import ModalGerarCobranca from "@/components/ModalGerarCobranca";
import { listarCobrancas } from "@/services/api";
import { BanknoteArrowDown, BanknoteArrowUp, User } from "lucide-react";

interface ICobranca {
  id: number;
  cliente: {
    id: number;
    nome: string;
    cpf: string;
  };
  valor: number;
  status: "pendente" | "pago";
  dataVencimento: string;
}

function formatarData(dataISO: string) {
  const data = new Date(dataISO);
  return data.toLocaleDateString("pt-BR");
}

function estaAtrasada(dataISO: string) {
  const hoje = new Date();
  const vencimento = new Date(dataISO);
  return vencimento < hoje;
}

function Cobrancas() {
  const [cobrancas, setCobrancas] = useState<ICobranca[]>([]);

  const carregarCobrancas = async () => {
    const data = await listarCobrancas();
    setCobrancas(data);
  };

  useEffect(() => {
    carregarCobrancas();
  }, []);

  const pendentes = cobrancas.filter((c) => c.status === "pendente");
  const pagas = cobrancas.filter((c) => c.status === "pago");

  return (
    <>
      <div className="flex items-start justify-between flex-wrap gap-4 mt-4 mb-8">
        <Heading as="h1">Cobranças</Heading>
        <ModalCriarCobranca onCobrancaCriada={carregarCobrancas} />
      </div>

      <div className="p-4 border-2 border-zinc-200 border-dashed rounded-lg dark:border-zinc-700">
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="space-y-2 p-4 rounded-sm bg-zinc-50 dark:bg-zinc-800">
            <span className="block text-2xl sm:text-5xl text-zinc-900 dark:text-zinc-100 font-extralight text-center">
              {pagas.length}
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
              {pendentes.length}
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

        <Heading as="h2" className="mt-10 mb-1.5">
          Clientes que faltam pagar
        </Heading>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-500 border rounded border-zinc-200 dark:border-zinc-500">
          {pendentes.map((cobranca) => (
            <li
              key={cobranca.id}
              className="p-2.5 flex items-center justify-between flex-wrap gap-2"
            >
              <div className="flex items-center gap-3">
                <User
                  size={18}
                  className="stroke-zinc-400 dark:stroke-zinc-400"
                />
                <div>
                  <Heading as="h3">{cobranca.cliente.nome}</Heading>
                  <span className="block text-xs sm:text-sm text-zinc-700 dark:text-zinc-400">
                    {cobranca.cliente.cpf}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
                <span className="text-xs text-zinc-700 dark:text-zinc-200">
                  Vencimento: {formatarData(cobranca.dataVencimento)}
                </span>
                <span
                  className={`text-xs font-semibold ${
                    estaAtrasada(cobranca.dataVencimento)
                      ? "text-red-600 dark:text-red-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  {estaAtrasada(cobranca.dataVencimento)
                    ? "Atrasada"
                    : "Em aberto"}
                </span>
                <span className="text-xs text-zinc-700 dark:text-zinc-200">
                  R$ {cobranca.valor}
                </span>
                <ModalGerarCobranca clienteId={cobranca.cliente.id} />
              </div>
            </li>
          ))}
        </ul>

        <Heading as="h2" className="mt-10 mb-1.5">
          Clientes que pagaram
        </Heading>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-500 border rounded border-zinc-200 dark:border-zinc-500">
            <li
              className="p-2.5 flex items-center justify-between flex-wrap gap-2"
            >
              <div className="flex items-center gap-3">
                <User
                  size={18}
                  className="stroke-zinc-400 dark:stroke-zinc-400"
                />
                <div>
                  <Heading as="h3">Nome do pagante</Heading>
                  <span className="block text-xs sm:text-sm text-zinc-700 dark:text-zinc-400">
                    12331232133
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-4">
                <span className="text-xs text-zinc-700 dark:text-zinc-200">
                  Vencimento: 03/04/2025
                </span>
                <span className="text-xs font-semibold text-green-600 dark:text-green-400">Paga</span>
                <span className="text-xs text-zinc-700 dark:text-zinc-200">
                  R$ 1.200,00
                </span>
              </div>
            </li>
        </ul>
      </div>
    </>
  );
}

export default Cobrancas;
