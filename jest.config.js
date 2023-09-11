module.exports = {
  automock: false,
  collectCoverage: false, // disabled for now
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  moduleNameMapper: {
    // mocking all imports from app/assets
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(png|jpg|jpeg|svg)$': '<rootDir>/src/__mocks__/assetMock.js',
  },
  modulePaths: ['<rootDir>/src/'],
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).js?(x)'],
  testPathIgnorePatterns: [
    '<rootDir>/.vscode/',
    '<rootDir>/dist/',
    '<rootDir>/jest/',
    '<rootDir>/nginx/',
    '<rootDir>/node_modules/',
    '<rootDir>/public/',
    '<rootDir>/webpack/',
  ],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTest.js'],
};
