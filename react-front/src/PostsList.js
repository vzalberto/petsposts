import React from 'react';

import Post from './Post'
  const dataStatic = {
  "token": "y95azkvpqmz4",
  "id": "73550c2b-27fd-4cf6-8a78-da3c9c93c962",
  "posts": [
    
    {
      "author": {
        "id": "943faee6-3acb-46b2-8ef6-30132336abb7",
        "username": "Brenden_Jones6",
        "name": "Cullen",
        "lastName": "Kuphal",
        "email": "Emilia_Nikolaus@gmail.com",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/nellleo/128.jpg"
      },
      "message": {
        "likes": 151,
        "views": 276,
        "date": "2019-08-12T14:19:02.848Z",
        "id": "d927d385-8ffc-45d2-945c-07af6f896318",
        "body": {
          "image": "http://lorempixel.com/640/480/cats",
          "text": "In repellendus iure et consectetur tempora consequatur et ut. Voluptatem rerum aut vitae repellat. Et quaerat quia quia voluptatem. Veniam est quaerat quam pariatur ratione rerum repellendus."
        }
      }
    }
  ]
};

function PostsList(props) {
  const data = props.posts[0] || dataStatic;
  console.log(data);

  const list = data.posts.map(el=><Post post={el}/>) 
  return (
    <div className="list">
    	{list}
    </div>
  );
}

export default PostsList;
