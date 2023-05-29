import { FILTER_DATA, Filter_DATA_HiERARCHY_INDEXES } from '../data/filterData'

export function getFilterData(previousType:string,i:number) {
    console.log(previousType)
    if (previousType ===undefined) return mappedFilterData('root')

    return mappedFilterData(previousType)
}

function mappedFilterData(type:string) {
    const filterData = Filter_DATA_HiERARCHY_INDEXES.get(type)

    const mappedFilterData = filterData?.map(filterDataIndex => {
        return FILTER_DATA[filterDataIndex]
    })
    return mappedFilterData
}

