# Study Journal

Aplicação estática organizada em HTML, CSS e JavaScript, com funcionamento local,
login Google, sincronização privada no Firestore e importação somente-leitura do
Google Agenda.

## Configuração do Firebase

1. Crie um projeto no Firebase e registre um aplicativo Web.
2. Ative **Authentication > Google**.
3. Crie o banco **Cloud Firestore**.
4. Copie `js/firebase-config.example.js` para `js/firebase-config.js` e preencha
   os valores fornecidos pelo console. O arquivo já existe com campos vazios para
   que o app continue funcionando localmente até essa etapa.
5. Publique `firestore.rules`. As regras limitam cada usuário ao próprio caminho.
6. Em **Authentication > Settings > Authorized domains**, inclua o domínio usado
   para hospedar o projeto.

## Google Agenda

1. No projeto correspondente do Google Cloud, ative a **Google Calendar API**.
2. Configure a tela de consentimento OAuth e autorize o escopo
   `https://www.googleapis.com/auth/calendar.readonly`.
3. Crie ou renomeie duas agendas para **Provas** e **Trabalhos**.
4. Entre com o Google. Na primeira autorização, o app pede apenas leitura da
   agenda e importa automaticamente os dois calendários. O botão
   **Sincronizar Google Agenda** permite atualizar novamente quando necessário.

A integração apenas chama os endpoints de listagem. Eventos importados são
marcados como somente leitura: podem ser abertos no Google Agenda, mas não
editados nem excluídos pelo Study Journal.

## Semestres e resumos em PDF

- `js/semesters.js` lista os semestres (8º, 9º, 10º), as matérias e o ID da pasta
  de cada uma no Google Drive. O seletor de semestre fica na barra lateral.
- A aba **Matérias** mostra, por matéria e etapa (P1/P2), as anotações e os resumos
  **Completo** e **Enxuto** salvos nas pastas. Na matéria, a aba **Resumo** abre o PDF do Drive
  (alternando Completo/Enxuto), com botões para abrir no Drive e baixar.
- Classificação pelo nome do arquivo: `Enxuto` → enxuto; `Cola`/`Micro` → outros;
  demais `Resumo…` → completo; etapa por `P1`/`P2`. Exceções ficam em
  `RESUMO_OVERRIDES`. Versões antigas aparecem como "Outros".
- **Atualizar do Drive** lista as pastas com o escopo
  `https://www.googleapis.com/auth/drive.metadata.readonly` (só nomes e datas).
  Para funcionar: ative a **Google Drive API** no projeto e inclua esse escopo na
  tela de consentimento OAuth. Também encontra as anotações `1BIM - …`/`2BIM - …`
  das matérias novas. Até a primeira atualização vale o retrato em `DRIVE_SNAPSHOT`.

## Migração e conflitos

- O `localStorage` continua sendo o cache imediato e permite uso offline.
- No primeiro login, dados locais sem equivalente remoto são enviados.
- Quando já existe um valor remoto diferente, ele é usado como principal, mas a
  versão local é salva antes no Firestore e, quando houver espaço, também em uma
  cópia local com prefixo `msj7-migration-backup::`.
- Alterações feitas offline são marcadas como pendentes. Na reconexão, a versão
  remota anterior é copiada para backup antes de receber a mudança local.

## Estrutura

- `index.html`: marcação e conteúdo.
- `styles.css`: estilos de base.
- `theme-v2.css`: tema atual (menu lateral rosa, títulos em Kathen, marca em Muthiara).
- `js/semesters.js`: semestres, matérias, pastas do Drive e retrato dos resumos.
- `js/app.js`: comportamento existente do Study Journal.
- `js/cloud-sync.js`: Firebase, migração, sincronização e Google Agenda.
- `firestore.rules`: isolamento dos dados por usuário.

