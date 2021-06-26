import React, { forwardRef } from 'react';

const Messages = forwardRef(({ message, username }, ref) => {
	return (
		<div ref={ref}>
			<li className={message.username === username ? 'user__msg' : 'guest__msg'}>
				{message.message}
			</li>
			{message.username !== username && <p className="username__tag">- {message.username}</p>}
		</div>
	);
});

export default Messages;
