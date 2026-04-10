import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Copy, Check } from 'lucide-react';

const codeExamples = {
  openai: `from openai import OpenAI

client = OpenAI(
    base_url="http://217.77.14.179:8080/v1",
    api_key="<OCROUTER_API_KEY>"
)

response = client.chat.completions.create(
    model="openai/gpt-5.2",
    messages=[{"role": "user", "content": "Hello!"}]
)`,
  anthropic: `import anthropic

client = anthropic.Anthropic(
    base_url="http://217.77.14.179:8080/v1",
    api_key="<OCROUTER_API_KEY>"
)

message = client.messages.create(
    model="anthropic/claude-opus-4.6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hello!"}]
)`,
  gemini: `import google.generativeai as genai

genai.configure(
    base_url="http://217.77.14.179:8080/v1",
    api_key="<OCROUTER_API_KEY>"
)

model = genai.GenerativeModel('gemini-3.1-pro')
response = model.generate_content("Hello!")`,
};

type Provider = 'openai' | 'anthropic' | 'gemini';

export default function CodeExample() {
  const [activeTab, setActiveTab] = useState<Provider>('openai');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeExamples[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-3xl mx-auto">
        <div className="bg-[#1E1E1E] rounded-xl overflow-hidden shadow-lg">
          <div className="flex items-center justify-between px-4 py-3 bg-[#2D2D2D] border-b border-[#3D3D3D]">
            <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as Provider)}>
              <TabsList className="bg-transparent h-8 p-0 gap-1">
                <TabsTrigger value="openai" className="data-[state=active]:bg-[#3D3D3D] data-[state=active]:text-white text-[#8B949E] text-xs px-3 py-1.5 rounded-md">OpenAI</TabsTrigger>
                <TabsTrigger value="anthropic" className="data-[state=active]:bg-[#3D3D3D] data-[state=active]:text-white text-[#8B949E] text-xs px-3 py-1.5 rounded-md">Anthropic</TabsTrigger>
                <TabsTrigger value="gemini" className="data-[state=active]:bg-[#3D3D3D] data-[state=active]:text-white text-[#8B949E] text-xs px-3 py-1.5 rounded-md">Gemini</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="ghost" size="sm" onClick={handleCopy} className="text-[#8B949E] hover:text-white hover:bg-[#3D3D3D] h-8 px-2">
              {copied ? <Check className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
              <span className="text-xs">Copy</span>
            </Button>
          </div>
          <div className="p-4 overflow-x-auto">
            <pre className="code-block text-sm leading-relaxed text-[#E6EDF3]">
              {codeExamples[activeTab]}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
