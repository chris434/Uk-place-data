export type placeType = {
    places: {
        data: [{
            name_1: string, region: string,
            county_unitary: string, country: string,
            postcode_district: string, local_type: string
            type: string
        }],
        last_page: number,
        current_page: number,
        from: number,
        to: number,
        total:number,
    }
}