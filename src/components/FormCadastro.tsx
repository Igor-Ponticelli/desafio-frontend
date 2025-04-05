import Heading from "./Heading";
import { Button } from "./ui/button";

interface FormCadastroProps {
  setIsCadastro: React.Dispatch<React.SetStateAction<boolean>>;
}

function FormCadastro({ setIsCadastro }: FormCadastroProps) {
  return (
    <form action="" className="space-y-4 max-w-2xl mx-auto px-10 py-20 lg:py-10 lg:px-4 lg:col-start-2 lg:col-end-4">
      <Heading as="h1" className="pb-2">Cadastro</Heading>
      <div>
        <input
          type="text"
          name="name"
          className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
          placeholder="Nome completo"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
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
            type="text"
            name="mobilePhone"
            className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
            placeholder="Celular"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="cpfCnpj"
            className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
            placeholder="CPF ou CNPJ"
          />
        </div>
        <div>
          <input
            type="date"
            name="birthDate"
            className="border border-zinc-500 rounded text-zinc-400 px-3 py-2 focus:outline-1 outline-zinc-500 w-full"
          />
        </div>
      </div>

      <div>
        <input
          type="text"
          name="companyType"
          className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
          placeholder="Tipo de empresa"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="phone"
            className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
            placeholder="Telefone"
          />
        </div>
        <div>
          <input
            type="text"
            name="postalCode"
            className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
            placeholder="CEP"
          />
        </div>
      </div>

      <div>
        <input
          type="text"
          name="address"
          className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
          placeholder="Endereço"
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div>
          <input
            type="text"
            name="addressNumber"
            className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
            placeholder="Número"
          />
        </div>
        <div>
          <input
            type="text"
            name="complement"
            className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
            placeholder="Complemento"
          />
        </div>
        <div>
          <input
            type="text"
            name="province"
            className="border border-zinc-500 rounded text-zinc-200 px-3 py-2 focus:outline-1 outline-zinc-500 w-full placeholder:text-zinc-400"
            placeholder="Bairro"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 pt-4">
        <Button>
          Cadastrar
        </Button>
        <Button variant={"link"} onClick={() => setIsCadastro(false)}>
          Já tenho conta
        </Button>
      </div>
    </form>
  );
}

export default FormCadastro;
