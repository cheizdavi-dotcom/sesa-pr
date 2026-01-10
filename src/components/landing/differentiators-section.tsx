import { CheckCircle2 } from "lucide-react";

const differentiators = [
    "Conteúdo alinhado ao edital SESA-PR",
    "Foco na banca FAFIPA",
    "Linguagem clara e objetiva",
    "Organização por disciplina",
    "Acesso imediato após compra",
    "Atualizações incluídas",
    "Garantia de 7 dias",
    "Material 100% digital (PDF)",
    "Pode ser impresso",
];

export default function DifferentiatorsSection() {
    return (
        <section id="differentiators" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
                        Diferenciais das Nossas Apostilas
                    </h2>
                </div>
                <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {differentiators.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 rounded-lg border border-blue-200 bg-blue-50/50 p-4 shadow-sm">
                            <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0" />
                            <span className="text-gray-700 text-sm">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
