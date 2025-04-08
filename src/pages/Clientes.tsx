import { useEffect, useState } from "react";
import Heading from "@/components/Heading";
import ModalClientes from "@/components/ModalClientes";
import { Button } from "@/components/ui/button";
import { Pencil, Trash, User } from "lucide-react";
import { listarClientes, deletarCliente } from "@/services/api";
import ModalConfirmacao from "@/components/ModalConfirmacao";

interface IClientes {
  id: number;
  nome: string;
  cpf: string;
  valor?: number;
}

function Clientes() {
  const [clientes, setClientes] = useState<IClientes[]>([]);
  const [clienteSelecionado, setClienteSelecionado] = useState<IClientes | null>(null);

  const carregarClientes = async () => {
    const data = await listarClientes();
    setClientes(data);
    setClienteSelecionado(null);
  };

  const handleRemover = async (id: number) => {
    await deletarCliente(id);
    carregarClientes();
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <>
      <div className="flex items-start justify-between flex-wrap gap-4 mt-4 mb-8">
        <Heading as="h1">Clientes</Heading>
        <ModalClientes onClienteCriado={carregarClientes} />
      </div>

      <div className="p-4 border-2 border-zinc-200 border-dashed rounded-lg dark:border-zinc-700">
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-500 border rounded border-zinc-200 dark:border-zinc-500">
          {clientes.map((cliente) => (
            <li
              key={cliente.id}
              className="p-2.5 flex items-center justify-between flex-wrap gap-2"
            >
              <div className="flex items-center gap-3">
                <User size={18} className="stroke-zinc-400 dark:stroke-zinc-400" />
                <div>
                  <Heading as="h3">{cliente.nome}</Heading>
                  <span className="block text-xs sm:text-sm text-zinc-700 dark:text-zinc-400">
                    {cliente.cpf}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs text-emerald-500 dark:text-emerald-600 pr-4">
                  Ativo
                </span>
                <ModalClientes
                  modo="editar"
                  clienteEditando={cliente}
                  onClienteCriado={carregarClientes}
                  trigger={
                    <Button variant={"ghost"} size={"iconSmall"}>
                      <Pencil className="stroke-zinc-500" />
                    </Button>
                  }
                />
                <ModalConfirmacao
                  titulo="Excluir cliente"
                  descricao={`Deseja realmente excluir o cliente ${cliente.nome}?`}
                  onConfirmar={() => handleRemover(cliente.id)}
                >
                  <Button variant={"ghost"} size={"iconSmall"}>
                    <Trash className="stroke-zinc-500" />
                  </Button>
                </ModalConfirmacao>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Clientes;
