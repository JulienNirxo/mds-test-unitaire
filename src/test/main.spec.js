const {main} = require('../main')
it('should retrun world of param is hello', () => {
    expect(main("hello")).toBe("world")
})

it('should retrun nop of param is not hello', () => {
    expect(main("not hello")).toBe("nop")
})