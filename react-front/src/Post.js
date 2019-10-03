import React from 'react';

function Post(props){
	return (
		<div>
			<img width="50" heigth="50" src={props.post.author.avatar} />
			<a>{props.post.author.username}</a>
			<br />
			<img src={props.post.message.body.image}></img>
			<p>likes: {props.post.message.likes}</p>
			<p>{props.post.message.body.text}</p>

			<hr />
		</div>
		)
}
export default Post