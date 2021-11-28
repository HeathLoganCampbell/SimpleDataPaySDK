import { AccessTokenResponse, Company, Employee, CompanyComponent, EmployeeComponent, PayRun, PayGroup, } from "./models";

export default class Client 
{
  url : string;
  clientId : string;
  clientSecret : string;
  private _accessToken : string;
  public get AccessToken() : string
  {
      return this._accessToken;
  }

  constructor(url : string, clientId : string, clientSecret : string)
  {
    this.url = url;
    this.clientId = clientId;
    this.clientSecret = clientSecret;

    this.refreshAccessToken();
  }

  async refreshAccessToken()
  {
    let accessResponse = await this.generateAccessToken();
    this._accessToken = accessResponse.access_token;
  }

  generateAccessToken() : Promise<AccessTokenResponse>
  {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "client_credentials");
    urlencoded.append("client_id", this.clientId);
    urlencoded.append("client_secret", this.clientSecret);

    return fetch("https://auth.datapaylive.co.nz/connect/token",
      {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
      })
      .then(response => response.json())
      .then(result => result as AccessTokenResponse)
  }

  request<T>(url: string): Promise<T> {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + this.AccessToken);
    return fetch(url, {
                        method: 'GET',
                        headers: myHeaders,
                        redirect: 'follow'
                      })
      .then(response => {
        if (!response.ok) 
        {
          throw new Error(response.statusText)
        }
  
        return response.json() as Promise<T>
      })
  }

  getCompanies() : Promise<Company[]>
  {
    return this.request<Company[]>(`${this.url}/v/1/companies`);
  }

  getEmployees(companyId : string) : Promise<Employee[]>
  {
    return this.request<Employee[]>(`${this.url}/v/2/employees?company_id=${companyId}`);
  }

  getPayGroups(companyId : string) : Promise<PayGroup[]>
  {
    return this.request<PayGroup[]>(`${this.url}/v/1/paygroups?company_id=${companyId}`);
  }

  getPayRuns() : Promise<PayRun[]>
  {
    return this.request<PayRun[]>(`${this.url}/v/1/payruns`);
  }

  getComponentsByCompany(companyId : string) : Promise<CompanyComponent[]>
  {
    return this.request<CompanyComponent[]>(`${this.url}/v/1/companies/${companyId}/components`);
  }

  getComponentsByEmployee(componentId : string, employeeId : string) : Promise<EmployeeComponent[]>
  {
    return this.request<EmployeeComponent[]>(`${this.url}/v/2/employees/${employeeId}/components/${componentId}/values`);
  }
}