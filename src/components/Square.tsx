import React from "react";

type SquareProps = {
  value: string | null;
  canPlace: boolean;
  onClick: () => void;
  num: number;
};

const Square: React.FC<SquareProps> = ({ value, canPlace, onClick, num }) => {
  const name = value ? value : "none";
  let className = "square";
  className += " " + (canPlace ? "square-o" : "square-x");
  return (
    <div>
      <button className={className} onClick={onClick}>
        <span className={name}></span> <span>{num}</span>
      </button>
    </div>
  );
};

export default Square;


// import React from "react";

// const Square = ({ value, canPlace, onClick, num }) => {
//   const name = value ? value : "none";
//   let className = "square";
//   className += " " + (canPlace ? "square-o" : "square-x");
//   return (
//     <div>
//       <button className={className} onClick={onClick}>
//         <span className={name}></span> <span>{num}</span>
//       </button>
//     </div>
//   );
// };

// export default Square;
