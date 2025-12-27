import React from 'react'

function throttle(callback, delay, loading, isLoading) {
    if (loading)
        return;

    callback();

    isLoading(true);
    
    setTimeout(() => isLoading(false), delay);
}

export default throttle