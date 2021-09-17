import { useCartContext } from "../../Context/CartContext"

const Cart = () => {

    const {removeItem, clear, cart} = useCartContext()

    return <>
        {cart.map( cartItem => <img src={cartItem.item.img} key={cartItem.item.id} /> )}
    </>
}

export default Cart