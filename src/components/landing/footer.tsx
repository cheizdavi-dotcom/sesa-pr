export default function Footer() {
    return (
        <footer className="w-full border-t bg-card">
            <div className="container flex items-center justify-center py-6">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} SESA-PR Accelerator. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}
