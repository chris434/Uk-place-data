const API_PARAMS_MAP = new Map([
  ['Postcode', 'postcode-district'],
  ['Country', 'country'],
  ['AreaType', 'types'],
  ['Region', 'region'],

])

export function getApiJoinedParams(params: {filter:[]} | undefined) {
  console.log(params)
    if(typeof params !== 'object') return ''

let joinedParams=''
  for (let i = 0; i < params.filter.length; i += 2) {
    joinedParams = `${joinedParams}${params.filter[i] !== 'PlaceType' ? `${ API_PARAMS_MAP.get(params.filter[i])}/`:''}${params.filter[i+1]}/`
  }
return joinedParams
}

export function getClientJoinedParams(params: {paramKey:string,paramValue:string}[]) {
  const joinedParams = params.map(param => { return Object.values(param) }).join(',').replace(/,/g, '/')
  console.log(joinedParams)
   return joinedParams 
}

export function getFirstParam(params: string[] | undefined) {
 if(!Array.isArray(params)) return '/towns'

    const TOWN_PARAM =['Postcode', 'Country']

    if (TOWN_PARAM.includes(params[0])) return '/towns'
    return''
}


  