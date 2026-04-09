import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown, Globe } from 'lucide-react';

const navLinks = [
  { label: 'Vibe Coding', href: '#vibe-coding' },
  { label: '开发文档', href: '#docs' },
  { label: '博客', href: '#blog' },
  { label: '模型', href: '#models' },
  { label: '价格', href: '#pricing' },
  { label: '中国区', href: '#china' },
];

export default function Navbar() {
  const [language, setLanguage] = useState('简体中文');

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#FAF7F5]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-xl font-semibold text-foreground">
                Oc<span className="text-primary">Router</span>
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-black/5">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground hover:text-foreground">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{language}</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('简体中文')}>简体中文</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('English')}>English</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">登录</Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">注册</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
