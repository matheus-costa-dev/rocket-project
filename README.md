# 🚀 Projeto Foguete – Incubadora de Inovação Social de Maricá
Uma aplicação web de alta performance desenvolvida para complementar um projeto de robótica educacional e sustentabilidade focado no lançamento e monitoramento de foguetes. O sistema atua como uma interface moderna de telemetria e divulgação científica, unindo hardware (Arduino) e uma experiência digital rica e interativa.

## 🛠️ Stack Tecnológica (Web Application)
React: Framework base utilizado para a construção de uma interface de usuário componentizada, reativa e modular.

Vite: Ferramenta de build de última geração que substituiu o Create React App, garantindo inicialização instantânea do servidor de desenvolvimento e builds otimizados para produção na Vercel.

GSAP (GreenSock Animation Platform) + Framer Motion: Utilizados na criação de uma experiência cinematográfica na web. A aplicação conta com animações fluidas de ScrollTrigger, transições de tela dinâmicas no carregamento e efeitos imersivos que guiam a navegação do usuário.

## 💡 Funcionalidades Principais Destacadas
1. Experiência de Telemetria e Clima em Tempo Real
A aplicação consome serviços de dados para exibir métricas climáticas instantâneas (temperatura, sensação térmica, umidade e vento) através de uma interface flutuante e intuitiva, simulando as condições necessárias para uma janela de lançamento de foguetes segura.

2. Interface Imersiva com Storytelling Visual
Uso estratégico de vídeo em background com efeitos de fade e transições geométricas para ilustrar o processo de ignição e engenharia aeroespacial.

Seções dinâmicas com desmembramento técnico em 3D/vetorial de componentes de foguetes, permitindo que o usuário visualize a engenharia reversa e os materiais envolvidos (como estruturas em Arduino, sensores e módulos de comunicação).

3. Portal de Hub da Incubadora
Espaço dedicado para a visualização de projetos, parcerias locais, dados institucionais da Incubadora Maricá e links diretos para a comunidade e redes de desenvolvimento.

## 📐 Arquitetura do Ecossistema
O projeto funciona de forma híbrida, dividindo-se entre engenharia de hardware e software:

```Plaintext
rocket/
├── arduino-code/       # Firmware em C++ responsável pelo controle físico do foguete (ignição, sensores e telemetria serial).
└── web-rocket/         # Aplicação Frontend SPA construída com React + Vite + GSAP e hospedada na Vercel.
```
## ⚙️ Diferenciais Técnicos Implementados
Performance Otimizada: Graças ao bundler do Vite, o carregamento de ativos pesados (como mídias e bibliotecas de animação complexas) é feito de forma assíncrona e otimizada, mantendo ótimas pontuações de Core Web Vitals.

Responsividade Estrita: Interface adaptada para diferentes formatos de tela, mantendo a integridade visual das animações e dos painéis de dados tanto em desktop quanto em dispositivos móveis.

Abordagem Clean Code: Estrutura modular de componentes em React facilitando a manutenção e a futura implementação de comunicação bidirecional via WebSockets com o hardware do foguete.
