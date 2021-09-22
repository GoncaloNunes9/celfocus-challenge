import { http } from '../helpers/http';

export const CompanyService = {
  fetch,
  getCompany,
  getCompanyNumbers,
  getCompanyNumberDetails
}

function fetch () {
  return http.get('/companies')
}

function getCompany (companyID) {
  return http.get(`/companies/${companyID}`)
}

function getCompanyNumbers (companyID) {
  return http.get(`/phone_numbers/?company_id=${companyID}`)
}

function getCompanyNumberDetails (numberID) {
  return http.get(`/phone_numbers/${numberID}`)
}
