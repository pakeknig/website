/**
 * es2016 at 方法实现
 * @param arr
 * @param n
 * @returns
 */
export function at<T = any>(arr: Array<T>, n: number) {
  let index = Math.trunc(n) || 0

  // 如果索引为负数，则从数组末尾开始计算
  if (index < 0) {
    index += arr.length
  }
  // 检查索引是否越界
  if (index < 0 || index >= arr.length) {
    return undefined
  }
  return arr[index]
}

/**
 * 封装可选链和空值合并等操作
 */
export class OptionalChain {
  private obj
  constructor(value: any) {
    this.obj = value
  }
  get(property: string) {
    if (this.obj == null || this.obj == undefined) {
      return new OptionalChain(undefined)
    }
    const value = this.obj[property]
    return new OptionalChain(value)
  }
  call(method, ...args) {
    if (this.obj == null) {
      return new OptionalChain(undefined)
    }
    const value = this.obj[method]?.(...args)
    return new OptionalChain(value)
  }
  value() {
    return this.obj
  }

  /**
   * ?? 控制合并运算符的模拟
   * @param defaultValue
   * @returns
   */
  valueOnDefault(defaultValue: any) {
    if (this.obj === undefined || this.obj === null) {
      return defaultValue
    }
    return this.obj
  }
}
/**
 * 可选链工厂函数
 * @param value
 * @returns
 */
export function createOpChain(value: any) {
  return new OptionalChain(value)
}

/**
 * python中的range函数
 * @param start
 * @param end
 * @param step
 * @returns
 */
export function range(start: number, end?: number, step = 1) {
  return Array.from(rangeIter(start, end, step))
}
/**
 * python中的range 迭代器实现
 * @param start
 * @param end
 * @param step
 */
export function* rangeIter(start: number, end?: number, step = 1) {
  if (typeof end === 'undefined') {
    end = start
    start = 0
  }

  // 进行参数检查
  if (step === 0) {
    throw new Error('step can not be zero')
  }

  if (
    !(
      Number.isInteger(start) &&
      Number.isInteger(end) &&
      Number.isInteger(step)
    )
  ) {
    throw new Error('unsupport decimal number')
  }
  if (step > 0) {
    for (let i = start; i < end; i += step) {
      yield i
    }
  } else {
    for (let i = start; i > end; i += step) {
      yield i
    }
  }
}
