const API_URL = 'http://localhost:3000';

export async function login(email: string, senha: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  });
  return res.json();
}

export async function cadastrarUsuario(dados: any) {
  const res = await fetch(`${API_URL}/cadastro`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
}

export async function listarClientes() {
  const res = await fetch(`${API_URL}/clientes`);
  return res.json();
}

export async function criarCliente(cliente: any) {
  const res = await fetch(`${API_URL}/clientes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cliente),
  });
  return res.json();
}

export async function editarCliente(id: number, cliente: any) {
  const res = await fetch(`${API_URL}/clientes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cliente),
  });
  return res.json();
}

export async function deletarCliente(id: number) {
  const res = await fetch(`${API_URL}/clientes/${id}`, {
    method: 'DELETE',
  });
  return res.json();
}

export async function criarCobranca({ clienteId, metodoEnvio }: { clienteId: number, metodoEnvio: string }) {
  const res = await fetch("http://localhost:3000/cobrancas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ clienteId, metodoEnvio }),
  });
  if (!res.ok) throw new Error("Erro ao criar cobrança");
  return res.json();
}

