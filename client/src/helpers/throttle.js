import React from 'react'

function throttle(callback, delay, loading, isLoading) {
    if (loading)
        return;

    isLoading(true);
    
    callback();

    setTimeout(() => isLoading(false), delay);
}

export default throttle