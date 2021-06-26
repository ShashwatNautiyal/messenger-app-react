import { useState, useEffect } from 'react';
import './App.css';
import Messages from './components/Messages';
import InputBox from './components/InputBox';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import db from './firebase';

function App() {
	const [messages, setMessages] = useState([]);

	const [input, setInput] = useState('');
	const [username, setUsername] = useState('');

	useEffect(() => {
		db.collection('messages')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) => {
				setMessages(snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })));
			});
	}, []);

	useEffect(() => {
		setUsername(prompt('Enter your name'));
	}, []);

	const sendMessage = () => {
		db.collection('messages').add({
			message: input,
			username: username,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});
		setInput('');
	};

	const onChange = (e) => {
		setInput(e.target.value);
	};

	const clickSendMessage = (e) => {
		if (e.key === 'Enter') {
			sendMessage();
		}
	};

	return (
		<div className="App">
			<div className="box">
				<h1 className="heading">Messenger</h1>
				<InputBox
					clickSendMessage={clickSendMessage}
					onChange={onChange}
					input={input}
					sendMessage={sendMessage}
				/>
				<FlipMove typeName="ul" className="flip-move">
					{messages.map(({ id, message }) => (
						<Messages key={id} username={username} message={message} />
					))}
				</FlipMove>
			</div>
		</div>
	);
}

export default App;
