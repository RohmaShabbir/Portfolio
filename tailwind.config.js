module.exports = {
    theme: {
      extend: {
        animation: {
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
          'ping-slow': 'ping 4s cubic-bezier(0, 0, 0.2, 1) infinite;',
        },
        keyframes: {
          ping: {
            '0%': { transform: 'scale(1)', opacity: '0.7' },
            '75%, 100%': { transform: 'scale(1.5)', opacity: '0' },
          },
          pulse: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '.5' },
          }
        }
      },
    },
    plugins: [],
  }