### Ant Design >>>

###### installation :

`npm install @ant-design/cssinjs --save`

##### src>lib>AntdRegistry.tsx>>>

```ts
 'use client';

    import React from 'react';
    import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';
    import type Entity from '@ant-design/cssinjs/es/Cache';
    import { useServerInsertedHTML } from 'next/navigation';

    const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
    const cache = React.useMemo<Entity>(() => createCache(), []);
    useServerInsertedHTML(() => (
        <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
    ));
    return <StyleProvider cache={cache}>{children}</StyleProvider>;
    };

    export default StyledComponentsRegistry;

```

#### wraffed with ant design src>lib>Providers.ts (with redux) >>>

```js
    <Provider store={store}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </Provider>
```


