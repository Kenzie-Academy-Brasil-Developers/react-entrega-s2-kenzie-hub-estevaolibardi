import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

body, input, button{
 font-family: 'Inter', sans-serif;
 font-size: 0.75rem;
 background-color: var(--Grey-4);
 color: var(--Grey-0);
}

button{
    cursor: pointer;
}

a{
    text-decoration: none;
}

:root{
    /* Primary Palette */
    --color-primary: #FF577F;
    --color-primary-Focus:##FF427F;
    --color-primary-Negative: #59323F;
    /* Grey Scale Palette */
    --Grey-4:#121214;
    --Grey-3:#212529;
    --Grey-2:#343B41;
    --Grey-1:#868E96;
    --Grey-0:#F8F9FA;
    /* Feedback Palette */
    --Success:#3FE864;
    --Negative:#E83F5B;
    --White-1:#fff;
    /* Typography */
    --Title-1:1rem;
    --Title-2:1rem;
    --Title-3:1rem;
    /* Buttons */
    --radius-inputs-button:0.25rem;
    --radius-inputs-card:0.25rem;

}
`;
