import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Heading from "./Heading";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { cadastrarUsuario } from "@/services/api";

function FormCadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    mobilePhone: "",
    cpfCnpj: "",
    birthDate: "",
    companyType: "",
    phone: "",
    postalCode: "",
    address: "",
    addressNumber: "",
    complement: "",
    province: "",
    city: "",
    state: "",
    incomeValue: "",
    senha: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await cadastrarUsuario(form);
    navigate("/"); // volta pra tela de login
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-2xl mx-auto px-10 py-20 lg:py-10 lg:px-4 lg:col-start-2 lg:col-end-4"
    >
      <Heading as="h1" className="pb-2">
        Cadastro
      </Heading>

      <Input
        type="text"
        name="name"
        placeholder="Nome completo"
        value={form.name}
        onChange={handleChange}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="email"
          name="email"
          placeholder="E-mail"
          value={form.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="mobilePhone"
          placeholder="Celular"
          value={form.mobilePhone}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          name="cpfCnpj"
          placeholder="CPF ou CNPJ"
          value={form.cpfCnpj}
          onChange={handleChange}
        />
        <Input
          type="date"
          name="birthDate"
          value={form.birthDate}
          onChange={handleChange}
        />
      </div>

      <Input
        type="text"
        name="companyType"
        placeholder="Tipo de empresa"
        value={form.companyType}
        onChange={handleChange}
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          name="phone"
          placeholder="Telefone"
          value={form.phone}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="postalCode"
          placeholder="CEP"
          value={form.postalCode}
          onChange={handleChange}
        />
      </div>

      <Input
        type="text"
        name="address"
        placeholder="Endereço"
        value={form.address}
        onChange={handleChange}
      />

      <div className="grid grid-cols-3 gap-4">
        <Input
          type="text"
          name="addressNumber"
          placeholder="Número"
          value={form.addressNumber}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="complement"
          placeholder="Complemento"
          value={form.complement}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="province"
          placeholder="Bairro"
          value={form.province}
          onChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Input
          type="text"
          name="city"
          placeholder="Cidade"
          value={form.city}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="state"
          placeholder="Estado (UF)"
          value={form.state}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          type="number"
          name="incomeValue"
          placeholder="Renda mensal (ex: 3000)"
          value={form.incomeValue}
          onChange={handleChange}
        />
      </div>
      <div>
        <Input
          type="password"
          name="senha"
          placeholder="Senha"
          value={form.senha}
          onChange={handleChange}
        />
      </div>

      <div className="flex items-center gap-4 pt-4">
        <Button type="submit">Cadastrar</Button>
        <Button variant="link" asChild>
          <Link to="/">Já tenho conta</Link>
        </Button>
      </div>
    </form>
  );
}

export default FormCadastro;
