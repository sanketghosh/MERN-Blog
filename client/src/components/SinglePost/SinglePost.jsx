import React from "react";
import "./SinglePost.css";

export default function SinglePost() {
  return (
    // whole single post component
    <div className="singlePost">
      {/* a wrapper of single post  */}
      <div className="singlePostWrapper">
        {/* the image goes here  */}
        <img
          className="singlePostImage"
          src="https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        {/* title of the post  */}
        <h1 className="singlePostTitle">
          An introduction to the business analytics and marketing: Business made
          easy
          {/* post delete and edit buttons/svg container  */}
          <div className="singlePostEditDel">
            {/* two edit del SVGs goes here  */}

            <svg
              className="editDelSvg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M0 64C0 28.65 28.65 0 64 0H224V128C224 145.7 238.3 160 256 160H384V299.6L289.3 394.3C281.1 402.5 275.3 412.8 272.5 424.1L257.4 484.2C255.1 493.6 255.7 503.2 258.8 512H64C28.65 512 0 483.3 0 448V64zM256 128V0L384 128H256zM564.1 250.1C579.8 265.7 579.8 291 564.1 306.7L534.7 336.1L463.8 265.1L493.2 235.7C508.8 220.1 534.1 220.1 549.8 235.7L564.1 250.1zM311.9 416.1L441.1 287.8L512.1 358.7L382.9 487.9C378.8 492 373.6 494.9 368 496.3L307.9 511.4C302.4 512.7 296.7 511.1 292.7 507.2C288.7 503.2 287.1 497.4 288.5 491.1L303.5 431.8C304.9 426.2 307.8 421.1 311.9 416.1V416.1z" />
            </svg>
            <svg
              className="editDelSvg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM394.8 466.1C393.2 492.3 372.3 512 346.9 512H101.1C75.75 512 54.77 492.3 53.19 466.1L31.1 128H416L394.8 466.1z" />
            </svg>
          </div>
        </h1>
        {/* single post author name and post date container  */}
        <div className="singlePostInfo">
          {/* author span  */}
          <span className="singlePostInfoAuthor">
            Author : <b>John Doe</b>
          </span>
          {/* date span  */}
          <span className="singlePostInfoDate">1 hour ago</span>
        </div>
        {/* the whole post goes here  */}
        <p className="singlePostWriting">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
          natus reiciendis, aperiam possimus eius, blanditiis ipsa, quibusdam
          accusamus ducimus facere exped recusandae sapiente id dicta iure,
          provident quam doloremque doloribus velit alias labore repellendus
          libero? Rem officia nobis saepe eveniet, in provident, suscipit dicta
          sapiente, quas esse corporis ipsam facere debitis explicabo tenetur
          aliquam quisquam alias assumenda a possimus praesentium. Labore error
          vitae consequuntur possimus harum, quos sapiente commodi? Ex cumque
          ipsum rerum, quia voluptatibus tempora facilis quam. Quidem iusto
          explicabo, reiciendis cumque totam accusantium praesentium. Vero omnis
          quam, est alias ex cum expedita placeat ab possimus, beatae tempora
          aliquam unde laborum ad amet autem, a minima minus laboriosam optio
          quasi aspernatur deleniti porro? Deserunt, consectetur nobis dolore
          ducimus ex, soluta ut laborum ipsam alias voluptates ratione. Error
          pariatur quibusdam deleniti maiores enim alias a excepturi inventore
          suscipit ratione odit porro, dolore facere harum necessitatibus
          explicabo? Consequatur corrupti asperiores illo culpa perspiciatis
          fugiat molestiae ut error aut sunt, accusantium eius quis.
          Necessitatibus atque odio consequuntur nobis quaerat, sit laudantium
          eaque perspiciatis tempora exercitationem quas eius ipsum nisi vel
          quam. Mollitia illo magnam sint veritatis ut esse dicta, dolor facere
          consectetur consequatur? Aperiam hic provident dignissimos voluptatem
          quibusdam accusantium sit suscipit earum eaque? Optio itaque, et
          excepturi eaque ut accusamus distinctio iste iusto nesciunt eligendi.
          Sint, placeat! Ratione soluta deleniti error blanditiis maiores odio
          pariatur adipisci, deserunt similique laborum cumque voluptas maxime.
        </p>
      </div>
    </div>
  );
}
