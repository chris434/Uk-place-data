export const FILTER_DATA = ['Postcode', 'Country','AreaType','Region','PlaceType']
export const FILTER_SUB_DATA = new Map([
    ['Country', ['England', 'Scotland', 'Wales']],
    ['Region', ["East Midlands", "Eastern", "London", "North East", "North West", "South East", "South West",  "West Midlands", "Yorkshire and the Humber"]],
  ['AreaType',["hydrography","landcover","landform","other","populatedPlace"]]
])

export const Filter_DATA_HiERARCHY_INDEXES = new Map([
['root', [0, 1, 2]],
    ['Country', [3]],
    ['AreaType', [4]],
['PlaceType',[0,3]]
])

export const AREA_TYPE_DATA = new Map([
    ['hydrography', ["Bay", "Channel", "Estuary", "Inland Water", "Sea", "Tidal Water", "Waterfall"]],
    ['landcover', ["Beach", "Other Landcover", "Urban Greenspace", "Wetland", "Woodland Or Forest"]],
    ['landform', ["Cirque Or Hollow", "Cliff Or Slope", "Coastal Headland", "Group Of Islands", "Hill Or Mountain", "Hill Or Mountain Ranges", "Island", "Other Coastal Landform", "Other Landform", "Spot Height", "Valley"]],
    ['other',["Chemical Works","Electricity Distribution","Electricity Production","Further Education","Further Education,Higher or University Education","Further Education,Non State Primary Education,Non State Secondary Education","Further Education,Non State Secondary Education","Further Education,Primary Education,Secondary Education","Further Education,Secondary Education","Gas Distribution or Storage","Higher or University Education","Hospice","Hospital","Medical Care Accommodation","Non State Primary Education","Non State Primary Education,Non State Secondary Education","Non State Secondary Education","Oil Distribution or Storage","Oil Refining","Oil Terminal","Primary Education","Primary Education,Secondary Education","Secondary Education","Special Needs Education"]],
    ['populatedPlace',["City","Hamlet","Other Settlement","Suburban Area","Town","Village"]]
])

export const CAN_ADD_FILTER_INDEXES=new Map([[0,false],[1,true],[2,true],[3,false],[4,true]])





