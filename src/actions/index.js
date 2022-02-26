export const increment = (inc) => {
    return {
        type: 'INCREMENT',
        payload: inc ? inc : 1
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const SIGN_IN = () => {
    return {
        type: 'SIGN_IN'
    }
}
