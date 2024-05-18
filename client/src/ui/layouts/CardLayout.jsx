import { useState } from 'react';
import DataLayout from './DataLayout';
import FormLayout from './FormLayout';

function CardLayout() {
	const [display, setDisplay] = useState('data');
	return (
		<>
			{display === 'data' && <DataLayout />}
			{display === 'add' && <FormLayout />}
			{display === 'update' && <FormLayout />}
		</>
	);
}

export default CardLayout;
