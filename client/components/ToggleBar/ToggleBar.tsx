'use client'
import React, { useState } from "react";
import style from './togglebar.module.css';

const ToggleBar = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    }

    return (
        <label className={style.switch}>
            <input type="checkbox" checked={isToggled} onChange={handleToggle} />
            <span className={`${style.slider} ${style.round}`}></span>
        </label>
    )
}

export default ToggleBar