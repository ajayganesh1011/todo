// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function List() {
//     const [data, setData] = useState([]);
//   const [search, setSearch] = useState("");
//   const [isEditing, setIsEditing] = useState(null);
//   const [newItem, setNewItem] = useState("");
//   const [editedValue, setEditedValue] = useState("");
//   const [sortOrder, setSortOrder] = useState("asc");

//   // Fetch data from JSONPlaceholder
//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
//       .then((response) => setData(response.data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   // Add a new item
//   const handleAdd = () => {
//     if (newItem.trim() === "") return;
//     const newEntry = {
//       id: data.length + 1,
//       title: newItem,
//     };
//     setData([...data, newEntry]);
//     setNewItem("");
//   };

//   // Delete an item
//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   // Edit an item
//   const handleEdit = (id, title) => {
//     setIsEditing(id);
//     setEditedValue(title);
//   };

//   const handleSave = (id) => {
//     setData(
//       data.map((item) => (item.id === id ? { ...item, title: editedValue } : item))
//     );
//     setIsEditing(null);
//   };

//   const handleSort = () => {
//     const sortedData = [...data].sort((a, b) => {
//       if (sortOrder === "asc") {
//         return a.title.localeCompare(b.title);
//       } else {
//         return b.title.localeCompare(a.title);
//       }
//     });
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     setData(sortedData);
//   };
//   return (
//     <>
//     <div style={{ padding: "20px" }}>
//       <h2>Data List</h2>

//       {/* Search Field */}
//       <input
//         type="text"
//         placeholder="Search by title"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         style={{ marginBottom: "10px", padding: "5px", width: "100%" }}
//       />

//       {/* Add New Item */}
//       <div style={{ marginBottom: "10px" }}>
//         <input
//           type="text"
//           placeholder="Add new item"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//           style={{ padding: "5px", marginRight: "5px" }}
//         />
//         <button onClick={handleAdd} style={{ padding: "5px 10px" }}>
//           Add
//         </button>
//       </div>

//       {/* Table */}
//       <table style={{ width: "100%", borderCollapse: "collapse" }}>
//         <thead>
//           <tr>
//             <th style={{ border: "1px solid black", padding: "5px" }}>ID</th>
//             <th style={{ border: "1px solid black", padding: "5px" }}>
//               Title
//               <button onClick={handleSort} style={{ marginLeft: "5px" }}>
//                 {sortOrder === "asc" ? "Sort Desc" : "Sort Asc"}
//               </button>
//             </th>
//             <th style={{ border: "1px solid black", padding: "5px" }}>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data
//             .filter((item) =>
//               item.title.toLowerCase().includes(search.toLowerCase())
//             )
//             .map((item) => (
//               <tr key={item.id}>
//                 <td style={{ border: "1px solid black", padding: "5px" }}>
//                   {item.id}
//                 </td>
//                 <td style={{ border: "1px solid black", padding: "5px" }}>
//                   {isEditing === item.id ? (
//                     <input
//                       type="text"
//                       value={editedValue}
//                       onChange={(e) => setEditedValue(e.target.value)}
//                     />
//                   ) : (
//                     item.title
//                   )}
//                 </td>
//                 <td style={{ border: "1px solid black", padding: "5px" }}>
//                   {isEditing === item.id ? (
//                     <button
//                       onClick={() => handleSave(item.id)}
//                       style={{ marginRight: "5px" }}
//                     >
//                       Save
//                     </button>
//                   ) : (
//                     <button
//                       onClick={() => handleEdit(item.id, item.title)}
//                       style={{ marginRight: "5px" }}
//                     >
//                       Edit
//                     </button>
//                   )}
//                   <button
//                     onClick={() => handleDelete(item.id)}
//                     style={{ backgroundColor: "red", color: "white" }}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>
//     </div>

//     </>
//   )
// }

// export default List

import React from 'react'

function List() {
  return (
    <div>List</div>
  )
}

export default List