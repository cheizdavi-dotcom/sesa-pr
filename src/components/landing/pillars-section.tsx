import { Card } from '@/components/ui/card';
import { Target, TrendingUp, Award } from 'lucide-react';

const pillars = [
  {
    icon: <Target className="h-8 w-8 text-blue-600" />,
    title: 'Conteúdo Priorizado',
    description: 'Menos volume, mais acerto. Focamos no que realmente importa para sua aprovação.',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-blue-600" />,
    title: 'Organização Inteligente',
    description: 'Material estruturado para revisão eficiente, não apenas leitura linear.',
  },
  {
    icon: <Award className="h-8 w-8 text-blue-600" />,
    title: 'Direcionamento por Cargo',
    description: 'Não é material genérico. Cada apostila é específica para seu cargo.',
  },
];

export default function PillarsSection() {
  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
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
            <Card key={pillar.title} className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white text-gray-700 shadow-md border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100/50">
                {pillar.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-900">{pillar.title}</h3>
                <p className="text-gray-500">{pillar.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
