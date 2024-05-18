import React from 'react';
import { useResizable } from 'react-resizable-layout';
import SampleSplitter from '../components/SplitterComponent';
import cn from '../../utils/cn';
import DataLayout from './DataLayout';
import FormLayout from './FormLayout';

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
					<DataLayout name="Left Pannel" content="This some content" />
				</div>

				<SampleSplitter
					isDragging={isLeftPannelDragging}
					{...leftPannelProps}
				/>

				{/* RIGHT PANNEL-2 */}
				<div className={'flex grow'}>
					<DataLayout name="Right Pannel" content="This some content" />
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
				<DataLayout name="Bottom Pannel" content="This some content" />
			</div>
		</div>
	);
};

export default IdeClone;
