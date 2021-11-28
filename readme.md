# `Simple DataPay API SDK`

## Eample of usage

```typescript
async function example()
{
   let client = new Client("https://www.datapaylive.com.au/api", "CLIENT_ID", "CLIENT_SECRET");
   // Get all companies a user has access to
   let companies = await client.getCompanies();
   // Gets all employees in the company
   let employees = await client.getEmployees(companies[0].Id);
   // Get PayRuns of a company
   let payruns = await client.getPayRuns(companies[0].Id);
   // Get the paygroups
   let payGroups = await client.getPayGroups(companies[0].Id);
}
```

## useful learnings 

Country => Company => PayGroup => PayRun => Employee / PayPacket