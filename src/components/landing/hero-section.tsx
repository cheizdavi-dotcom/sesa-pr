import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge className="bg-red-600 text-white font-bold animate-pulse py-1 px-3 text-sm">
            <AlertCircle className="mr-2 h-4 w-4" /> EDITAL PUBLICADO
          </Badge>
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
              Concurso SESA-PR 2026: 641 Vagas Disponíveis
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl font-semibold">
              Prepare-se com o material 100% alinhado ao edital e focado no padrão de cobrança da banca FAFIPA.
            </p>
            <p className="mx-auto max-w-[700px] text-muted-foreground/80 md:text-lg">
                A Secretaria de Estado da Saúde do Paraná (SESA-PR) abriu 641 vagas para diversos cargos de níveis Técnico e Superior. A prova está prevista para março de 2026.
                <br />
                Comece agora e estude com estratégia antes que a pressão do tempo aumente.
            </p>
          </div>
          <div className="space-y-2">
            <Button asChild size="lg" className="bg-accent text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-accent/90 flex flex-col h-auto py-3">
              <Link href="#products">
                <span className="text-lg font-bold">QUERO MINHA APOSTILA AGORA</span>
                <span className="text-xs font-normal">Acesso imediato após a compra</span>
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
