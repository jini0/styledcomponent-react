import React from 'react';
import styles from './Box.module.css';

const Box = (props) => {
    return (
        // 그냥 Box가 아닌 styles.Box
        <div className={styles.Box}>나는 박스입니다.
        </div>
    );
};

export default Box;