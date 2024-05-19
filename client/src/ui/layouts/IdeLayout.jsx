import React from 'react';
import { useResizable } from 'react-resizable-layout';
import cn from '../../utils/cn';
import SampleSplitter from '../components/SplitterComponent';
import CardLayout from './CardLayout';

const IdeClone = () => {
	const {
		isDragging: isBottomPannelDragging,
		position: bottomPannelH,
		splitterProps: bottomPAnnelDrabBarProps,
	} = useResizable({
		axis: 'y',
		initial: 150,
		min: 50,
		reverse: true,
	});

	const {
		isDragging: isLeftPannelDragging,
		position: leftPannelW,
		splitterProps: leftPannelProps,
	} = useResizable({
		axis: 'x',
		initial: 250,
		min: 50,
	});

	return (
		<div
			className={'flex flex-column h-screen bg-dark font-mono overflow-hidden'}
		>
			<div className={'flex grow'}>
				{/* RIGHT PANNEL-1 */}
				<div
					className={cn('shrink-0', isLeftPannelDragging && 'dragging')}
					style={{ width: leftPannelW }}
				>
					<CardLayout url={process.env.REACT_APP_ID1} />
				</div>

				<SampleSplitter
					isDragging={isLeftPannelDragging}
					{...leftPannelProps}
				/>

				{/* RIGHT PANNEL-2 */}
				<div className={'flex grow'}>
					<CardLayout url={process.env.REACT_APP_ID2} />
				</div>
			</div>

			<SampleSplitter
				dir={'horizontal'}
				isDragging={isBottomPannelDragging}
				{...bottomPAnnelDrabBarProps}
			/>

			{/* BOTTOM PANNEL */}
			<div
				className={cn('shrink-0', isBottomPannelDragging && 'dragging')}
				style={{ height: bottomPannelH, overflow: 'scroll' }}
			>
				<CardLayout url={process.env.REACT_APP_ID3} />
			</div>
		</div>
	);
};

export default IdeClone;
