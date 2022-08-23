import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
	font-family: 'Open Sans', sans-serif;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

*:hover::-webkit-scrollbar, 
*:hover::-webkit-scrollbar-thumb  {
    color: rgba(0, 0, 0, 0.3);
}

*::-webkit-scrollbar,
*::-webkit-scrollbar-thumb {
    width: 26px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 10px solid transparent;
    color: rgba(0, 0, 0, 0);
    transition: color .3s ease;
}

*::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
}

html {
	overflow-x: hidden;
	background: #F1F0F6;
}

body {
	background: #F1F0F6;
	overflow: hidden;
	max-height: 100vh;
}

a {
	text-decoration: none;
}

li {
	list-style: none;
}
 
.overlayScrollBar {
    scrollbar-width: none;
    overflow-y: overlay;
}
`

export default GlobalStyles;
