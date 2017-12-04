export interface UserProductsImages {
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
