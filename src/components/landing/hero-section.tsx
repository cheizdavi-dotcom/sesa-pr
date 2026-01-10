import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { AlertCircle } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6 text-center">
          <Badge className="bg-red-600 text-white font-bold animate-pulse py-1 px-3 text-sm">
            <AlertCircle className="mr-2 h-4 w-4" /> EDITAL PUBLICADO
          </Badge>
          <div className="space-y-4">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary">
              Concurso SESA-PR 2026: 641 Vagas Disponíveis
            </h1>
            <p className="mx-auto max-w-[700px] text-primary md:text-xl font-semibold">
              Prepare-se com material alinhado ao edital e focado na banca FAFIPA
            </p>
            <p className="mx-auto max-w-[700px] text-primary md:text-lg">
                A Secretaria de Estado da Saúde do Paraná (SESA-PR) abriu 641 vagas para diversos cargos de níveis Técnico e Superior. Prova prevista para março de 2026.
                <br />
                <span className="font-bold">Comece agora e estude com calma, antes da pressão do edital apertar!</span>
            </p>
          </div>
          <div className="space-y-2">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg transition-transform duration-300 hover:scale-105 flex flex-col h-auto py-3">
              <Link href="#products">
                <span className="text-lg font-bold">QUERO MINHA APOSTILA AGORA &gt;</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
