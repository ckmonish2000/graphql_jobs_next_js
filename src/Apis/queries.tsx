import { gql } from "@apollo/client";

const All_Jobs = gql`
query JOBS{
  jobs{
    id
    company{
      name
    }
    cities{
      name
      country{
        name
      }
    }
        remotes{
          type
        }
  }
}
`

export{
  All_Jobs
}