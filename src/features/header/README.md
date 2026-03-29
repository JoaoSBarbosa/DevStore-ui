# Feature: Header

Arquitetura e boas práticas adotadas

## Estrutura de pastas

- `components/`: toda UI do cabeçalho.
  - `common/`: elementos compartilhados entre mobile/desktop.
  - `desktop/`: componentes específicos desktop.
  - `mobile/`: componentes específicos mobile.
- `context/`: contexto React para `Header`.
- `data/`: dados estáticos (menu, links, etc.).
- `services/`: chamadas API ou função de negócios relacionadas ao header.
- `types/`: tipos TypeScript do header.

## Export Barrel

`src/features/header/index.ts` exporta:

- `Header` (componente principal)
- `HeaderProvider` (context provider)
- `useHeader` (hook de consumo)

Use no layout:

```tsx
import { Header, HeaderProvider } from "@/features/header";
```

## Principais responsabilidades

- `Header` é o componente de composição. Ele chama os componentes visuais e o provedor de contexto `HeaderProvider` fica no nó superior do layout.
- `HeaderProvider` gerencia estado de UI compartilhado (`isMenuOpen`, `search`, etc.)
- `useHeader` é o hook custom para acessar o contexto com validação.

## Melhorias aplicadas

1. Atualizado barrel `src/features/header/index.ts` para incluir exportações completas.
2. Simplificado import do layout para usar o barrel.
3. Renomeados componentes desktop: `HeaderDesktopMenu` -> `DesktopMenu` e `HeaderMenuDesktopItem` -> `DesktopMenuItems`.
4. Adicionado este README de documentação de arquitetura.

## Orientações futuras

- Mantenha componentes pequenos e com responsabilidade única.
- Prefira `features/<name>/components/atoms` etc. se a quantidade de elementos crescer.
- Reutilize `shared/components` para elementos padrão de app.
