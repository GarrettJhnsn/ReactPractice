import { uiActions } from "./ui";
import { cartActions } from "./cart";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://reactredux-8bf08-default-rtdb.firebaseio.com/cart.json"
      );
      if (!response.ok) {
        throw new Error("Coudl not fetch cart data!");
      }

      const data = await response.json();
      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalAmount: cartData.totalAmount,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending",
        message: "Sending Card Data",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://reactredux-8bf08-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Sending Cart Data Failed");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: { error },
        })
      );
    }

    dispatch(
      uiActions.showNotification({
        status: "success",
        title: "Success",
        message: "Sent Cart Data Successful",
      })
    );
  };
};
