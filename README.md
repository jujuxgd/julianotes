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
- `styles.css`: visual original e pequenos estados de sincronização.
- `js/app.js`: comportamento existente do Study Journal.
- `js/cloud-sync.js`: Firebase, migração, sincronização e Google Agenda.
- `firestore.rules`: isolamento dos dados por usuário.

