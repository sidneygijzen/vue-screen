---
editLink: true
---

# Bootstrap

To use Bootstrap as your UI framework, simply pass it to the configuration

### Boostrap 3
```js
import { useGrid } from 'vue-screen'

const grid = useGrid('bootstrap3')
```

```js
import VueScreen from 'vue-screen'

createApp().use(VueScreen, 'bootstrap3')
```

For backwards compatibility reasons, bootstrap 3 is also aliased as just `bootstrap`
```js
import { useGrid } from 'vue-screen'

const grid = useGrid('bootstrap') // Bootstrap 3 grid
```

```js
import VueScreen from 'vue-screen'

createApp().use(VueScreen, 'bootstrap') // Bootstrap 3 grid
```

### Boostrap 4
```js
import { useGrid } from 'vue-screen'

const grid = useGrid('bootstrap4')
```

```js
import VueScreen from 'vue-screen'

createApp().use(VueScreen, 'bootstrap4')
```

### Boostrap 5
```js
import { useGrid } from 'vue-screen'

const grid = useGrid('bootstrap5')
```

```js
import VueScreen from 'vue-screen'

createApp().use(VueScreen, 'bootstrap5')
```

Your grid object will contain the following properties:

```ts
// Bootstrap 3
{
  xs: boolean,
  sm: boolean,
  md: boolean,
  lg: boolean,
  breakpoint: string | null // the current breakpoint
}

// Bootstrap 4
{
  xs: boolean,
  sm: boolean,
  md: boolean,
  lg: boolean,
  xl: boolean
  breakpoint: string | null // the current breakpoint
}

// Bootstrap 5
{
  xs: boolean,
  sm: boolean,
  md: boolean,
  lg: boolean,
  xl: boolean,
  xxl: boolean,
  breakpoint: string | null // the current breakpoint
}
```

::: warning
The actual values of the properties depend on the screen size.
:::