import adapter from '@sveltejs/adapter-static';

const dev = process.env.NODE_ENV === 'development';
const base = process.env.BASE_PATH || '';

const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: undefined,
      strict: true
    }),
    paths: {
      base: dev ? '' : base
    },
    prerender: {
      handleHttpError: 'warn'
    }
  }
};

export default config;