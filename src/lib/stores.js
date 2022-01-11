import { writable } from "svelte/store";

let mode = localStorage.getItem("darkMode") ?? "light";

const darkMode = writable(mode);

darkMode.subscribe(m => localStorage.setItem("darkMode", m));

export { darkMode };