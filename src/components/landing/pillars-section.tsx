import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-gray-800">
              Por que estudar com o Aprova Mais?
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A maioria das apostilas apenas reúne conteúdo. As nossas são organizadas com foco no que a banca FAFIPA realmente cobra.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-12 mt-12">
          {pillars.map((pillar) => (
            <Card key={pillar.title} className="flex flex-col items-center text-center gap-4 p-6 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-gray-100 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                {pillar.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-gray-800">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}