export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        moeGreen: '#18a883',
        moeDarkBlue: '#1a365d',
        moeYellow: '#fde047',
        bgLight: '#f1f5f9'
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
        almarai: ['Almarai', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        changa: ['Changa', 'sans-serif']
      }
    },
  },
  plugins: [],
}
