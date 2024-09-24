import {hello} from "@/modules/local-test-module";

it(`returns hello world`, () => {
  expect(hello()).toBe("Hello from mock");
});
