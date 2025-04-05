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
import {  Send } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

function ModalGerarCobranca() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"xs"}>Gerar cobrança</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Gerar cobrança</DialogTitle>
          <DialogDescription>
            Você consegue gerar a cobranã via E-mail ou WhatsApp. Escolha a melhor opção:
          </DialogDescription>
        </DialogHeader>
        <RadioGroup defaultValue="option-one">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-one" id="option-one" />
            <Label htmlFor="option-one">E-mail</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="option-two" id="option-two" />
            <Label htmlFor="option-two">WhatsApp</Label>
          </div>
        </RadioGroup>

        <DialogFooter>
          <div className="text-center">
            <Button variant={"default"} className="cursor-pointer">
              Enviar
              <Send className="stroke-zinc-50 dark:stroke-zinc-800" />
            </Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalGerarCobranca;
