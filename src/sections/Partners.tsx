const partners = ['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', 'Kimi', 'Doubao', 'GLM', 'Mistral'];

export default function Partners() {
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-muted-foreground text-sm mb-10">
          全球主流云厂商官方授权服务商，100+ 大模型一站接入
        </p>
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#FAF7F5] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#FAF7F5] to-transparent z-10" />
          <div className="flex animate-marquee">
            {duplicatedPartners.map((partner, index) => (
              <div key={`${partner}-${index}`} className="flex items-center gap-2 mx-8 text-muted-foreground hover:text-foreground transition-colors cursor-pointer flex-shrink-0">
                <span className="text-sm font-medium whitespace-nowrap">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
