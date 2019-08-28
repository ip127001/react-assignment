const initialState = {
    starter: [
        {
            id: 'item267',
            name: 'Corn',
            star: 4.5,
            rating: 124,
            type: 'Indian',
            price: 220,
            quantity: 1,
            description: 'this food is good and tasty',
            note: ''
        },
        {
            id: 'item268',
            name: 'mango',
            star: 4.1,
            rating: 24,
            type: 'Indian',
            price: 250,
            quantity: 1,
            description: 'this food is good and tasty',
            note: ''
        },
        {
            id: 'item269',
            name: 'Burger',
            star: 4.0,
            rating: 104,
            type: 'Indian',
            price: 250,
            quantity: 1,
            description: 'this food is good and tasty',
            note: ''
        },
        {
            id: 'item270',
            name: 'Drumstick',
            star: 4.9,
            rating: 164,
            type: 'South-Indian',
            price: 120,
            quantity: 1,
            description: 'this food is good and tasty',
            note: ''
        }
    ],
    counter: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT') {

        const copyArray = [...state.starter];

        const deepArray = copyArray.map(el => {
            if(el.id === action.id) {
                return {
                    ...el,
                    quantity: el.quantity + 1
                }
            }
            return el;
        });

        return {
            ...state,
            starter: deepArray
        }
    } 

    if(action.type === 'DECREMENT') {

        const copyArray = [...state.starter];
        
        const deepArray = copyArray.map(el => {
            if(el.id === action.id) {
                if(el.quantity === 1) {
                    return el;
                } 
                return {
                    ...el,
                    quantity: el.quantity - 1
                }
            }
            return el;
        });

        return {
            ...state,
            starter: deepArray
        }
    } 

    return state;
};
export default reducer;