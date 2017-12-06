export interface CustomerInfoAddress {
    data: {
        customer: {
            name: string,
            email: string
        },
        billing_address: {
            first_name: string,
            last_name: string,
            company_name?: string,
            line_1: string,
            line_2?: string,
            city: string,
            postcode: string,
            county: string,
            country: string
        },
        shipping_address: {
            first_name: string,
            last_name: string,
            company_name?: string,
            line_1: string,
            line_2?: string,
            city: string,
            postcode:string,
            county: string,
            country: string,
            instructions?: string
        }
    }
}
