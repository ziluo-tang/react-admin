import React, { useRef ,useEffect } from 'react';
export default () => {
    const dom = useRef(Date.now());
    useEffect(() => {
        console.log(dom.current);
    }, []);
    return (
        <div ref={dom}>city page.</div>
    )
}