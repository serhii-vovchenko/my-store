import './globals.css';

import type { Metadata } from 'next';
import React from 'react';
import Header from '@/app/components/Header/Header';
import Footer from './components/Footer/Footer';

export const metadata: Metadata = {
	title: 'Custom Next App',
	description: 'Custom layout for Next.js project',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<body>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
};

export default RootLayout;
