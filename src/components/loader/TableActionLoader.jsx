import React from 'react';
function TableActionLoader({ color = '#F95433' }) {
	return (
		<div className='flex items-end justify-end'>
			<div className={`w-3 h-3 border-2 border-dashed rounded-full animate-spin border-[${color}]`}></div>
		</div>
	);
}
export default TableActionLoader;