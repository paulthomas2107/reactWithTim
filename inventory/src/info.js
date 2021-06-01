import React from "react";

class Info extends React.Component {
    render() {
         const title = "This is my title";
         const showTitle = true;

         if (showTitle) {
           return (
             <div>
               <h1>Inventory System</h1>
               <p>Manage your stock.</p>
               <p>{showTitle ? title : "No title"}</p>
             </div>
           );
         } else {
           return (
             <div>
               <p>Nothing to see !</p>
             </div>
           );
         }
    }
}

export default Info;
