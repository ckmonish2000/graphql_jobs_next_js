interface companyType{
  name: string
  __typename:string
}

interface cities{
  name:string
  country:companyType
  __typename:string
}

interface remote{
  type:string
  __typename:string
}

interface propType{
    id?:string
    company?:companyType
    cities?:cities[]
    remotes?:remote[]
    __typename?:string
}

export default propType