import { shallow } from "enzyme";
import { HeroesApp } from "../HeroesApp";

describe(" Pruebas en <HeroesApp >", () => {
  test("debe de hacer match con el snapshot ", () => {
    const wrapper = shallow(<HeroesApp />);

    expect(wrapper).toMatchInlineSnapshot(`
      <ContextProvider
        value={
          Object {
            "dispatch": [Function],
            "user": Object {
              "logged": false,
            },
          }
        }
      >
        <AppRouter />
      </ContextProvider>
    `);
  });
});
