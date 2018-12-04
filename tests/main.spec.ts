import vec2 from '../src/vec2';
import { expect } from 'chai';

describe('Testing modulus', ()=>{
  it('should return hello world', ()=>{

    let a:vec2 = new vec2(3, 4);
    expect(a.modulus).to.equal(5);
  })
})