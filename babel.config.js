module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },

  plugins: [
    [
      'module-resolver',
      {
        root: ['./app'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@svgs': './app/svgs',
          tests: 'tests/*',
          '@components': './app/components',
          '@utils': './app/utils',
          '@elements': './app/elements',
          '@nav': './app/nav',
          '@assets': './app/assets',
          '@screens': './app/screens',
          '@actions': './app/actions',
          '@api': './app/api',
          '@config': './app/config',
          '@navigation': './app/navigation',
          '@reducers': './app/reducers',
          '@sagas': './app/sagas',
          '@store': './app/store',
          '@fonts': './app/fonts',
          '@i18n': './app/i18n',
          '@styles': './app/styles',
          '@constants': './app/constants',
        },
      },
    ],
  ],
};
