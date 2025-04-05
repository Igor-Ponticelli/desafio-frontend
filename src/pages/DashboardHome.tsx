import Heading from "@/components/Heading";
import ModalGerarCobranca from "@/components/ModalGerarCobranca";
import { BanknoteArrowDown, BanknoteArrowUp, User } from "lucide-react";

function DashboardHome() {
  const repeticoes = Array.from({ length: 3 });

  return (
    <>
      <Heading as="h1" className="mt-4 mb-8">Dashboard</Heading>
      <div className="p-4 border-2 border-zinc-200 border-dashed rounded-lg dark:border-zinc-700">
        <Heading as="h2">Saldo</Heading>
        <h2 className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-light">
        </h2>
        <Heading as="h3" className="mb-10 text-lg sm:text-2xl font-light">R$ 3.000,00</Heading>
        <Heading as="h2" className="mb-1.5">Cobranças</Heading>
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
        <Heading as="h2" className="mb-1.5">Clientes que faltam pagar</Heading>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-500 border rounded border-zinc-200 dark:border-zinc-500">
          {repeticoes.map((_, index) => (
            <li
              key={index}
              className="p-2.5 flex items-center justify-between flex-wrap gap-2"
            >
              <div className="flex items-center gap-3">
                <User
                  size={18}
                  className="stroke-zinc-400 dark:stroke-zinc-400"
                />
                <div>
                  <Heading as="h3">Fernando Torres</Heading>
                  <span className="block text-xs sm:text-sm text-zinc-700 dark:text-zinc-400">
                    129.674.321-58
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-zinc-700 dark:text-zinc-200 pr-4">
                  R$ 1.400,00
                </span>
                <ModalGerarCobranca />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default DashboardHome;
