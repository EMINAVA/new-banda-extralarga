module.exports = {
    purge: ["./index.html", "./src/**/*.{svelte,js,ts}"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {
            screens: {
                "3xl": "1280px",
            },
            text: {
                "main": "200px"
            },
            colors: {
                "background-dark": "#141625",
                "background": "#f8f8fb",
                navbar: {
                    "background": "#373b54",
                    "background-dark": "#1e2139",
                    "link": "rgba(39, 43, 73, 1)",
                    "link-dark": "rgba(39, 43, 73, 1)"
                },
                "accent": "#7c5dfa",
                all: {
                    switch: "#858bb3",
                },
                logo: {
                    light: "#9277ff",
                    dark: "#7c5dfa",
                },
                line: {
                    color: "#494E6E",
                },
                paid: {
                    text: "#62d79f",
                    bg: "#f3fdf9",
                    darkbg: "#1f2c3f",
                },
                pending: {
                    text: "#ef8f07",
                    bg: "#fef8f0",
                    darkbg: "#2b2736",
                },
                item: {
                    lightbg: "#f9fafe",
                    darkbg: "#252945",
                    lighttotal: "#373b54",
                    darktotal: "#0c0e15",
                },
            },
            outline: {
                purple: "2px solid #7c5dfa",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
