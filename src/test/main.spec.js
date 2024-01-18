const {main} = require('../main')
it('should retrun world of param is hello', () => {
    const result = main("hello")
    expect(main("hello")).toBe("world")
})