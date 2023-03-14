import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from "./Header";

export const SharedLayout = () => {
	return (
		<>
			<Header />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
		</>
	);
};

