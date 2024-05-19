import { useState } from 'react';

function FormLayout({ nameProp = '', contentProp = '', submitHandler }) {
	const [name, setName] = useState(nameProp);
	const [content, setContent] = useState(contentProp);

	return (
		<>
			<div>
				<input
					type="text"
					placeholder="name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
			</div>

			<div>
				<textarea
					placeholder="content"
					value={content}
					onChange={(e) => {
						setContent(e.target.value);
					}}
				/>
			</div>

			<button
				onClick={() => {
					submitHandler(name, content);
				}}
			>
				Submit
			</button>
		</>
	);
}

export default FormLayout;
