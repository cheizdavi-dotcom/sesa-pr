import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Focus, BookCopy, UserCheck } from 'lucide-react';

const pillars = [
  {
    icon: <Focus className="h-8 w-8 text-primary" />,
    title: 'Conteúdo Priorizado',
    description: 'Foco no que Pontua. Menos volume morto, mais assertividade. Eliminamos as "encheadas de linguiça" dos cursinhos tradicionais.',
  },
  {
    icon: <BookCopy className="h-8 w-8 text-primary" />,
    title: 'Organização Inteligente',
    description: 'Estudo em Ciclos. Material estruturado para revisões rápidas e memorização de longo prazo, não apenas leitura passiva.',
  },
  {
    icon: <UserCheck className="h-8 w-8 text-primary" />,
    title: 'Direcionamento por Cargo',
    description: 'Zero Generalismo. Cada apostila é construída rigorosamente sobre as competências específicas do seu cargo na SESA-PR.',
  },
];

export default function PillarsSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
              Por que estudar com o Protocolo Aprova Mais?
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 mt-12">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="flex flex-col items-center text-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                {pillar.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}