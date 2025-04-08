import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

interface ModalConfirmacaoProps {
  children: React.ReactNode;
  titulo?: string;
  descricao?: string;
  onConfirmar: () => void;
}

function ModalConfirmacao({
  children,
  titulo = "Tem certeza?",
  descricao = "Essa ação não poderá ser desfeita.",
  onConfirmar,
}: ModalConfirmacaoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{titulo}</DialogTitle>
          <DialogDescription>{descricao}</DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2 pt-4">
          <DialogTrigger asChild>
            <Button variant="outline">Cancelar</Button>
          </DialogTrigger>
          <DialogTrigger asChild>
            <Button variant="destructive" onClick={onConfirmar}>
              Excluir
            </Button>
          </DialogTrigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ModalConfirmacao;
