import { shallow } from "enzyme";
import { HeroList } from "../../../components/heroes/HeroList";
import { heros } from "../../fixtures/heros";

describe("Test en <HeroList /> ", () => {
//   const wrapper = shallow(<HeroList publisher={heros.filter({publisher} => publisher. )} />);
const wrapper = shallow(<HeroList publisher={'Marvel Comics'}/>);
//   console.log(heros.filter(array => array.publisher === 'Marvel Comics')); //output = 10
  
  test("Debe de hacer match con el snapshot", () => {
    expect(wrapper).toMatchInlineSnapshot(`
      <div
        className="row row-cols-1 row-cols-md-5 g-4 animate__animated animate__bounceInLeft"
      >
        <HeroCard
          alter_ego="Peter Parker"
          characters="Peter Parker"
          className="card-body"
          first_appearance="Amazing Fantasy #15"
          id="marvel-spider"
          key="marvel-spider"
          publisher="Marvel Comics"
          superhero="Spider Man"
        />
        <HeroCard
          alter_ego="Steve Rogers"
          characters="Steve Rogers"
          className="card-body"
          first_appearance="Captain America Comics #1"
          id="marvel-captain"
          key="marvel-captain"
          publisher="Marvel Comics"
          superhero="Captain America"
        />
        <HeroCard
          alter_ego="Tony Stark"
          characters="Tony Stark"
          className="card-body"
          first_appearance="Tales of Suspense #39"
          id="marvel-iron"
          key="marvel-iron"
          publisher="Marvel Comics"
          superhero="Iron Man"
        />
        <HeroCard
          alter_ego="Thor Odinson"
          characters="Thor Odinson"
          className="card-body"
          first_appearance="Journey into Myster #83"
          id="marvel-thor"
          key="marvel-thor"
          publisher="Marvel Comics"
          superhero="Thor"
        />
        <HeroCard
          alter_ego="Bruce Banner"
          characters="Bruce Banner"
          className="card-body"
          first_appearance="The Incredible Hulk #1"
          id="marvel-hulk"
          key="marvel-hulk"
          publisher="Marvel Comics"
          superhero="Hulk"
        />
        <HeroCard
          alter_ego="James Howlett"
          characters="James Howlett"
          className="card-body"
          first_appearance="The Incredible Hulk #180"
          id="marvel-wolverine"
          key="marvel-wolverine"
          publisher="Marvel Comics"
          superhero="Wolverine"
        />
        <HeroCard
          alter_ego="Matthew Michael Murdock"
          characters="Matthew Michael Murdock"
          className="card-body"
          first_appearance="Daredevil #1"
          id="marvel-daredevil"
          key="marvel-daredevil"
          publisher="Marvel Comics"
          superhero="Daredevil"
        />
        <HeroCard
          alter_ego="Clinton Francis Barton"
          characters="Clinton Francis Barton"
          className="card-body"
          first_appearance="Tales of Suspense #57"
          id="marvel-hawkeye"
          key="marvel-hawkeye"
          publisher="Marvel Comics"
          superhero="Hawkeye"
        />
        <HeroCard
          alter_ego="Scott Summers"
          characters="Scott Summers"
          className="card-body"
          first_appearance="X-Men #1"
          id="marvel-cyclops"
          key="marvel-cyclops"
          publisher="Marvel Comics"
          superhero="Cyclops"
        />
        <HeroCard
          alter_ego="Norrin Radd"
          characters="Norrin Radd"
          className="card-body"
          first_appearance="The Fantastic Four #48"
          id="marvel-silver"
          key="marvel-silver"
          publisher="Marvel Comics"
          superhero="Silver Surfer"
        />
      </div>
    `);
  });

  test('debe de contener el total de heroes de Marvel', () => {
      const marvelHerosLength = heros.filter(hero => hero.publisher === 'Marvel Comics').length;
      expect(wrapper.find('HeroCard').length).toEqual(marvelHerosLength);
  })
  
});
