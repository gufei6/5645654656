import { Github, Twitter, MessageCircle } from 'lucide-react';

const footerLinks = {
  产品: ['模型', '价格', '快速开始', 'Vibe Coding', '企业服务', '合作推广'],
  热门模型: ['GPT-5.4', 'Claude Opus 4.6', 'Gemini 3.1 Pro', 'Claude Sonnet 4.6', 'DeepSeek V3.2', 'GPT-5.3 Codex'],
  模型厂商: ['OpenAI', 'Anthropic', 'Google', 'Qwen', 'Doubao', 'MiniMax', 'Z.ai (GLM)'],
  资源: ['文档', '博客', 'llms.txt', 'OcRouter vs OpenRouter', '模型验真', '服务条款', '隐私政策'],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/50 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-semibold">Oc<span className="text-primary">Router</span></span>
            </div>
            <div className="text-xs text-muted-foreground space-y-1">
              <p>ocrouter.ai</p>
              <p className="font-mono text-primary">--version</p>
              <p className="font-mono">v1.0.27</p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-muted-foreground text-center md:text-left">
              <p>© 2026 NICE TALK PTE. LTD. 保留所有权利。</p>
              <p className="mt-1">Last updated: <span className="text-foreground">Feb 24, 2026</span></p>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <span className="text-emerald-600 font-medium">all systems operational</span>
              <span className="text-muted-foreground">|</span>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">llms.txt</a>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="p-2 text-muted-foreground hover:text-foreground hover:bg-black/5 rounded-lg"><Github className="w-4 h-4" /></a>
              <a href="#" className="p-2 text-muted-foreground hover:text-foreground hover:bg-black/5 rounded-lg"><Twitter className="w-4 h-4" /></a>
              <a href="#" className="p-2 text-muted-foreground hover:text-foreground hover:bg-black/5 rounded-lg"><MessageCircle className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
