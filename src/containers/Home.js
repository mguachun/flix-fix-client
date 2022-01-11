import React from "react";
// import StarRating from "../StarRating";

const Home = () => {
    return (
      <div className="movie">
        
        <p
        style={{
          
          textAlign: "center",
          fontSize: 21,
          padding: "30px",
          paddingRight: "20px",
          paddingLeft: "20px",
          borderStyle: "dashed",
          borderRadius: "25px",
          borderWidth: "2px",
          borderColor: "#3621ad",
          marginLeft: "20px",
          marginRight: "20px",
  
        }}
      >
        <h1 style={{textAlign: "center"}}><strong>FlixFix</strong></h1> 
        <h3 style={{textAlign: "center"}}>"<em>Movies for all"</em></h3>is an application that helps you keep track of 
        your movie queue. It allows you to view movies you've seen in the past and logs shows you have
        planned for the future. 

      </p> 
      {/* <StarRating /> */}

      </div>
    );
  };
export default Home;