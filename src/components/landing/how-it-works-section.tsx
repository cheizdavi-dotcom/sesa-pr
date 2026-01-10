import { Card } from "@/components/ui/card";

const steps = [
    {
        number: 1,
        title: "Compra Confirmada",
        description: "Pagamento processado com segurança",
    },
    {
        number: 2,
        title: "Acesso Imediato ao PDF",
        description: "Receba o link de download no e-mail",
    },
    {
        number: 3,
        title: "Estudo Organizado por Disciplina",
        description: "Material estruturado para facilitar seu aprendizado",
    },
    {
        number: 4,
        title: "Revisões Facilitadas",
        description: "Organize seu tempo e revise com eficiência",
    },
    {
        number: 5,
        title: "Mais Segurança na Prova",
        description: "Chegue preparado e confiante no dia do concurso",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
                            Como funciona na prática
                        </h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Simples, rápido e sem complicação
                        </p>
                    </div>
                </div>
                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-blue-200" aria-hidden="true"></div>
                    <div className="grid gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-center gap-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg shrink-0 z-10">
                                    {step.number}
                                </div>
                                <Card className="w-full shadow-md border-gray-100 hover:shadow-lg transition-shadow">
                                    <div className="p-4">
                                        <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                                        <p className="text-gray-500">{step.description}</p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}