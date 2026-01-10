import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, XCircle } from "lucide-react";

const forYou = [
    "Vai prestar o concurso SESA-PR",
    "Quer estudar com foco na banca FAFIPA",
    "Prefere material direto e organizado",
    "Busca economia sem abrir mão de qualidade",
];

const notForYou = [
    "Procura videoaulas longas",
    "Quer promessas de aprovação garantida",
    "Não pretende estudar de verdade",
    "Busca material para outros concursos",
];

export default function MaterialForYouSection() {
    return (
        <section id="material-for-you" className="w-full py-12 md:py-20 lg:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
                        Este material é para você?
                    </h2>
                </div>
                <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-2">
                    <Card className="border-green-200 bg-green-50/50 shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-green-800">
                                <CheckCircle2 className="h-6 w-6" />
                                Este material é para você se:
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-gray-700">
                                {forYou.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="border-red-200 bg-red-50/50 shadow-md">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-lg font-semibold text-red-800">
                                <XCircle className="h-6 w-6" />
                                Não é para você se:
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-3 text-gray-700">
                                {notForYou.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <XCircle className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
