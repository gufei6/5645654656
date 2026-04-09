import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          <span className="text-foreground">3分钟，接入</span>{' '}
          <span className="text-primary relative">
            世界模型
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
              <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30"/>
            </svg>
          </span>
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          <span className="text-primary font-medium">官方渠道</span>
          <span className="mx-2">稳定高速不限量</span>
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base font-medium group">
            获取 API Key
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-primary text-primary hover:bg-primary/5 px-8 py-6 text-base font-medium">
            <Sparkles className="mr-2 w-4 h-4" />
            探索模型
          </Button>
        </div>
      </div>
    </section>
  );
}
