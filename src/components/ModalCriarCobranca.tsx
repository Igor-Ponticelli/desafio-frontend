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
import { Save } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { criarCobranca, listarClientes } from "@/services/api";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface ModalCriarCobrancaProps {
  onCobrancaCriada?: () => void;
}

interface Cliente {
  id: number;
  nome: string;
}

function ModalCriarCobranca({ onCobrancaCriada }: ModalCriarCobrancaProps) {
  const [clienteId, setClienteId] = useState<string>("");
  const [dataVencimento, setDataVencimento] = useState("");
  const [valor, setValor] = useState("");
  const [clientes, setClientes] = useState<Cliente[]>([]);

  useEffect(() => {
    const carregarClientes = async () => {
      const data = await listarClientes();
      setClientes(data);
    };
    carregarClientes();
  }, []);

  const handleSalvar = async () => {
    if (!clienteId || !dataVencimento || !valor) {
      alert("Preencha todos os campos");
      return;
    }

    await criarCobranca({
      clienteId: Number(clienteId),
      dataVencimento,
      valor: Number(valor),
    });

    onCobrancaCriada?.();
    setClienteId("");
    setDataVencimento("");
    setValor("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Criar cobrança</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nova cobrança</DialogTitle>
          <DialogDescription>Preencha os dados para criar uma nova cobrança.</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2 py-4">
          <Select value={clienteId} onValueChange={setClienteId}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione um cliente" />
            </SelectTrigger>
            <SelectContent>
              {clientes.map((cliente) => (
                <SelectItem key={cliente.id} value={cliente.id.toString()}>
                  {cliente.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            type="date"
            value={dataVencimento}
            onChange={(e) => setDataVencimento(e.target.value)}
          />
          <Input
            placeholder="Valor (ex: 1499.90)"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            type="number"
          />
        </div>
        <DialogFooter>
          <Button onClick={handleSalvar}>
            Salvar
            <Save className="ml-1 stroke-zinc-50 dark:stroke-zinc-800" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalCriarCobranca;
