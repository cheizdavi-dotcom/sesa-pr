import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const contestData = [
    { label: "Órgão", value: "Secretaria de Estado da Saúde do Paraná (SESA-PR)" },
    { label: "Situação", value: "Edital Publicado (Vagas Reais)" },
    { label: "Banca", value: "FAFIPA (Conhecida pelas pegadinhas técnicas)" },
    { label: "Vagas", value: "641 (Níveis Técnico e Superior)" },
    { label: "Data da Prova", value: "Março de 2026 (Cronômetro Ligado)" },
];

export default function ContestInfoSection() {
    return (
        <section id="contest-info" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className="container px-4 md:px-6">
                <Card className="max-w-3xl mx-auto shadow-lg border-2 border-gray-100 bg-gray-50">
                    <CardHeader>
                        <CardTitle className="text-center text-2xl md:text-3xl font-headline text-gray-800">Dados do Combate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-4 text-sm md:text-base">
                            {contestData.map((item, index) => (
                                <li key={item.label}>
                                    <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-1 sm:gap-4">
                                        <span className="font-semibold text-gray-500">{item.label}</span>
                                        <p className="sm:text-right font-medium text-gray-800">{item.value}</p>
                                    </div>
                                    {index < contestData.length - 1 && <Separator className="mt-4 bg-gray-200" />}
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}