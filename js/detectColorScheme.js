function detectColorScheme(){var e="light";if(localStorage.getItem("theme"))"dark"==localStorage.getItem("theme")&&(e="dark");else{if(!window.matchMedia)return!1;window.matchMedia("(prefers-color-scheme: dark)").matches&&(e="dark")}"dark"==e&&document.documentElement.classList.add("dark"),window.onload=function(){"dark"==e&&document.querySelector("meta[name=theme-color]").setAttribute("content","#141416")}}detectColorScheme();