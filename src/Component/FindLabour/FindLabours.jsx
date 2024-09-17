import React, { useState, useEffect } from "react";
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
  const navigate = useNavigate();

  const fetchLabours = async () => {
    try {
      // Construct the URL with query parameters for filtering
      const queryParams = new URLSearchParams({
        skill: filters.skillName,
        city: filters.city,
        area: filters.area,
        state: filters.state,
      }).toString();

      const response = await axios.get(
        `http://localhost:9000/api/v1/labour/filter?${queryParams}`,
        {
          headers: {
            Authorization: auth?.token,
          },
        }
      );
      const data = await response.data;
      console.log(data);
      // Assuming the response has a 'users' property containing the list of labours
      setLabours(data || []);
    } catch (error) {
      console.error("Error fetching labours:", error);
    }
  };

  useEffect(() => {
    fetchLabours(); // Fetch all labours on initial render
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
          </div>

          {/* Search button */}
          <button className="btn btn-primary mb-3" onClick={fetchLabours}>
            Search
          </button>

          <div className="row">
            {isAnyFilterApplied() ? (
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
