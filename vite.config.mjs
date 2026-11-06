export default {
  base: './',
  // Keep dependencies as ES modules during development; production uses Rollup.
  optimizeDeps: { noDiscovery: true, exclude: ['gsap', 'gsap/ScrollTrigger'] },
};
