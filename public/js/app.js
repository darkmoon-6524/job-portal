// script.js
document.addEventListener("DOMContentLoaded", function () {
    const companyFilter = document.getElementById("companyFilter");
    const companies = document.querySelectorAll(".company");
  
    companyFilter.addEventListener("change", function () {
      const selectedCompany = companyFilter.value;
  
      companies.forEach((company) => {
        if (selectedCompany === "all" || company.dataset.company === selectedCompany) {
          company.style.display = "block";
        } else {
          company.style.display = "none";
        }
      });
    });
  });