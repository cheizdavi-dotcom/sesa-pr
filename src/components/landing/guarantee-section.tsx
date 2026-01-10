import { ShieldCheck } from "lucide-react";

export default function GuaranteeSection() {
    return (
        <section id="guarantee" className="w-full py-12 md:py-20 lg:py-24 bg-blue-600 text-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <ShieldCheck className="h-16 w-16" />
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
                        Garantia Incondicional de 7 Dias
                    </h2>
                    <div className="max-w-xl text-white/90 md:text-lg">
                        <p>Se não gostar, devolvemos 100% do seu dinheiro. Sem perguntas.</p>
                        <p>Sua satisfação é a nossa prioridade.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
