import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from 'next/link';

const technicalProducts = [
    { name: "Técnico de Enfermagem", href: "https://pay.cakto.com.br/gtxngvj_726768" },
    { name: "Técnico de Laboratório", href: "https://pay.cakto.com.br/eks4ueb_726800" },
    { name: "Técnico de Segurança do Trabalho", href: "https://pay.cakto.com.br/q2z2uiv_726807" },
    { name: "Técnico em Contabilidade", href: "https://pay.cakto.com.br/32tiqc2_726814" },
    { name: "Técnico em Informática", href: "https://pay.cakto.com.br/o8t468g_726823" },
    { name: "Técnico em Radiologia", href: "https://pay.cakto.com.br/qsx8yo4_726849" },
    { name: "Inspetor de Saneamento", href: "https://pay.cakto.com.br/q4qn4oj_726854" },
    { name: "Técnico Administrativo", href: "https://pay.cakto.com.br/oqa24g2_726860" },
];

const higherLevelProducts = [
    { name: "Administrador", href: "https://pay.cakto.com.br/fxvz4k7_726886" },
    { name: "Analista de Sistemas", href: "https://pay.cakto.com.br/3bo2u2m_726896" },
    { name: "Arquiteto", href: "https://pay.cakto.com.br/3b3z4p9_726904" },
    { name: "Assistente Social", href: "https://pay.cakto.com.br/32djejm_726913" },
    { name: "Biólogo", href: "https://pay.cakto.com.br/vv39iao_726967" },
    { name: "Biomédico", href: "https://pay.cakto.com.br/xogtpwc_726974" },
    { name: "Contador", href: "https://pay.cakto.com.br/969x3f2_726985" },
    { name: "Enfermeiro", href: "https://pay.cakto.com.br/3ebp46w_726997" },
    { name: "Engenheiro Civil", href: "https://pay.cakto.com.br/3ebp46w_726997" },
    { name: "Farmacêutico", href: "https://pay.cakto.com.br/3ad54y3_727000" },
    { name: "Fisioterapeuta", href: "https://pay.cakto.com.br/3cdouqe_727004" },
    { name: "Fonoaudiólogo", href: "https://pay.cakto.com.br/trkbcv8_727018" },
    { name: "Médico Veterinário", href: "https://pay.cakto.com.br/z59kza7_727029" },
    { name: "Nutricionista", href: "https://pay.cakto.com.br/39s27gv_727040" },
    { name: "Psicólogo", href: "https://pay.cakto.com.br/gz39p42_727056" },
    { name: "Químico", href: "https://pay.cakto.com.br/37ai735_727085" },
    { name: "Terapeuta Ocupacional", href: "https://pay.cakto.com.br/7f9334m_727095" },
    { name: "Economista", href: "https://pay.cakto.com.br/7f9334m_727095" },
];

const ProductCard = ({ name, href }: { name: string, href: string }) => (
    <Card className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white rounded-xl overflow-hidden border-gray-200">
        <CardHeader className="bg-blue-600 text-white p-4">
            <CardTitle className="text-lg font-bold text-center">{name}</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 p-6 space-y-4 flex flex-col justify-between">
            <div>
                <div className="text-center">
                     <p className="text-4xl font-bold text-gray-900">
                        R$ 19,90
                     </p>
                </div>
                <ul className="space-y-2 text-sm text-gray-600 mt-4">
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-blue-600 shrink-0" /> 
                        <span>Acesso Imediato</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-blue-600 shrink-0" /> 
                        <span>Acesso Vitalício</span>
                    </li>
                    <li className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-blue-600 shrink-0" /> 
                        <span>Pode Imprimir</span>
                    </li>
                </ul>
            </div>
            <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-md font-bold mt-4">
                <Link href={href}>
                    COMEÇAR A ESTUDAR AGORA
                </Link>
            </Button>
        </CardContent>
    </Card>
);

export default function ProductsSection() {
    return (
        <section id="products" className="w-full py-12 md:py-16 bg-gray-50 text-gray-800">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Escolha a Apostila do Seu Cargo
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl mt-4">
                        Materiais completos, alinhados ao edital SESA-PR e focados na banca FAFIPA.
                    </p>
                </div>

                <div className="max-w-2xl mx-auto bg-yellow-50 border border-yellow-300 rounded-lg p-6 text-center mb-12">
                    <p className="text-gray-600">
                        Apostilas desse nível normalmente custam entre <span className="line-through">R$ 60 e R$ 120</span>
                    </p>
                    <p className="text-2xl font-bold text-blue-600 my-2">
                        Aqui, você paga apenas R$ 19,90
                    </p>
                    <p className="text-sm text-gray-500">
                        Sem mensalidade. Acesso vitalício. Garantia de 7 dias.
                    </p>
                </div>

                <div className="space-y-16">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8 text-left">
                            Nível Técnico
                        </h3>
                        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {technicalProducts.map((product) => (
                                <ProductCard key={product.name} name={product.name} href={product.href} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-8 text-left">
                            Nível Superior
                        </h3>
                        <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {higherLevelProducts.map((product) => (
                                <ProductCard key={product.name} name={product.name} href={product.href} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
