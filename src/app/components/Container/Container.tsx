import React, { ReactNode } from 'react';
import s from './Container.module.css';

interface ContainerProps {
	children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
	return <div className={s.wrapper}>{children}</div>;
};

export default Container;
