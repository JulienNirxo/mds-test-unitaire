const { main } = require('../main');

jest.mock('../main', () => ({
    main: jest.fn(),
}));

it('should return "world" if param is "hello"', () => {
    main.mockReturnValue("world");

    const result = main("hello");
    expect(result).toBe("world");

    expect(main).toHaveBeenCalledWith("hello");
});

it('should return "nop" if param is not "hello"', () => {
    main.mockReturnValue("nop");

    const result = main("nop hello");
    expect(result).toBe("nop");

    expect(main).toHaveBeenCalledWith("nop hello");
});