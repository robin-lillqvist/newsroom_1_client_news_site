# Newsroom Project | Team 1
### Authors
[Pierre]()
[Kayla]()
[Robin]()
[Blake]()
[Daniel]()
[Thomas]()

### Workflow Ground Rules

* Two people outside of that pair programming team should independently review each PR before we merge
    * spend more than 5 min
    * The two reviewers should review with one of the original coders so changes can be made as needed
    * Items to always check prior to review:
        * URLs are linked to heroku and not local host
        * Check formatting
        * Check naming standards and consistency
        * Check semaphore is green
        * Update PT
        * Check that name and description meet format pinned in channel
        * Make sure that screen shots are include for frontend, include lowfi/wireframes and feature screenshots
* When starting a new feature or chore
    * Use snake case for branch name
    * Pull from upstream into default branch before branching
    * All branches should be from default branch
    * Update PT
    * As soon as a commit has been made, set up a PR with WIP in title
* While working on a feature/chore
    * Clear, descriptive commit messages
* Work in a slight lag between backend and frontend so that frontend can know what routes/names are used before building
    * Start on backend first
* Daily Meetings/Communication:
    * Morning scrum before CA scrum
    * Lunch slack update, and say when we take lunch just to make sure each coding pair communicate during the day
    * When you end for the day, slack channel the feature, description, branch, and who has the most recent version
    * Afternoon debrief check in at 4 or 5 
    * People will generally be expected to be available for slack message responses between 8 - 6, time outside that is variable?
        * Make sure at least one person on team is available during coach hrs
        * Just communicate if/when we know there are set times we are unavailable, better to over communicate than under communicate
* General good practice with Git
    * Only use PULL when:
        * Pulling upstream into default
        * Pair programming and pull changes between the same branch, never between different branches
    * Don't be afraid to work through merge conflicts
    * Be sure bundle/yarn install, db:migrate are default actions when things seem not to work
* Things to maintain each day and assign one person (scrum master) each day to make sure these are up to date:
    * README file
    * PT
    * Test and reviewing deployment with heroku and netlify, etc
    * Git pong status/review (make sure consistent back and forth)
    * Unify team and lead team in communication and meetings for the day
    * don't leave people hanging in slack, always respond with an emoji or text, and try to keep conversations in threads where applicable to keep slack clean and easy to read through

 - 
## Built with
**Front End:** React v.16.13.0 | CSS  
**Back End:** Ruby 2.6.3 | Rails 6.0.2 
**Testing framework:** Cypress  
**Deployed at:** [Netlify]() and [Heroku]().
## The code   
This project 
## Getting started
### Dependencies  
* Yarn
* React
* Cypress
* Axios
* Semantic UI
### Setup   
To test this application, fork the repo to your own GitHub account and clone it to your local workspace. </br>
*Note:*Be sure to set up backend api first (noted above), in order to fully interact with the application. 
Install all of the dependencies:    
```
$ yarn install
```  
Start cypress and run the feature tests:  
```
$ yarn run cy:open
```
Start the backend api (if already configured) in a separate terminal (only run this command for the Rails application):
```
$ rails s
```
Start the React application and run it on your local host:
```
$ yarn start
```
## Updates/Improvements   
- R
## License  
[MIT-license](https://en.wikipedia.org/wiki/MIT_License)
### Acknowledgement  
- Material provided by [Craft Academy](https://craftacademy.se)
- Thomas Ochman/Oliver Ochman/Faraz Naeem/Noel Ryan for guidance and demos
