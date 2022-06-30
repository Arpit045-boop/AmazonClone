export const initialState = {
    Mybasket: [],
    Newuser: null
};

export const getMyBasketTotal = (Mybasket) =>
    Mybasket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    // console.log(action)
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                Newuser: action.Newuser
            }
        case "ADD_TO_BASKET":
            // Logic Add to basket
            return {
                ...state,
                Mybasket: [...state.Mybasket, action.item],
            }
        // break;
        case "REMOVE_FROM_BASKET":
            // Logic Remove from basket
            // we cloned the basket
            let newBasket = [...state.Mybasket];

            const newIndex = state.Mybasket.findIndex(
                (MybasketItem) => MybasketItem.id === action.id
            )

            if (newIndex >= 0) {
                // item exist in the basket
                newBasket.splice(newIndex, 1);
            } else {
                console.warn(`You Cannot remove product (id: ${action.id}) as it's not present`);
            }
            return {
                ...state,
                Mybasket: newBasket
            }
        // break;
        default:
            return state;
    }
}

export default reducer;