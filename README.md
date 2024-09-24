## Steps taken

1. create expo app

   ```bash
   npx create-expo-app@latest
   ```

2. create local module

   ```bash
    npx create-expo-module@latest --local
   ```
3. delete web / tvos files in module


4. add unit test & mock

   see files:\
   [\__tests\__/localModule-test.tsx](__tests__/localModule-test.tsx)\
[modules/local-test-module/__mocks__/LocalTestModule.ts](modules/local-test-module/__mocks__/LocalTestModule.ts)\
\
   (relevant docs https://docs.expo.dev/modules/mocking/#providing-mocks-for-a-module)
   

5. run unit test

   ```bash
    npm run test
   ```
   Result:
    ```
    FAIL  __tests__/localModule-test.tsx
   Test suite failed to run

    Cannot find native module 'LocalTestModule'

      3 | // It loads the native module object from the JSI or falls back to
      4 | // the bridge module (from NativeModulesProxy) if the remote debugger is on.
    > 5 | export default requireNativeModule('LocalTestModule');
        |                                   ^
      6 |

      at Object.requireNativeModule (node_modules/expo-modules-core/src/requireNativeModule.ts:17:11)
      at requireNativeModule (node_modules/jest-expo/src/preset/setup.js:256:73)
      at Object.<anonymous> (modules/local-test-module/src/LocalTestModule.ts:5:35)
      at Object.require (modules/local-test-module/index.ts:5:1)
      at Object.<anonymous> (__tests__/localModule-test.tsx:1:1)

    ```
   
==> I expected the Mock to be used, what am I missing ?
Current workaround is something like this:

```
jest.mock('@/modules/local-test-module', () => ({
    hello: jest.fn().mockReturnValue("Hello from mock")
}))
```

--author="Lukas Müller <WookieFPV@users.noreply.github.com>"
