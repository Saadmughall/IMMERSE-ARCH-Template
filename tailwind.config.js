module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: theme=>({
        'Commercial':"url('./images/Commercial.jpg')",
        'Residential':"url('./images/Residential.jpg')",
        'Architecture':"url('./images/Architecture.jpg')"
      })
    },
  },
  plugins: [],
}
