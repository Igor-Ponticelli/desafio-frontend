import { Link, useNavigate } from "react-router-dom";
import Heading from "./Heading";
import { Button } from "./ui/button";
import { useState } from "react";
import { Input } from "./ui/input";
import { login } from "@/services/api";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const resposta = await login(email, senha);

    if (resposta.erro) {
      setErro(resposta.erro);
    } else {
      localStorage.setItem("logado", "true");
      navigate("/dashboard")
    }
  };

  return (
    <>
      <form
        onSubmit={handleLogin}
        className="space-y-4 w-full max-w-2xl mx-auto px-10 py-20 lg:py-10 lg:px-4"
      >
        <Heading as="h1" className="pb-2">
          Login
        </Heading>
        <div>
          <Input
            value={email}
            placeholder="E-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <Input
            value={senha}
            placeholder="Senha"
            type="password"
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 pt-4">
          <Button type="submit">Entrar</Button>
          <Button type="button" variant={"link"}>
            <Link to={"/cadastro"}>Não tenho conta</Link>
          </Button>
        </div>
      </form>
      {erro && <p style={{ color: "red" }}>{erro}</p>}
    </>
  );
}

export default FormLogin;
