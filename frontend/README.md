# Zakat Calculator frontend
This a single page app buit with Angular and Twitter Bootstrap, hosted on JG Umbraco.


## Getting set up
1. In this folder ```gulp watch``` will watch for changes and publish these to the ```dist``` folder
2. In another console, run ```http-server``` or equivalent in the ```dist``` folder.

## Local Development
Edit files in the ```src``` folder and these will be built into the ```dist```/ folder automatically by gulp.

If you are using ```http-server```, you will find the stand-alone app here: http://127.0.0.1:8080/standard.html

## Testing on Umbraco Staging
To make testing easier, a minimum amount of code is held in Umbraco and the majority of the HTML, CSS and JS are hosted on S3. Changes can then be published to S3 and imported into the Umbraco at runtime via Angular.

1. Create a file called ```aws.json``` in this folder with the following content, filling in the appropiate values with ***.

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
4. Create an Umbraco page with a custom template
5. Add the code in ```dist/umbraco-container.html``` to the template

## [Deploying to Umbraco production](#deploying-to-prod)
1. Run ```gulp``` in this folder to ensure the ```dist``` folder is up-to-date
2. Create a custom page with a custom template in Umbraco
3. Copy and paste in the code in ```dist/umbraco-container-and-app.html```
4. Add images in ```dist/img``` to Umbraco
5. Alter the image locations in the HTML and bundled CSS to match the Umbraco image locations
6. In the first line of ```dist/js/all.js```, change the URL in ```nisabSourceURL``` to match the location of the nisab JSON file
7. Finito Benito!

### Five templates are used for the build process
- ```standard-container.html``` is the standalone page that is useful for testing locally
- ```standard-app.html``` groups the partials for the stand alone page
- ```umbraco-container.html``` is the HTML snippet that needs to be added to Umbraco template along with references to the compiled JS and CSS in the ```dist``` folder
- ```umbraco-app.html``` groups the partials for the umbraco build
- ```umbraco-contain-and-app.html``` is a combination of the app and a modified container. This is all the HTML in one place for easy copying and pasting into Umbraco.


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

## Changing the image base
The base URL for inline images can be set in ```templates/standard-app.html``` and ```templates/umbraco-app.html```

Image locations in the CSS will need to be altered manually for deployment to Prod.
