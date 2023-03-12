Project Exam 2

![Project 3 - Project Exam 2 - Screenshot](https://user-images.githubusercontent.com/79268288/224323173-5251307a-b91e-4414-8e3d-9ae5d90bb63a.png)




## About:
A social media site that allows registered users to interact, by commenting, following/unfollowing and reacting to posts. 

Description of the project:
Authenticated users are granted access to the application. Each user is registered by registering a profile with email, username and password. Their profile can also hold a bannerimage and a profileimage asociated with their profile object. Each registered user can post, comment, follow/unfollow and react to other peoples posts. Navigation is made easy with dynamic routing, the page uses a param that is given to the url, and the useParam hook has the specific Post page fetch the specific post that matches the id targeted by our useParam hook. Our route definition works in tandem with our installed react BrowserRouter.This router store the current location in the browser's adress bar, included with the utility of the browser's built-in history stack. Using the BrowserRouter we navigate between different components and optimize the load of our app since there are no unnecessary renders. Our API call is linked with dynamic routes and these routes are only initialized dynamically when the page gets rendered. We use a path on each list item. Our application also has search functionality combined with the react select input, and values are logged for precise search returns. Any matches are rendered with a map() method and linked with paths dynamically render the targeted item from the API call.

- Reusable Components for better scalability
- Bootstrap for systematic and responsive grids
- UseEffect for functions after render, and hooks to tap into the lifecycle of the components

## Built With

You can list a the tech stack that you've used over here

- [React.js](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com)
- [Sass](https://sass-lang.com/)


## Getting Started

### Installing

This is where you list how to get the project started. It typically just includes telling a person to clone the repo and then to install the dependencies e.g.

1. Clone the repo:
```bash
git clone git@github.com/Noroff-FEU-Assignments/project-exam-2-xTidewaterx.git

```



2. Install the dependencies:


npm install


### Running


To run the app, run the following commands:


npm run start



## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My Twitter page](www.twitter.com)

[My LinkedIn page](www.linkedin.com)



