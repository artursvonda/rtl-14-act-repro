// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
	roots: ['<rootDir>/src'],
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	moduleDirectories: ['node_modules', path.resolve(__dirname, 'src')],
	transform: {
		'\\.[jt]sx?$': 'babel-jest',
	},
	restoreMocks: true,
};
