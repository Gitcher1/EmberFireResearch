export const formatDate=(d:string)=>new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",timeZone:"UTC"}).format(new Date(`${d}T00:00:00Z`));
