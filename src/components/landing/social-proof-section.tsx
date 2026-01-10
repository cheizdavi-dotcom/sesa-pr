import { Card, CardContent } from "@/components/ui/card";
import { Check, ShieldCheck } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function SocialProofSection() {
    const testimonialAvatar = PlaceHolderImages.find(p => p.id === 'testimonial-avatar');

    return (
        <section id="social-proof" className="w-full py-12 md:py-24 lg:py-32 bg-card">
            <div className="container grid items-center justify-center gap-10 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-16">
                <div className="space-y-6 text-left">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline text-primary">Ainda em dúvida? Veja o que te espera.</h2>
                    <ul className="grid gap-2 text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Material 100% digital</li>
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Pode ser impresso</li>
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Linguagem objetiva</li>
                        <li className="flex items-center gap-2"><Check className="h-5 w-5 text-primary" /> Garantia de 7 dias</li>
                    </ul>
                    <Card className="bg-background">
                        <CardContent className="p-6">
                            <blockquote className="text-lg font-semibold leading-snug">
                            "O que eu mais gostei foi que o material não perde tempo com teoria que nunca cai. Fui direto no que a FAFIPA cobrou nos últimos concursos e meu rendimento subiu 40%."
                            </blockquote>
                            <div className="mt-4 flex items-center">
                                <Avatar>
                                    {testimonialAvatar && <AvatarImage src={testimonialAvatar.imageUrl} alt={testimonialAvatar.description} data-ai-hint={testimonialAvatar.imageHint} />}
                                    <AvatarFallback>J</AvatarFallback>
                                </Avatar>
                                <div className="ml-4 text-left">
                                    <p className="font-semibold">Joana Silva</p>
                                    <p className="text-sm text-muted-foreground">Aprovada em 2022</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-primary text-primary-foreground p-8 lg:p-12 shadow-2xl">
                    <ShieldCheck className="h-16 w-16" />
                    <h3 className="text-2xl font-bold font-headline">Garantia Risco Zero</h3>
                    <p className="max-w-md">
                        Se em 7 dias você sentir que o material não é para você, devolvemos cada centavo. Sem burocracia.
                    </p>
                </div>
            </div>
        </section>
    );
}
