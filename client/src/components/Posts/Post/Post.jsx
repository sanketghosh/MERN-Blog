import React from "react";
import "./Post.css";

export default function Post() {
  return (
    // whole post div
    <div className="post">
      {/* post image  */}
      <img
        src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
        className="postImg"
      />

      {/* postInfo div  */}
      <div className="postInfo">
        {/* post categories  */}
        <div className="postCategories">
          {/* every single post category  */}
          <span className="postCategory">music</span>
          <span className="postCategory">life</span>
          <span className="postCategory">coding</span>
          <span className="postCategory">coding</span>
          <span className="postCategory">coding</span>
          <span className="postCategory">coding</span>
          <span className="postCategory">coding</span>
          <span className="postCategory">coding</span>
        </div>

        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus,
        error nostrum deserunt sed sint hic architecto porro fugiat at dolor,
        esse ducimus repellat eum iusto placeat eos similique. Ullam sit
        voluptates quos voluptate consectetur libero facilis ipsa quod
        obcaecati? Aliquam ipsum, doloribus mollitia similique eaque beatae
        pariatur veniam eos amet fugiat facilis, officia deleniti assumenda,
        illo minima provident voluptatibus molestiae eveniet alias consequuntur
        ut quis quaerat! Voluptatem magnam nisi, nihil dolore fugiat ducimus
        veritatis, ipsum autem quibusdam nemo blanditiis neque deleniti
        reprehenderit labore officia suscipit doloremque iste inventore?
      </p>
    </div>
  );
}
