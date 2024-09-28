// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FindLabour.css"; // Importing CSS for styling
// import Layout from "../Layout/Layout";
// import { useAuth } from "../../context/auth";
// import axios from "axios";

// const FindLabour = () => {
//   const [auth] = useAuth();
//   const [labours, setLabours] = useState([]);
//   const [filters, setFilters] = useState({
//     area: "",
//     city: "",
//     state: "",
//     skillName: "",
//   });
//   const navigate = useNavigate();

//   const fetchLabours = async () => {
//     try {
//       // Construct the URL with query parameters for filtering
//       const queryParams = new URLSearchParams({
//         skill: filters.skillName,
//         city: filters.city,
//         area: filters.area,
//         state: filters.state,
//       }).toString();

//       const response = await axios.get(
//         `http://localhost:9000/api/v1/labour/filter?${queryParams}`,
//         {
//           headers: {
//             Authorization: auth?.token,
//           },
//         }
//       );

//       console.log(response);
//       const data = await response.data;
//       console.log(data);
//       // Assuming the response has a 'users' property containing the list of labours
//       setLabours(data || []);
//     } catch (error) {
//       console.error("Error fetching labours:", error);
//     }
//   };

//   useEffect(() => {
//     fetchLabours(); // Fetch all labours on initial render
//   }, []);

//   const handleSeeProfile = (labour) => {
//     navigate("/profile", { state: { labour } });
//   };

//   const handleFilterChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const isAnyFilterApplied = () => {
//     return Object.values(filters).some((filter) => filter.trim() !== "");
//   };

//   return (
//     <Layout>
//       <div
//         className="background"
//         style={{ background: "url(searchimage2.jpg)" }}
//       >
//         <div className="container py-6">
//           {!isAnyFilterApplied() && (
//             <div className="alert alert-warning text-center">
//               Please enter at least one filter to search for labours.
//             </div>
//           )}

//           <div className="filter-container mb-3">
//             <input
//               type="text"
//               className="form-control mb-1 filter-input"
//               name="skillName"
//               placeholder="Search by skill name..."
//               value={filters.skillName}
//               onChange={handleFilterChange}
//             />
//             <input
//               type="text"
//               className="form-control mb-1 filter-input"
//               name="area"
//               placeholder="Search by area..."
//               value={filters.area}
//               onChange={handleFilterChange}
//             />
//             <input
//               type="text"
//               className="form-control mb-1 filter-input"
//               name="city"
//               placeholder="Search by city..."
//               value={filters.city}
//               onChange={handleFilterChange}
//             />
//             <input
//               type="text"
//               className="form-control mb-1 filter-input"
//               name="state"
//               placeholder="Search by state..."
//               value={filters.state}
//               onChange={handleFilterChange}
//             />
//           </div>

//           {/* Search button */}
//           <button className="btn btn-primary mb-3" onClick={fetchLabours}>
//             Search
//           </button>

//           <div className="row">
//             {isAnyFilterApplied() ? (
//               labours.length > 0 ? (
//                 labours.map((labour) => (
//                   <div className="col-md-4 mb-4" key={labour.id}>
//                     <div className="card labour-card">
//                       <div className="card-body text-black">
//                         <h5 className="card-title">
//                           {labour.firstName} {labour.lastName}
//                         </h5>
//                         <p className="card-text">
//                           Daily Wages: ${labour.dailyWages}
//                         </p>
//                         <p className="card-text">
//                           <strong>Skills:</strong>{" "}
//                           {labour.labourSkillDtos &&
//                           labour.labourSkillDtos.length > 0
//                             ? labour.labourSkillDtos
//                                 .map((skill) => skill.skillName)
//                                 .join(", ")
//                             : "No skills listed"}
//                         </p>
//                         <button
//                           className="btn btn-outline-dark btn-rounded btn-sm"
//                           onClick={() => handleSeeProfile(labour)}
//                         >
//                           See profile
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="col-12">
//                   <p className="text-center">
//                     No labours found matching your criteria.
//                   </p>
//                 </div>
//               )
//             ) : (
//               <div className="col-12">
//                 {/* Empty state handled by the alert at the top */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default FindLabour;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./FindLabour.css"; // Importing CSS for styling
// import Layout from "../Layout/Layout";
// import { useAuth } from "../../context/auth";
// import axios from "axios";

// const FindLabour = () => {
//   const [auth] = useAuth();
//   const [labours, setLabours] = useState([]);
//   const [filters, setFilters] = useState({
//     area: "",
//     city: "",
//     state: "",
//     skillName: "",
//   });
//   const navigate = useNavigate();

//   // Function to fetch labours based on applied filters
//   const fetchLabours = async () => {
//     try {
//       // Filter out empty values from filters
//       const filteredParams = Object.fromEntries(
//         Object.entries(filters).filter(([key, value]) => value.trim() !== "")
//       );

//       // Construct the URL with only the non-empty query parameters
//       const queryParams = new URLSearchParams(filteredParams).toString();

//       const response = await axios.get(
//         `http://localhost:9000/api/v1/labour/filter?${queryParams}`,
//         {
//           headers: {
//             Authorization: auth?.token,
//           },
//         }
//       );

//       const data = await response.data;
//       setLabours(data || []);
//     } catch (error) {
//       console.error("Error fetching labours:", error);
//     }
//   };

//   // Run fetchLabours on initial render
//   useEffect(() => {
//     fetchLabours(); // Fetch labours on page load
//   }, []); 

//   // Navigate to profile page when "See Profile" button is clicked
//   const handleSeeProfile = (labour) => {
//     navigate("/profile", { state: { labour } });
//   };

//   // Update filter state when input fields change
//   const handleFilterChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Check if any filters have been applied
//   const isAnyFilterApplied = () => {
//     return Object.values(filters).some((filter) => filter.trim() !== "");
//   };

//   return (
//     <Layout>
//       <div
//         className="background"
//         style={{ background: "url(searchimage2.jpg)" }}
//       >
//         <div className="container py-6">
//           {!isAnyFilterApplied() && (
//             <div className="alert alert-warning text-center">
//               Please enter at least one filter to search for labours.
//             </div>
//           )}

//           <div className="filter-container mb-3">
//             <input
//               type="text"
//               className="form-control mb-1 filter-input"
//               name="skillName"
//               placeholder="Search by skill name..."
//               value={filters.skillName}
//               onChange={handleFilterChange}
//             />
//             <input
//               type="text"
//               className="form-control mb-1 filter-input"
//               name="area"
//               placeholder="Search by area..."
//               value={filters.area}
//               onChange={handleFilterChange}
//             />
//             <input
//               type="text"
//               className="form-control mb-1 filter-input"
//               name="city"
//               placeholder="Search by city..."
//               value={filters.city}
//               onChange={handleFilterChange}
//             />
//             <input
//               type="text"
//               className="form-control mb-1 filter-input"
//               name="state"
//               placeholder="Search by state..."
//               value={filters.state}
//               onChange={handleFilterChange}
//             />
//           </div>

//           {/* Search button */}
//           <button className="btn btn-primary mb-3" onClick={fetchLabours}>
//             Search
//           </button>

//           <div className="row">
//             {isAnyFilterApplied() ? (
//               labours.length > 0 ? (
//                 labours.map((labour) => (
//                   <div className="col-md-4 mb-4" key={labour.id}>
//                     <div className="card labour-card">
//                       <div className="card-body text-black">
//                         <h5 className="card-title">
//                           {labour.firstName} {labour.lastName}
//                         </h5>
//                         <p className="card-text">
//                           Daily Wages: ${labour.dailyWages}
//                         </p>
//                         <p className="card-text">
//                           <strong>Skills:</strong>{" "}
//                           {labour.labourSkillDtos &&
//                           labour.labourSkillDtos.length > 0
//                             ? labour.labourSkillDtos
//                                 .map((skill) => skill.skillName)
//                                 .join(", ")
//                             : "No skills listed"}
//                         </p>
//                         <button
//                           className="btn btn-outline-dark btn-rounded btn-sm"
//                           onClick={() => handleSeeProfile(labour)}
//                         >
//                           See profile
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="col-12">
//                   <p className="text-center">
//                     No labours found matching your criteria.
//                   </p>
//                 </div>
//               )
//             ) : (
//               <div className="col-12">
//                 {/* Empty state handled by the alert at the top */}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default FindLabour;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FindLabour.css"; // Importing CSS for styling
import Layout from "../Layout/Layout";
import { useAuth } from "../../context/auth";
import axios from "axios";

const FindLabour = () => {
  const [auth] = useAuth();
  const [labours, setLabours] = useState([]);
  const [filters, setFilters] = useState({
    area: "",
    city: "",
    state: "",
    skillName: "",
  });
  const [isSearching, setIsSearching] = useState(false); // To control when searching is triggered
  const navigate = useNavigate();

  // Fetch labours based on filters when search button is clicked
  const fetchLabours = async () => {
    try {
      // Filter out empty values
      const filteredParams = Object.fromEntries(
        Object.entries(filters).filter(([key, value]) => value.trim() !== "")
      );

      // Construct URL with only non-empty filters
      const queryParams = new URLSearchParams(filteredParams).toString();

      const response = await axios.get(
        `http://localhost:9000/api/v1/labour/filter?${queryParams}`,
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );

      const data = await response.data;
      setLabours(data || []);
    } catch (error) {
      console.error("Error fetching labours:", error);
    }
  };

  // Navigate to profile page when "See Profile" button is clicked
  const handleSeeProfile = (labour) => {
    navigate("/profile", { state: { labour } });
  };

  // Update filters based on user input
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  // Check if any filters are applied
  const isAnyFilterApplied = () => {
    return Object.values(filters).some((filter) => filter.trim() !== "");
  };

  // Handle search button click event
  const handleSearch = () => {
    setIsSearching(true); // This will trigger the search
    fetchLabours(); // Fetch labours with applied filters
  };

  return (
    <Layout>
      <div className="background" style={{ background: "url(searchimage2.jpg)" }}>
        <div className="container py-6">
          {!isAnyFilterApplied() && !isSearching && (
            <div className="alert alert-warning text-center">
              Please enter at least one filter to search for labours.
            </div>
          )}

          {/* Filter Inputs */}
          <div className="filter-container mb-3">
            <input
              type="text"
              className="form-control mb-1 filter-input"
              name="skillName"
              placeholder="Search by skill name..."
              value={filters.skillName}
              onChange={handleFilterChange}
            />
            <input
              type="text"
              className="form-control mb-1 filter-input"
              name="area"
              placeholder="Search by area..."
              value={filters.area}
              onChange={handleFilterChange}
            />
            <input
              type="text"
              className="form-control mb-1 filter-input"
              name="city"
              placeholder="Search by city..."
              value={filters.city}
              onChange={handleFilterChange}
            />
            <input
              type="text"
              className="form-control mb-1 filter-input"
              name="state"
              placeholder="Search by state..."
              value={filters.state}
              onChange={handleFilterChange}
            />
          </div>

          {/* Search Button */}
          <button className="btn btn-primary mb-3 mx-auto"  style={{ width: '300px', justifyContent:"center" }} onClick={handleSearch}>
            Search
          </button>

          {/* Labours List */}
          <div className="row">
            {isSearching ? (
              labours.length > 0 ? (
                labours.map((labour) => (
                  <div className="col-md-4 mb-4" key={labour.id}>
                    <div className="card labour-card">
                      <div className="card-body text-black">
                        <h5 className="card-title">
                          {labour.firstName} {labour.lastName}
                        </h5>
                        <p className="card-text">
                          Daily Wages: ${labour.dailyWages}
                        </p>
                        <p className="card-text">
                          <strong>Skills:</strong>{" "}
                          {labour.labourSkillDtos && labour.labourSkillDtos.length > 0
                            ? labour.labourSkillDtos.map((skill) => skill.skillName).join(", ")
                            : "No skills listed"}
                        </p>
                        <button
                          className="btn btn-outline-dark btn-rounded btn-sm"
                          onClick={() => handleSeeProfile(labour)}
                        >
                          See profile
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p className="text-center">No labours found matching your criteria.</p>
                </div>
              )
            ) : (
              <div className="col-12">
                {/* Empty state handled by the alert at the top */}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FindLabour;


