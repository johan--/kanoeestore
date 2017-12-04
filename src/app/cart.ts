export interface Cart {
    "id": string,
    "type": string,
    "product_id": string,
    "name": string,
    "description": string,
    "sku": string,
    "quantity": number,
    "unit_price": {
        "amount": number,
        "currency": string,
        "includes_tax": boolean
    },
    "value": {
        "amount": number,
        "currency": string,
        "includes_tax": boolean
    },
    "links": {
        "product": string
    },
    "meta": {
        "display_price": {
            "with_tax": {
                "unit": {
                    "amount": number,
                    "currency": string,
                    "formatted": string
                },
                "value": {
                    "amount": number,
                    "currency": string,
                    "formatted": string
                }
            },
            "without_tax": {
                "unit": {
                    "amount": number,
                    "currency": string,
                    "formatted": string
                },
                "value": {
                    "amount": number,
                    "currency": string,
                    "formatted": string
                }
            }
        },
        "timestamps": {
            "created_at": string,
            "updated_at": string
        }
    }
}
