# Zakat Calculator frontend
This a single page app buit with Angular and Twitter Bootstrap, hosted on JG Umbraco.


## Getting setup
1. In this folder ```gulp watch``` will watch for changes and publish these to the ```dist``` folder
2. In another console, run ```http-server``` or equivalent in the ```dist``` folder.

## Development
Edit files in the ```src``` folder and these will be built into the ```dist```/ folder automatically by gulp.

### Three templates are used for the build process
- ```standard.html``` is the standalone page that is useful for testing locally
- ```app.html``` is the Angular partial that is ng-included
- ```umbraco-container.html``` is the HTML snippet that needs to be added to Umbraco template along with references to the compiled JS and CSS in the ```dist``` folder

### Partials
The partials in ```src/partials``` are imported into the templates by gulp during the build process

## Changing the suggested charities
Suggested charities are included into the partials via gulp-file-include. In ```src/partials/stage-1.html``` and ```src/partials/stage-2.html```, you will find code like this:

```
@@include('./suggested-charity-no-cta.html', {
    "charity_id": "charity_id",
    "charity_name": "charity_name",
    "charity_logo_url": "charity_logo_url",
    "charity_description": "charity_description",
    "charity_reg_info": "charity_reg_info"
})
```

This data will be imported into the built HTML via gulp-file-include.

## Deployment
1. Create a file called ```aws.json``` in this folder with the following content, filling in the values with ***.

	```
	{
	  "key": "***",
	  "secret": "***",
	  "bucket": "***",
	  "region": "eu-west-1"
	}
	```

2. In this folder, run ```gulp publish```. This will build the files and upload them to S3
3. Reference the compiled JS and CSS from the Umbraco template. 