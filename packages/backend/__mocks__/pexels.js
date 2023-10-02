const pexels = jest.createMockFromModule('pexels');
pexels.createClient = jest.fn();

module.exports = pexels;
