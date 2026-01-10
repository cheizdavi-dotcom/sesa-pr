import { Card } from "@/components/ui/card";

const technicalRoles = [
    { name: "Técnico de Enfermagem" },
    { name: "Técnico de Laboratório" },
    { name: "Técnico de Segurança do Trabalho" },
];

const higherLevelRoles = "Enfermeiro, Farmacêutico, Psicólogo, Assistente Social, Nutricionista, Fisioterapeuta, Biomédico, Biólogo, Administrador, Engenheiros, Médicos e outros cargos.";

export default function SalariesSection() {
    return (
        <section id="salaries" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
            <div className="container px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl font-headline text-gray-800 mb-12">
                    Salários conforme edital vigente
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <Card className="p-8 bg-white shadow-lg rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Nível Técnico</h3>
                        <div className="space-y-4">
                            {technicalRoles.map((role) => (
                                <div key={role.name}>
                                    <p className="font-medium text-gray-800">{role.name}</p>
                                    <p className="text-blue-600 font-semibold">Conforme edital</p>
                                </div>
                            ))}
                        </div>
                    </Card>
                    <Card className="p-8 bg-white shadow-lg rounded-xl">
                        <h3 className="text-xl font-bold text-gray-900 mb-6">Nível Superior</h3>
                        <div className="space-y-4">
                            <p className="text-gray-700">{higherLevelRoles}</p>
                            <p className="text-blue-600 font-bold text-lg">Valores conforme edital</p>
                        </div>
                    </Card>
                </div>
                <div className="max-w-5xl mx-auto mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg text-center">
                    <p className="text-sm text-gray-700">
                        <strong>Nota:</strong> Todos os salários são conforme edital vigente. As apostilas abordam o conteúdo exigido pela banca FAFIPA para cada cargo.
                    </p>
                </div>
            </div>
        </section>
    );
}
