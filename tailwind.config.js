/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,ts,jsx,tsx}",
  "./src/app/**/*.{js,ts,jsx,tsx}",
  "./src/Components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    fontFamily: {
      urbanist: ['Urbanist', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
      mulish: ['Mulish", sans-serif'],
      jakarta: ['"Plus Jakarta Sans", sans-serif;'],
      inter: ['"Inter", sans-serif'],
      google: ['"Google Sans"', 'Roboto', 'Arial', 'sans-serif'], // Add this line
    },
  },
};
export const plugins = [];
