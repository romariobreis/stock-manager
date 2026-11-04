# Manager Stock

Aplicação SPA para gerenciamento de itens em estoque, com dashboard, listagem, visualização detalhada, cadastro, edição e exclusão de itens. Os dados devem ser mantidos no armazenamento local do navegador.

## 📋 Requisitos Funcionais (RF)

* **RF01 - Dashboard**: Exibir a quantidade de tipos de itens diferentes cadastrados. Cada item cadastrado conta como um tipo, independentemente da quantidade em estoque.
* **RF02 - Dashboard**: Exibir a quantidade total de unidades em estoque, somando as quantidades de todos os itens.
* **RF03 - Dashboard**: Exibir a quantidade de itens adicionados nos últimos 10 dias.
* **RF04 - Dashboard**: Listar os itens adicionados nos últimos 10 dias.
* **RF05 - Dashboard**: Exibir a quantidade de itens com menos de 10 unidades em estoque.
* **RF06 - Dashboard**: Listar os itens com menos de 10 unidades em estoque.
* **RF07 - Listagem de itens**: Exibir todos os itens cadastrados em uma tabela com informações resumidas.
* **RF08 - Ações na listagem**: Disponibilizar ações para visualizar os detalhes, atualizar e excluir cada item.
* **RF09 - Detalhes do item**: Exibir todas as propriedades do item selecionado e disponibilizar ações para atualizar ou excluir esse item.
* **RF10 - Cadastro de item**: Disponibilizar um formulário para criar itens com, no mínimo, nome, quantidade, preço, categoria e descrição.
* **RF11 - Atualização de item**: Disponibilizar uma tela para atualizar os dados do item selecionado. O formulário pode seguir o mesmo formato do cadastro.
* **RF12 - Navegação**: Permitir navegar entre as telas sem recarregar a página.
* **RF13 - Persistência**: Salvar os dados dos itens no `localStorage` do navegador para que permaneçam disponíveis após atualizar a página ou fechar e reabrir a aplicação.

## 💼 Regras de Negócio (RN)

* **RN01 - Tipos de itens**: A quantidade de itens diferentes no dashboard corresponde ao número de registros de itens, e não à soma das unidades. Por exemplo, 1 mesa e 3 cadeiras correspondem a 2 tipos de itens.
* **RN02 - Total de unidades**: A quantidade total em estoque corresponde à soma da quantidade de cada item. Por exemplo, 1 mesa e 3 cadeiras correspondem a 4 unidades.
* **RN03 - Itens recentes**: Um item é considerado recente quando foi adicionado nos últimos 10 dias. O total e a lista do dashboard devem representar esse mesmo conjunto de itens.
* **RN04 - Estoque baixo**: Um item é considerado com estoque baixo quando sua quantidade for estritamente menor que 10 unidades.
* **RN05 - Dados do item**: Cada item deve contemplar, no mínimo, nome, quantidade, preço, categoria e descrição.
* **RN06 - Ações por item**: Visualizar, atualizar ou excluir deve operar sobre o item selecionado.
* **RN07 - Consistência dos dados**: As informações apresentadas nas telas e nos indicadores do dashboard devem refletir os itens cadastrados e suas alterações ou exclusões.

## 🛠️ Requisitos Não Funcionais (RNF)

* **RNF01 - Tecnologias obrigatórias**: A aplicação deve ser desenvolvida com React e React Router.
* **RNF02 - Ferramenta de desenvolvimento**: O projeto deve utilizar Vite para desenvolvimento e geração da versão de produção.
* **RNF03 - Navegação SPA**: A navegação entre as telas deve ser feita no cliente, sem atualização completa da página.
* **RNF04 - Persistência local**: Os dados devem ser armazenados no `localStorage` do navegador, sem depender de um serviço externo para preservá-los entre sessões do navegador.
* **RNF05 - Uso do React**: Os hooks e demais recursos do React utilizados devem ser aplicados corretamente.
* **RNF06 - Bibliotecas e estilos opcionais**: A estilização e as bibliotecas adicionais podem ser escolhidas conforme a implementação; não são especificadas pelo enunciado.

## 🚀 Como Configurar e Executar o Projeto

### 1. Pré-requisitos

* Node.js e npm instalados.

### 2. Instalação

Na raiz do projeto, instale as dependências:

```bash
npm install
```

### 3. Executar em desenvolvimento

```bash
npm run dev
```

O Vite exibirá no terminal o endereço local para acessar a aplicação.

### 4. Verificações e build

Para executar o linter:

```bash
npm run lint
```

Para gerar a versão de produção:

```bash
npm run build
```