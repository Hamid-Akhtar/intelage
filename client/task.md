Dynamic form application:
This challenge is to showcase your skills! We do understand this isn’t the only thing going on in your life. Please take your time so you can be as complete and thorough as you feel is necessary. Depending on your skill level it shouldn’t take too long. Don’t worry If there are things you don’t know. The purpose is to complete a working for submission to the best of your knowledge.

To the best of your abilities, develop an information collection form.

Build:
Using NPM, React, Redux, and Webpack; build a React form submission application (micro service). This application should collect, verify, and display data.
• Utilize NPM and webpack for your build and bundle. – This does not have to be production ready build. Bonus points if it does
• Should be a responsive layout – single column layout on mobile. If you can’t build a css layout without a framework like bootstrap, material UI or other, please feel free to use a framework you are most comfortable with. Bonus points if you build without a framework.
• Include unit testing,
• Utilize redux for state management

Form should include (See field-set.js file for usage. Modify as needed to complete form):
• Basic field types to show use for and capture the following field types:
• Text
• Select
• Multi-select
• Radio
• Textarea – should show new line capture during display view
• Fields: - See associated JSON for field structure – alter as needed
• name - split field inline
• first name
• last name
• email
• address 1
• region: split field inline
• city
• state
• zip
• phone
• Please select a job title (select)
• Manager
• Engineer - lead
• Engineer - mid level
• Engineer - junior
• Engineer - Front end focused
• Engineer - backend focused
• Engineer - full stack
• Please choose number of years you've been developing. (radio)
• less than 1 year
• More than 1 year but less than 3
• more than 3 years but less than 5
• more than 5 years
• Please select coding experience - select all that apply (multi-select)
• JavaScript
• HTML
• CSS
• SASS
• NodeJS
• Java
• AWS - Lambda
• AWS - IAM
• AWS - DynamoDB
• AWS - S3
• Describe why you are a good fit for the job you are applying for (textarea)
• I acknowledge that this is only a test. (checkbox)

Usability:
• Include error checking and validation and messaging (or icon) around each:
• Validation over field inputs that:
• are required
• have special input values that need common validation
• Ensure XSS practices
• Submission path - This should include an API. API can have a mock return in order to keep this a local build
• Upon submission successful - there should be a thank you that will layout out the collected data in the same layout as the form field UI.
• IE: If there is an inline field collection (first/last name), the thank you render should contain the same inline layout.
• Responsive UI - App should be responsive and show the differences

Code submission: Please send a lnk to a public repo in github that we can access for download and review

Documentation:
Documentation is always a high consideration, and most commonly overlooked, aspect of development. If you can, please include documentation where applicable

Bonuses to consider

Bonus by developer level:
Senior developer code submissions should also include/exclude the following in their setup:
• Create-react-app is excluded from the build
• 3 page SAP utilizing react-router v6 –Bonus if you include nesting if/where applicable
• Welcome page – a simple “click here to get started” is sufficient enough
• Form page – as described above
• Thank you page – display the data collected in the form

Full Stack developers showcase their knowledge by including the above and the following:
• NodeJS REST endpoint that will save to database or JSON file within AWS.  AWS should be mocked in order to work locally but should show the connection state to AWS.
 Skill set showcase bonus
• If showing Java as a knowledge, create at least one REST with Java
• Show CI/CD setup within github against repo
• Build at least one scripted architecture with Terraform or another scripted method in your knowledge base – create sub directory in repo for this. This way it can be run without affecting anything else.  Examples of at least one architecture build:
• Use terraform to script build the lambda – document the steps the terraform takes and necessary assets to complete build
• Terraform submission REST endpoint – If
• Database – terraform the database with GSI
• S3 – Terraform S3 setup with no public access restrictions
