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
import { Send } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useState } from "react";
import { criarCobranca } from "@/services/api"; // função que envia para o backend

interface ModalGerarCobrancaProps {
  clienteId: number;
  onCobrancaGerada?: () => void;
}

function ModalGerarCobranca({
  clienteId,
  onCobrancaGerada,
}: ModalGerarCobrancaProps) {
  const [metodoEnvio, setMetodoEnvio] = useState("email");

  const handleEnviar = async () => {
    await criarCobranca({ clienteId, metodoEnvio });
    alert(`Cobrança gerada e notificada via ${metodoEnvio}`);
    onCobrancaGerada?.();
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"xs"}>Gerar cobrança</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gerar cobrança</DialogTitle>
          <DialogDescription>
            Escolha como deseja notificar o cliente:
          </DialogDescription>
        </DialogHeader>
        <RadioGroup value={metodoEnvio} onValueChange={setMetodoEnvio}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">E-mail</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="whatsapp" id="whatsapp" />
            <Label htmlFor="whatsapp">WhatsApp</Label>
          </div>
        </RadioGroup>

        <DialogFooter>
          <Button variant={"default"} onClick={handleEnviar}>
            Enviar
            <Send className="stroke-zinc-50 dark:stroke-zinc-800 ml-1" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalGerarCobranca;
