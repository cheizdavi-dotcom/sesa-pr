export default function Footer() {
    return (
        <footer className="w-full bg-[#1e293b] text-white">
            <div className="container flex flex-col items-center justify-center py-10 text-center">
                <h3 className="text-xl font-bold font-headline mb-2">Aprova Mais Concursos</h3>
                <p className="text-sm text-gray-400 mb-4">
                    Material de estudo para concursos públicos desde 2020.
                </p>
                <p className="text-xs text-gray-500">
                    © {new Date().getFullYear()} Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
