import { shallow } from "enzyme";
import { DcScreen } from "../../../components/dc/DcScreen";

describe("Pruebas en el componente <DcScreen /> ", () => {
  const wrapper = shallow(<DcScreen />);
  
  test("Debe de hacer match con el snapshot", () => {
    
    expect(wrapper).toMatchInlineSnapshot(`
      <Fragment>
        <h1>
          DCScreen
        </h1>
        <hr />
        <HeroList
          publisher="DC Comics"
        />
      </Fragment>
    `);
  });
});
