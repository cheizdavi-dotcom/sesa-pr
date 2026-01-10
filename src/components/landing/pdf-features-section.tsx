import { Card } from "@/components/ui/card";
import { FileText, Printer, Smartphone, Search } from "lucide-react";

const features = [
    {
        icon: <Printer className="h-6 w-6 text-blue-600" />,
        title: "Impressão",
        description: "Imprima e estude do jeito que preferir",
    },
    {
        icon: <Smartphone className="h-6 w-6 text-blue-600" />,
        title: "Estudo no celular",
        description: "Leve seu material para qualquer lugar",
    },
    {
        icon: <Search className="h-6 w-6 text-blue-600" />,
        title: "Revisão rápida",
        description: "Busque tópicos específicos em segundos",
    },
];

export default function PdfFeaturesSection() {
    return (
        <section id="pdf-features" className="w-full py-12 md:py-16 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="p-4 bg-blue-100 rounded-full inline-flex mb-4">
                        <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
                        Não é só um PDF. É um material organizado para passar.
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        O formato é digital para facilitar sua vida:
                    </p>
                </div>
                <div className="mx-auto grid max-w-4xl gap-8 sm:grid-cols-1 md:grid-cols-3">
                    {features.map((feature) => (
                        <Card key={feature.title} className="bg-white p-6 shadow-md rounded-lg flex flex-col items-center text-center border-gray-200 hover:shadow-lg transition-shadow">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                            <p className="text-gray-500">{feature.description}</p>
                        </Card>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <p className="text-lg font-semibold text-blue-600">
                        O valor está na organização, não no formato.
                    </p>
                </div>
            </div>
        </section>
    );
}
