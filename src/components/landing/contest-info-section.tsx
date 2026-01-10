import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

const contestData = [
    { label: "Órgão", value: "Secretaria de Estado da Saúde do Paraná (SESA-PR)" },
    { label: "Situação", value: "Edital Publicado", isHighlighted: true },
    { label: "Banca Organizadora", value: "FAFIPA" },
    { label: "Total de Vagas", value: "641" },
    { label: "Níveis", value: "Técnico e Superior" },
    { label: "Prova Prevista", value: "Março de 2026" },
];

export default function ContestInfoSection() {
    return (
        <section id="contest-info" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="h-8 w-8 text-primary" />
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
                            Sobre o Concurso
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {contestData.map((item) => (
                            <Card key={item.label} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                                <CardContent className="p-6">
                                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                                    <p className={`text-lg font-bold ${item.isHighlighted ? 'text-blue-600' : 'text-gray-900'}`}>{item.value}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}