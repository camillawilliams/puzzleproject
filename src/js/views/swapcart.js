import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Swapcart = () => {
    const history = useHistory();
	const { store, actions } = useContext(Context);
    const [cart, setCart] = useState([])
    const [puzzles, setPuzzles] = useState ([])

}
const addToCart = () => (puzzle) => {
    setCart([...cart, puzzle]);
};

return (
    <div className="App">
        <h1>Puzzles</h1>
    
    </div>
)



	

