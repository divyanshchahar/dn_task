import { useEffect, useState } from 'react';
import DataLayout from './DataLayout';
import FormLayout from './FormLayout';
import displaystates from '../../config/displayStstes.json';

function CardLayout({ url }) {
	const [display, setDisplay] = useState(displaystates.pending);
	const [data, setData] = useState();
	const [count, setCount] = useState(0);

	const getData = async () => {
		try {
			setDisplay(displaystates.pending);

			const response = await fetch(
				`${process.env.REACT_APP_BASE_URL}/entries/${url}`
			);

			const data = await response.json();

			setData(data);
			setDisplay(displaystates.sucess);
		} catch (error) {
			console.log(error);
			setDisplay(displaystates.failed);
		}
	};

	const addData = async (name, content) => {
		try {
			const body = { name: name, content: content };

			const respone = await fetch(`${process.env.REACT_APP_BASE_URL}/entries`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});

			const updatedData = await respone.json();

			setData(updatedData);
			setDisplay(displaystates.sucess);
			setCount(count + 1);
		} catch (error) {
			console.log(error);

			setDisplay(displaystates.failed);
		}
	};

	const updateData = async (name, content) => {
		try {
			const body = { ...data, name: name, content: content };

			const respone = await fetch(`${process.env.REACT_APP_BASE_URL}/entries`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(body),
			});

			const updateData = await respone.json();

			setData(updateData);
			setDisplay(displaystates.sucess);
			setCount(count + 1);
		} catch (error) {
			console.log(error);

			setDisplay(displaystates.failed);
		}
	};

	// loading data on render
	useEffect(() => {
		getData();
	}, []);

	return (
		<>
			{/* loading fallback */}
			{display === displaystates.pending && (
				<h1>Patience, I am still fetching data</h1>
			)}

			{/* sucess */}
			{display === displaystates.sucess && (
				<>
					<button onClick={() => setDisplay(displaystates.update)}>
						Updatee
					</button>

					<button onClick={() => setDisplay(displaystates.add)}>Add</button>

					<button onClick={() => setDisplay(displaystates.count)}>Count</button>

					<DataLayout name={data.name} content={data.content} />
				</>
			)}

			{/* error fallback */}
			{display === displaystates.failed && (
				<h1>Opps! Error!! Please refresh</h1>
			)}

			{/* add form */}
			{display === displaystates.add && <FormLayout submitHandler={addData} />}

			{/* update form */}
			{display === displaystates.update && (
				<FormLayout
					nameProp={data.name}
					contentProp={data.content}
					submitHandler={updateData}
				/>
			)}
<<<<<<< Updated upstream
			{display === displaystates.count && (
				<>
					<h1>{`Count : ${count}`}</h1>
=======

			{display === displaystates.count && (
				<>
					<h1>{`count : ${count}`}</h1>
>>>>>>> Stashed changes
					<button
						onClick={() => {
							setDisplay(displaystates.sucess);
						}}
					>
						Close
					</button>
				</>
			)}
		</>
	);
}

export default CardLayout;
