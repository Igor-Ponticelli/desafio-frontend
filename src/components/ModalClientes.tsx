import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus, Save } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { criarCliente, editarCliente } from "@/services/api";

interface ModalClientesProps {
  onClienteCriado?: () => void;
  clienteEditando?: {
    id: number;
    nome: string;
    cpf: string;
  } | null;
  modo?: "criar" | "editar";
  trigger?: React.ReactNode;
}

function ModalClientes({
  onClienteCriado,
  clienteEditando,
  modo = "criar",
  trigger,
}: ModalClientesProps) {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (clienteEditando) {
      setNome(clienteEditando.nome);
      setCpf(clienteEditando.cpf);
    } else {
      setNome("");
      setCpf("");
    }
  }, [clienteEditando, open]);

  const handleSalvar = async () => {
    if (modo === "editar" && clienteEditando) {
      await editarCliente(clienteEditando.id, { nome, cpf });
    } else {
      await criarCliente({ nome, cpf });
    }

    onClienteCriado?.();
    setNome("");
    setCpf("");
    setOpen(false); // fecha o modal!
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || <Button>Cadastrar</Button>}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {modo === "editar" ? "Editar Cliente" : "Novo Cliente"}
          </DialogTitle>
          <DialogDescription>
            {modo === "editar"
              ? "Atualize os dados do cliente."
              : "Preencha os dados do cliente."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 py-4">
          <Input
            placeholder="Nome do cliente"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            placeholder="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <DialogFooter>
          <div className="text-center">
            <Button variant={"default"} onClick={handleSalvar}>
              <Save className="stroke-zinc-50 dark:stroke-zinc-800" />
              Salvar
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalClientes;
