import { useState } from 'react';
import CadastroImg from '../assets/imgs/cadastro-c.jpg';
import FormLogin from '../components/FormLogin';
import FormCadastro from '../components/FormCadastro';
import ThemeToggle from '@/components/ThemeToggle';

function Login() {

  const [isCadastro, setIsCadastro] = useState<boolean>(false);

  return (
    <>
      <div className='absolute top-0 left-4 z-10'>
        <ThemeToggle />
      </div>
      <div className={`lg:absolute w-full lg:w-[50vw] lg:h-screen transition-all duration-700 ${isCadastro ? 'lg:left-0' : 'lg:top-0 lg:left-1/2'}`}>
        <img src={CadastroImg} alt="Cadastro" className='w-full h-[20vh] lg:h-screen object-cover' />
      </div>
      <main>
        <div className="lg:grid lg:grid-cols-2 lg:h-screen lg:items-center">
          {isCadastro ? <FormCadastro setIsCadastro={setIsCadastro} /> : <FormLogin setIsCadastro={setIsCadastro} />}
        </div>
      </main>
    </>
  );
}

export default Login;
