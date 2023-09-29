## Features of App Router>>>

**for loading routes src>app>loading.tsx**

**for not-found routes src>app>not-found.tsx**

#### Layout create >>>

create a layout >>

**create folder (app>(withlayout)>layout.tsx)**

```js
    import React from "react";

    const DashboardLayout = ({ children }: { children: React.ReactNode }) => {

    return <div>{children}</div>;
    };

    export default DashboardLayout;


```

**nexted page or routes under the Layout (app>(withlayout)>student>page.tsx)**

**nexted page or routes under the Layout (app>(withlayout)>user>page.tsx)**
