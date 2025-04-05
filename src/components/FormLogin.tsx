import Heading from "./Heading";
import { Button } from "./ui/button";

interface FormLoginProps {
  setIsCadastro: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormLogin({ setIsCadastro }: FormLoginProps) {
  return (
    <form className="space-y-4 w-full max-w-2xl mx-auto px-10 py-20 lg:py-10 lg:px-4">
      <Heading as="h1" className="pb-2">Login</Heading>
      <div>
        <input
          type="email"
          name="email"
          className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
          placeholder="E-mail"
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
          placeholder="Senha"
        />
      </div>
      <div className="flex items-center gap-4 pt-4">
        <Button>Entrar</Button>
        <Button variant={"link"} onClick={() => setIsCadastro(true)}>
          Não tenho conta
        </Button>
      </div>
    </form>
  );
}

export default FormLogin;
