# ui

This library was generated with [Nx](https://nx.dev).

It is a react based UI library meant to gather all monorepo design system Atoms, Modules and Templates.

It builds a Storybook portfolio of those components.

## Update DS

Create or Update the component files, the following requirements should be meat :

    - Components must be exported in the index.ts file
    - Components must be tested in a *.spec.ts file
    - Components must be present in the storybook via a *.stories.ts file
    - When available, Storybook must have the figma link

## Use DS components in the Apps

```
import { Card } from '@ecosystem/ds';

export const YourReactComponent = () => (
  <Card />
);
```

## Scripts

### Running Storybook

`yarn nx build ds:storybook`

### Running unit tests

`yarn nx run ds:test`
