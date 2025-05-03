import { useContext, useActionState } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import Input from "./UI/Input";
import UserProgressContext from "../store/UserProgressContext";
import Button from "./UI/Button";
import useHttp from "./hooks/useHttp";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

export default function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);
  const {
    data,
    error,
    sendRequest,
    clearData,
  } = useHttp("http://localhost3000/orders", requestConfig);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }
  
  function handleFinish(){
    userProgressCtx.hideCheckout();
    //cartCtx.clearCart();
    clearData();
  }

  async function checkoutAction(fd) {
    const customerData = Object.fromEntries(fd.entries());

    await sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx.items,
          customer: customerData,
        },
      })
    );
  }

  const [formState,formAction,isSending] = useActionState(checkoutAction,null);

  let actions = (
    <>
      <Button type="button" onClick={handleClose} textonly>
        Close
      </Button>
      <Button textonly>Submit Order</Button>
    </>
  );
  if(isSending){
    actions = <span>Sending order data...</span>
  }

  if(data && !error){
    return <Modal open={userProgressCtx.progress === 'checkout'} onClose={handleClose}>
      <h2>Success !</h2>
      <p>Your order was submitted successfully</p>
      <p className="modal-actions">
        <Button onClick={handleClose}>Okay</Button>
      </p>
    </Modal>
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form action={formAction}>
        <h2>Checkout</h2>
        <p>Total Amount: {cartTotal} </p>
        <Input label="Full Name" type="text" id="name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        <p className="modal-actions">
            {actions}
        </p>
      </form>
    </Modal>
  );
}
