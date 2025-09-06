🚀 Projeto Rocket – Robótica e Lançamento de Foguetes

Este repositório contém o desenvolvimento de um projeto de robótica aplicada a lançamentos de foguetes. Ele é dividido em duas partes principais:

Código para o microcontrolador feito em C++ (Arduino)

Aplicação web (React) para interface e monitoramento

📂 Estrutura do Repositório
rocket/
 ├── arduino-code/     # Código do Arduino responsável pelo controle do foguete
 │    ├── code_skectch/
 |    |    ├── code_skectch
 │    └── ...
 └── web-rocket/       # Aplicação web em React hospedada na Vercel
      ├── package.json
      ├── src/
      └── public/

⚙️ Arduino – Controle do Foguete (arduino-code/)

A pasta arduino-code contém os arquivos que devem ser carregados no microcontrolador (Arduino).
Funções principais (exemplo):

Acionamento do sistema de ignição.

Leitura de sensores (aceleração, pressão, altitude etc.).

Envio de dados via comunicação serial para monitoramento.

🌐 Web – Interface em React (web-rocket/)

A pasta web-rocket contém a aplicação em React responsável pela interface visual do projeto.
Funções principais (exemplo):

Exibir métricas e telemetria em tempo real.

Interface de controle remoto.

Dashboard para análise de dados do voo.

Deploy

O projeto está configurado para ser hospedado na Vercel
:

Root Directory: web-rocket

Build Command: npm run build

Output Directory: build

🚀 Como Executar Localmente
Arduino

Abra o Arduino IDE.

Carregue o código da pasta arduino-code.

Conecte o Arduino e faça o upload.

Web

Acesse a pasta web-rocket:

cd web-rocket


Instale as dependências:

npm install


Execute o servidor de desenvolvimento:

npm start


Acesse em http://localhost:3000
.

📌 Próximos Passos

 Implementar comunicação entre Arduino e aplicação web.

 Criar dashboard com gráficos de telemetria.

 Testes práticos de lançamento.

📜 Licença

Este projeto é distribuído sob a licença MIT. Sinta-se à vontade para usar e modificar.