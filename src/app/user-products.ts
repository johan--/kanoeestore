export interface UserProducts {
    "data": [{
        "type": string,
        "id": string,
        "name": string,
        "slug": string,
        "sku": string,
        "manage_stock": boolean,
        "description": string,
        "price": [{
            "amount": number,
            "currency": string,
            "includes_tax": boolean
        }],
        "status": string,
        "commodity_type": string,
        "meta": {
            "timestamps": {
                "created_at": string,
                "updated_at": string
            },
            "display_price": {
                "with_tax": {
                    "amount": number,
                    "currency": string,
                    "formatted": string
                },
                "without_tax": {
                    "amount":  number,
                    "currency": string,
                    "formatted": string
                }
            },
            "stock": {
                "level": number,
                "availability": string
            }
        },
        "relationships": {
            "files": {
                "data": [{
                    "type": string,
                    "id": string
                }]
            },
            "main_image": {
                "data": {
                    "type": string,
                    "id": string
                }
            }
        }
    }],
    "included": {
		"main_images": [{
			"type": string,
			"id": string,
			"link": {
				"href": string
			},
			"file_name": string,
			"mime_type": string,
			"file_size": string,
			"public": boolean,
			"meta": {
				"dimensions": {
					"width": number,
					"height": number
				},
				"timestamps": {
					"created_at": string
				}
			},
			"links": {
				"current": string
			}
		}]
	}
}
