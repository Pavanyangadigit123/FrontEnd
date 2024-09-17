import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FindLabour.css"; // Importing CSS for styling
import Layout from "../Layout/Layout";

const FindLabour = () => {
  const [labours, setLabours] = useState([]);
  const [filters, setFilters] = useState({
    area: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
    skillName: "",
  });
  const navigate = useNavigate();

  const fetchLabours = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/labour");
      const data = await response.json();
      setLabours(data);
      
    } catch (error) {
      console.error("Error fetching labours:", error);
    }
  };

  useEffect(() => {
    fetchLabours();
  }, []);

  const handleSeeProfile = (labour) => {
    navigate("/profile", { state: { labour } });
  };

  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  const isAnyFilterApplied = () => {
    return Object.values(filters).some((filter) => filter.trim() !== "");
  };

  const filteredLabours = labours.filter((labour) => {
    console.log(labour.labourSkillDtos);
    return (
      (filters.area === "" ||
        labour.area?.toLowerCase().includes(filters.area.toLowerCase())) &&
      (filters.city === "" ||
        labour.city?.toLowerCase().includes(filters.city.toLowerCase())) &&
      (filters.state === "" ||
        labour.state?.toLowerCase().includes(filters.state.toLowerCase())) &&
      (filters.country === "" ||
        labour.country
          ?.toLowerCase()
          .includes(filters.country.toLowerCase())) &&
          (filters.zipCode === "" ||
            labour.zipCode?.toLowerCase().includes(filters.zipCode.toLowerCase())) &&
          (filters.skillName === "" ||
            labour.labourSkillDtos?.some(skill =>
              skill.skillName.toLowerCase().includes(filters.skillName.toLowerCase())
            ))
        );
      });
  return (
    <Layout>
      <div
        className="background"
        style={{ background: "url(searchimage2.jpg)" }}
      >
        <div className="container py-6">
          {!isAnyFilterApplied() && (
            <div className="alert alert-warning text-center">
              Please enter at least one filter to search for labours.
            </div>
          )}

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
            {/* <input
              type="text"
              className="form-control mb-1 filter-input"
              name="country"
              placeholder="Search by country..."
              value={filters.country}
              onChange={handleFilterChange}
            /> */}
            <input
              type="text"
              className="form-control mb-1 filter-input"
              name="zipCode"
              placeholder="Search by zip code..."
              value={filters.zipCode}
              onChange={handleFilterChange}
            />
          </div>

          <div className="row">
            {isAnyFilterApplied() ? (
              filteredLabours.length > 0 ? (
                filteredLabours.map((labour) => (
                 
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
                          {labour.labourSkillDtos &&
                          labour.labourSkillDtos.length > 0
                            ? labour.labourSkillDtos
                                .map((skill) => skill.skillName)
                                .join(", ")
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
                  <p className="text-center">
                    No labours found matching your criteria.
                  </p>
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
