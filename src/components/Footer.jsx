import React from "react";

function Footer(){
    const now = new Date()
    const year = now.getFullYear()
    return <footer>
        <p>Copywrite @ {year}</p>
    </footer>
}

export default Footer