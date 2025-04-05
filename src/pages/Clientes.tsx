import Heading from "@/components/Heading";
import ModalClientes from "@/components/ModalClientes";
import { Button } from "@/components/ui/button";
import { Pencil, Trash, User } from "lucide-react";

function Clientes() {
  return (
    <>
      <div className="flex items-start justify-between flex-wrap gap-4 mt-4 mb-8">
        <Heading as="h1">Clientes</Heading>
        <ModalClientes />
      </div>
      <div className="p-4 border-2 border-zinc-200 border-dashed rounded-lg dark:border-zinc-700">
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-500 border rounded border-zinc-200 dark:border-zinc-500">
          <li className="p-2.5 flex items-center justify-between flex-wrap gap-2">
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
              <span className="text-xs text-emerald-500 dark:text-emerald-600 pr-4">
                Ativo
              </span>
              <Button variant={"ghost"} size={"iconSmall"}>
                <Pencil className="stroke-zinc-500" />
              </Button>
              <Button variant={"ghost"} size={"iconSmall"}>
                <Trash className="stroke-zinc-500" />
              </Button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Clientes;
