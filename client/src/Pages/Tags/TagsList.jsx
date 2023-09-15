// import React from 'react'

// function TagsList() {
//   return (
//     <div>TagsList</div>
//   )
// }

// export default TagsList

import React from "react";
import "./Tags.css";

const TagsList = ({ tag }) => {
  return (
    <div className="tag">
      <h5>{tag.tagName}</h5>
      <p>{tag.tagDesc}</p>
    </div>
  );
};

export default TagsList;