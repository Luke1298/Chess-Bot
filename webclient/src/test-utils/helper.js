import expect from 'expect';

const testHelper = {
  arrayExpect
};

function arrayExpect(array){
  const arrayExcpet = {
    toEqual
  };
  function toEqual(compareArray){
    expect(array.length).toEqual(compareArray.length);
    compareArray.map((item) => {
      expect(array).toInclude(item);
    });
  }
  return arrayExcpet;
}

export default testHelper;

