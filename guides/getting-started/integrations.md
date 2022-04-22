# Integrations

webdoc provides integrations for analytics, search, social graphs, and with more to come. These integrations are configured in the `template.integrations`section of the webdoc configuration.

## Analytics

webdoc allows you to add analytics tracking from [Google Analytics](https://analytics.google.com) or [Plausible](https://plausible.io/). You can configure which analytics provide you use with `template.integrations.analytics.provider`.

### Google Analytics

```json
{
    "template": {
        "integrations": {
            "analytics": {
                "provider": "google-analytics", // Adds GA script to generated pages
                "trackingID": "UA-XXX-00"       // Unique identifier from GA
            }
        }
    }
}
```

### Plausible

Plausible is an open-source and privacy friendly analytics service.

```json
{
    "template": {
        "integrations": {
            "analytics": {
                "provider": "plausible",     // Adds script from plausible.io
                "nakedDomain": "example.com" // Site domain tagged in plausible.io dashboard
            }
        }
    } 
}
```

## Search

webdoc provides an integration with Algolia DocSearch so you can serve full-text search to your audience. You will have to use the Algolia DocSearch (legacy) [crawler](https://docsearch.algolia.com/docs/legacy/run-your-own) to index your website before configuring the integration. The webdoc integration adds a text search bar in the app bar.

You will need your application id, its api key, and the index name that provides search result in the configuration:
```json
{
    "template": {
        "integrations": {
            "search": {
              "provider": "algolia",
              "apiKey": "kadlfj232983lkqwem",
              "indexName": "webdoc-example",
              "appId": "349o39841;akdsfu"
            }
        }
    }
}
```
