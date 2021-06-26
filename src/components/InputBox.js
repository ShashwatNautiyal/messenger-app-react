import React from 'react';
import { MdSend } from 'react-icons/md';

const InputBox = ({ input, onChange, sendMessage, clickSendMessage }) => {
	return (
		<div className="input">
			<input
				className="input-box"
				onKeyUp={clickSendMessage}
				type="text"
				value={input}
				onChange={onChange}
			/>
			<button className="input-button" onClick={sendMessage}>
				<MdSend />
			</button>
		</div>
	);
};

export default InputBox;
