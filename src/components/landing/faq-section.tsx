import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
    {
        question: "Como recebo o material após a compra?",
        answer: "O acesso ao material em PDF é liberado imediatamente após a confirmação do pagamento. Você receberá um e-mail com o link para download."
    },
    {
        question: "Posso imprimir as apostilas?",
        answer: "Sim! O material é seu para sempre. Você pode imprimir todo o conteúdo ou apenas as partes que preferir para estudar onde e como quiser."
    },
    {
        question: "O material é atualizado conforme o edital?",
        answer: "Sim. Nossas apostilas são 100% alinhadas ao edital publicado para o concurso SESA-PR 2026. Qualquer retificação no conteúdo programático será atualizada."
    },
    {
        question: "Para qual banca serve?",
        answer: "Todo o conteúdo é focado na FAFIPA, a banca organizadora do concurso. Estudamos o padrão de questões e o perfil de cobrança para direcionar seu estudo."
    },
    {
        question: "Existe risco em comprar?",
        answer: "Risco zero. Você tem uma garantia incondicional de 7 dias. Se por qualquer motivo não gostar do material, basta pedir o reembolso e devolvemos 100% do seu dinheiro."
    },
    {
        question: "Preciso de assinatura ou renovação?",
        answer: "Não. O pagamento é único e o acesso é vitalício. Sem mensalidades, assinaturas ou taxas de renovação."
    }
];

export default function FaqSection() {
    return (
        <section id="faq" className="w-full py-12 md:py-16 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
                        Perguntas Frequentes
                    </h2>
                </div>
                <div className="mx-auto max-w-3xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white shadow-sm rounded-lg mb-3 px-6 border-gray-200">
                                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
