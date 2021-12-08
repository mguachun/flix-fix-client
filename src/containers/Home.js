import React from "react";

const Home = () => {
    return (
      <div className="ticket">
        <h3 style={{textAlign: "left", paddingLeft: "50px"}}>"<em>Movies for all"</em></h3>
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
        <strong>FlixFix</strong> is an application that helps you keep track of 
        your movie queue. It allows you to view movies you've seen in the past and logs shows you have
        planned for the future. 
        {/* <span className="how-to"> <HowTo /></span> */}
      </p> 

      </div>
    );
  };
export default Home;