import counter from "../../stores/counter"
import {increment, decrement} from "../../actions/CounterActions"
import {expect} from "chai"

describe('counter-store', () => {

  it('increments', () => {
    expect(counter(10,increment())).to.equal(11);
  });

  it('decrements',() => {
    expect(counter(10,decrement())).to.equal(9);
  });
});
            
