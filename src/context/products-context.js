import React, { useState, createContext } from 'react';
import { data } from '../shop/index';

export const ProductContext = createContext();

const ProductContextProvider = ({ children }) => {
	const [products] = useState(data);

	return (
		<ProductContext.Provider value={{ products }}>
			{children}
		</ProductContext.Provider>
	);
};

export default ProductContextProvider;
