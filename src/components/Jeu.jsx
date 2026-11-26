import { useState } from "react";

export default function Jeu() {
    const [bois, setBois] = useState(0);
    const [fibres, setFibres] = useState(0);
    const [pierres, setPierres] = useState(0);
    const [boisRecoltesJour, setBoisRecoltesJour] = useState(0);

    function recolterBois() {
        if (boisRecoltesJour >= 4) { return; }
        setBois(quantitePrecedente => quantitePrecedente + 1);
        setBoisRecoltesJour(quantitePrecedente => quantitePrecedente + 1);
    }
    return (
        <div>
            <h1>Une nouvelle vie sur l'île</h1>
            <h2>Inventaire</h2>

            <ul>
                <li>Bois {bois}</li>
                <li>Fibres {fibres}</li>
                <li>Pierres {pierres}</li>
            </ul>
            <button onClick={recolterBois} disabled={boisRecoltesJour >= 4}>Récolter du bois</button>
        </div>
    );
}