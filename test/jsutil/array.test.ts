import {
  at,
  createOpChain,
  OptionalChain,
  range,
} from '../../src/utils/jsutils/array'

describe('at', () => {
  test('returns undefined for an empty array', () => {
    expect(at([], 0)).toBeUndefined()
  })

  test('returns undefined for an index out of range', () => {
    expect(at([1, 2, 3], 5)).toBeUndefined()
    expect(at([1, 2, 3], -4)).toBeUndefined()
  })

  test('returns the element at the specified index', () => {
    expect(at([1, 2, 3], 1)).toBe(2)
    expect(at([1, 2, 3], -1)).toBe(3)
  })

  test('trunc non-integer index ', () => {
    expect(at([1, 2, 3], 2.5)).toBe(3)
    expect(at([1, 2, 3], NaN)).toBe(1)
  })
})

describe('OptionalChain', () => {
  test('returns undefined for null or undefined object', () => {
    const obj = null
    const chain = new OptionalChain(obj)
    expect(chain.get('foo').value()).toBeUndefined()

    const obj2 = undefined
    const chain2 = new OptionalChain(obj2)
    expect(chain2.get('bar').value()).toBeUndefined()
  })

  test('returns undefined for non-existent property', () => {
    const obj = { foo: 1 }
    const chain = new OptionalChain(obj)
    expect(chain.get('bar').value()).toBeUndefined()
  })

  test('returns property value for existing property', () => {
    const obj = { foo: 1 }
    const chain = new OptionalChain(obj)
    expect(chain.get('foo').value()).toBe(1)
  })

  test('returns undefined for null or undefined method', () => {
    const obj = { foo: null }
    const chain = new OptionalChain(obj)
    expect(chain.call('foo').value()).toBeUndefined()

    const obj2 = { foo: undefined }
    const chain2 = new OptionalChain(obj2)
    expect(chain2.call('bar').value()).toBeUndefined()
  })

  test('returns method return value for existing method', () => {
    const obj = { foo: (x: number, y: number) => x + y }
    const chain = new OptionalChain(obj)
    expect(chain.call('foo', 2, 3).value()).toBe(5)
  })

  test('returns default value for null or undefined object', () => {
    const obj = null
    const chain = new OptionalChain(obj)
    expect(chain.valueOnDefault('default')).toBe('default')

    const obj2 = undefined
    const chain2 = new OptionalChain(obj2)
    expect(chain2.valueOnDefault('default')).toBe('default')
  })

  test('returns object value for non-null object', () => {
    const obj = { foo: 1 }
    const chain = new OptionalChain(obj)
    expect(chain.valueOnDefault('default')).toBe(obj)
  })
  test('undefined call', () => {
    const chain = createOpChain(undefined)
    expect(chain.call('11').value()).toBeUndefined()
  })
})

describe('range', () => {
  test('returns an empty array for zero range', () => {
    expect(range(0)).toEqual([])
  })

  test('returns an array of consecutive integers with default step', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4])
  })

  test('returns an array of consecutive integers with specified step', () => {
    expect(range(1, 7, 2)).toEqual([1, 3, 5])
  })

  test('returns an array of consecutive integers with negative step', () => {
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2])
  })

  test('returns an empty array if end is less than start with positive step', () => {
    expect(range(5, 1)).toEqual([])
  })

  test('returns an empty array if end is greater than start with negative step', () => {
    expect(range(1, 5, -1)).toEqual([])
  })

  test('test invalid param', () => {
    expect(() => range(0.5, 5)).toThrowError('unsupport decimal number')
    expect(() => range(0, 5, 0)).toThrowError('step can not be zero')
  })
})
