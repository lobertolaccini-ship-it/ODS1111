# Plataforma de Companhia Intergeracional (ODS 3)

O objetivo é criar uma plataforma que conecta estudantes universitários a idosos ativos para atividades diárias, caminhadas e conversas, promovendo a saúde mental e combatendo o isolamento social (alinhado ao ODS 3 da ONU). A plataforma terá dois níveis de acesso (Idosos que oferecem a oportunidade/solicitam e Estudantes que aceitam/realizam o serviço). O tech stack definido é **Next.js**, **Supabase** (banco de dados e autenticação) e deploy na **Vercel**. O versionamento será feito com **GitHub Desktop**.

## User Review Required

> [!IMPORTANT]
> O projeto base já está configurado no diretório local. Preciso que você valide se a divisão de tarefas sugerida abaixo faz sentido para você e sua dupla. Vocês preferem dividir por **Front-end / Back-end** ou por **Funcionalidades (Ex: Portal do Idoso vs Portal do Estudante)**? A sugestão atual é por funcionalidades (Módulos).

## Open Questions

> [!TIP]
> 1. Vocês já têm um nome oficial para o projeto? (Estou chamando provisoriamente de `elo-geracional`).
> 2. Como pretendem validar a segurança dos idosos (ex: checagem de antecedentes dos estudantes)? Isso impacta o fluxo de cadastro.
> 3. O modelo será de voluntariado, troca de serviços por moradia ou remunerado?

## Divisão de Tarefas para a Dupla

Abaixo, o plano de execução dividido para que ambos possam trabalhar paralelamente minimizando conflitos de merge no GitHub Desktop.

---

### Dev 1: Módulo do Idoso (Ofertante) & Infraestrutura Base

Responsável por configurar a base do projeto, o banco de dados no Supabase e a experiência de quem solicita o serviço.

**Tarefas Principais:**
1. **Infraestrutura e Supabase:**
   - Criar o projeto no [Supabase](https://supabase.com/).
   - Configurar o banco de dados (Tabelas: `profiles`, `activities`).
   - Configurar Autenticação (Sign Up / Sign In).
   - Gerar as chaves da API e preencher o `.env.local`.
2. **Frontend - Portal do Idoso:**
   - Criar a página de Dashboard do Idoso (`/dashboard/senior`).
   - Formulário para criar uma nova atividade ("Oferecer passeio", "Conversa de 1h").
   - Lista de estudantes interessados na atividade.
3. **Design System Base:**
   - Definir o `index.css` principal com paleta de cores moderna (foco em acessibilidade para terceira idade, alto contraste, fontes grandes).

### Dev 2: Módulo do Estudante (Prestador) & Deploy

Responsável pela experiência de quem procura as oportunidades e pela configuração de deploy na Vercel.

**Tarefas Principais:**
1. **Frontend - Portal do Estudante:**
   - Criar a página de Dashboard do Estudante (`/dashboard/student`).
   - Feed de atividades disponíveis (criadas pelos idosos).
   - Funcionalidade para "Aceitar" ou "Demonstrar Interesse" em uma atividade.
2. **Landing Page:**
   - Desenvolver a página inicial (`/`) com proposta de valor, foco em design premium, animações sutis e explicação do impacto social (ODS 3).
3. **Deploy e Versionamento:**
   - Conectar o repositório do GitHub à [Vercel](https://vercel.com/) para Deploy Contínuo.
   - Configurar as variáveis de ambiente (do arquivo `.env`) lá no painel da Vercel.

---

## Proposed Changes

Abaixo estão os arquivos e estruturas iniciais que criaremos:

### Configuração Inicial e Infraestrutura

#### [NEW] .env.local
Modelo para as chaves do Supabase.

#### [NEW] src/lib/supabaseClient.ts
Configuração do cliente do Supabase para o frontend.

### Estrutura do Banco de Dados (Supabase SQL)

#### [NEW] database_schema.sql
Script SQL com as tabelas necessárias (`users`, `profiles`, `activities`, `matches`), e regras de RLS (Row Level Security).

### Páginas do Next.js (App Router)

#### [NEW] src/app/page.tsx
Landing page com visual premium, voltada para atração de usuários e prêmios da ONU.

#### [NEW] src/app/login/page.tsx
Página de autenticação (Login e Cadastro).

#### [NEW] src/app/dashboard/senior/page.tsx
Dashboard de quem oferece o serviço (Idoso).

#### [NEW] src/app/dashboard/student/page.tsx
Dashboard de quem aceita o serviço (Estudante).

## Verification Plan

### Testes Manuais
- Cada um da dupla deve rodar `npm run dev` localmente.
- **Fluxo 1 (Dev 1):** Cadastrar um usuário "Idoso", criar uma oportunidade de atividade e verificar se salva no Supabase.
- **Fluxo 2 (Dev 2):** Cadastrar um usuário "Estudante", ver a oportunidade no feed e clicar em aceitar.
- **Vercel:** Fazer um commit via GitHub Desktop, dar push e observar se o build passa na Vercel e o link online é atualizado.
