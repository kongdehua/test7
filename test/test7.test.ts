import DummyClass from '../src/test7'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })

  it('PrintSelf return true ', () => {
    expect(true).toBeTruthy()

    expect(new DummyClass().PrintSelf()).toBeTruthy()
  })
})
