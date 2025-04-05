function Footer() {
  return (
    <div className="absolute left-4 bottom-4">
    <footer className="shadow-2xl bg-white flex items-center justify-center rounded-lg dark:bg-zinc-800 p-4">
      <span className="block text-sm text-zinc-500 sm:text-center dark:text-zinc-400 text-center">
        © 2025{" "}
        <a
          href="https://github.com/igor-ponticelli"
          target="_blank"
          className="hover:underline"
        >
          Igor
        </a>
        . Todos os direitos reservados.
      </span>
    </footer>
    </div>
  );
}

export default Footer;
