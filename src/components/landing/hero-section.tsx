import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge variant="outline" className="border-primary/30 bg-primary/10 py-1 px-3 text-sm text-primary">🚨 EDITAL PUBLICADO: SESA-PR 2026</Badge>
          <div className="space-y-3">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Concurso SESA-PR 2026: Garanta sua Vaga
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Prepare-se com o material 100% focado no "DNA" da banca FAFIPA. Filtramos o edital para você estudar apenas o que realmente cai na prova.
            </p>
          </div>
          <div className="space-y-2">
            <Button asChild size="lg" className="bg-accent text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent/90">
              <Link href="#products">
                QUERO MINHA APOSTILA AGORA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-xs text-muted-foreground">
              A prova é em março de 2026. Quem começa agora estuda com estratégia; quem espera, estuda sob pressão.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
