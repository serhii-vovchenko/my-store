import React from 'react';
import Link from 'next/link';

import Container from '@/app/components/Container/Container';

const Home = () => {
	return (
		<Container>
			<nav>
				<ul>
					<li>
						<Link href="/category">Category</Link>
					</li>
					<li>
						<Link href="/category/product/">Product</Link>
					</li>
				</ul>
			</nav>
		</Container>
	);
};

export default Home;
