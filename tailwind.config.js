/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/**/**/*.jsx"],
   theme: {
      extend: {
         screens: {
            "phone-small": "320px",
            "phone-medium": "480px",
         },
         fontSize: {
            base: "16px",
            "small-12": "12px",
            "small-14": "14px",
            "small-15": "15px",
            "medium-18": "18px",
            "medium-20": "20px",
            "medium-24": "24px",
            "large-28": "28px",
            "large-30": "30px",
            "large-32": "32px",
            "large-40": "40px",
         },
         colors: {
            blue: "#3457DC",
            white: "#ffffff",
            black: "#000000",
            gray: "#E3E3E3",
            golden: "#FFD024",
            "almost-white": "#fafafa",
            "light-gray": "#EDEBEB",
         },
         boxShadow: {
            main: "0 1px 2px rgba(0, 0, 0, 0.25)",
         },
         container: {
            center: true,
            padding: "20px",
         },
         backgroundImage: {
            invalid: "url('./assets/icons/input-invalid-icon.svg')",
         },
      },
   },
   plugins: [],
};
