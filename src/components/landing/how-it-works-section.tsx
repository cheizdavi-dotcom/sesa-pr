import { Zap, FileText, CalendarDays, Highlighter, BadgeCheck } from "lucide-react";

const steps = [
    {
        icon: <Zap className="h-8 w-8 text-primary" />,
        title: "Acesso Imediato",
        description: "Pagou, recebeu. Sem esperar compensação bancária lenta no PIX ou Cartão.",
    },
    {
        icon: <FileText className="h-8 w-8 text-primary" />,
        title: "PDF de Alta Performance",
        description: "Material digital completo, otimizado para leitura em tablets, celulares ou impressão.",
    },
    {
        icon: <CalendarDays className="h-8 w-8 text-primary" />,
        title: "Cronograma embutido",
        description: "O material já vem na ordem lógica que você deve seguir para bater o edital a tempo.",
    },
    {
        icon: <Highlighter className="h-8 w-8 text-primary" />,
        title: "Revisão Facilitada",
        description: "Grifos e pontos-chave destacados para você não esquecer o conteúdo na semana da prova.",
    },
    {
        icon: <BadgeCheck className="h-8 w-8 text-primary" />,
        title: "Confiança Total",
        description: "Chegue no dia da prova sabendo que estudou o que a FAFIPA realmente cobra.",
    },
];

export default function HowItWorksSection() {
    return (
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary">
                            Como Funciona a sua Jornada
                        </h2>
                    </div>
                </div>
                <div className="relative max-w-2xl mx-auto">
                    <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-border -z-10" aria-hidden="true"></div>
                    <div className="grid gap-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex items-start gap-6">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20 shrink-0">
                                    {step.icon}
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-bold">{step.title}</h3>
                                    <p className="text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
