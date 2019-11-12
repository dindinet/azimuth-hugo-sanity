export default {
    "type": "object",
    "name": "section_pricing",
    "title": "Pricing Section",
    "fields": [
        {
            "type": "string",
            "name": "section_id",
            "title": "Element ID of this section",
            "description": "The element ID can be used to link to this section from another section",
            "validation": null
        },
        {
            "type": "string",
            "name": "title",
            "title": "Title",
            "description": "The title of this section",
            "validation": null
        },
        {
            "type": "string",
            "name": "subtitle",
            "title": "Subtitle",
            "description": "The subtitle of the section.",
            "validation": null
        },
        {
            "type": "string",
            "name": "bg",
            "title": "Background",
            "description": "The background of the section.",
            "initialValue": "gray",
            "validation": null,
            "options": {
                "list": [
                    "gray",
                    "white"
                ]
            }
        },
        {
            "type": "array",
            "name": "pricingplans",
            "title": "Pricing Plans",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "title",
                            "title": "Title",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "price",
                            "title": "Price",
                            "validation": null
                        },
                        {
                            "type": "markdown",
                            "name": "details",
                            "title": "Details",
                            "validation": null
                        },
                        {
                            "type": "boolean",
                            "name": "highlight",
                            "title": "Highlight",
                            "description": "Make the plan stand out by adding a distinctive style.",
                            "validation": null
                        },
                        {
                            "type": "array",
                            "name": "actions",
                            "title": "Action Buttons",
                            "validation": null,
                            "of": [
                                {
                                    "type": "action"
                                }
                            ]
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "title"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "type",
            "title": "Reference Type Name",
            "description": "Name of the Stackbit object model, used by fields of type reference",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "section_pricing"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "object"
                ]
            }
        }
    ],
    "preview": {
        "select": {
            "title": "title"
        }
    }
}