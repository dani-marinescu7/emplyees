import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CompanyForm from "../Components/CompanyForm";

const createCompany = (company) => {
  return fetch("/api/companies", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(company),
  }).then((res) => res.json());
};

const CompanyCreator = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleCreateCompany = (company) => {
    setLoading(true);

    createCompany(company)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
  };

  return (
    <CompanyForm
      onCancel={() => navigate("/")}
      disabled={loading}
      onSave={handleCreateCompany}
    />
  );
};

export default CompanyCreator;
