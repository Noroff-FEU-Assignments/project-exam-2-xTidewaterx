Project Exam 2

![Project 3 - Project Exam 2 - Screenshot](https://user-images.githubusercontent.com/79268288/224323173-5251307a-b91e-4414-8e3d-9ae5d90bb63a.png)


A simple overview of the use/purpose of the project.

## About:
A social media site that allows registered users to interact, by commenting, following/unfollowing and reacting to posts. 

Description of the project:
Authenticated users are granted access to the application. Each user is registered by registering a profile with email, username and password. Their profile can also hold a bannerimage and a profileimage asociated with their profile object. Each registered user can post, comment, follow/unfollow and react to other peoples posts. Navigation is made easy with dynamic routing, the page uses a param that is given to the url, and the useParam hook has the specific Post page fetch the specific post that matches the id targeted by our useParam hook. Our route definition works in tandem with our installed react BrowserRouter.This router store the current location in the browser's adress bar, included with the utility of the browser's built-in history stack. Using the BrowserRouter we navigate between different components and optimize the load of our app since there are no unnecessary renders. Our API call is linked with dynamic routes and these routes are only initialized dynamically when the page gets rendered. We use a path on each list item. Our application also has search functionality combined with react select input. Any matches are rendered with a map() method and linked with paths dynamically render the targeted item from the API call.

You can add some bullet points if you'd like to:

- List item 1
- List item 2
- List item 3

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
git clone git@github.com:NoroffFEU/portfolio-1-example.git
```

2. Install the dependencies:

```
npm install
```

### Running

Here is where you detail how to run the app. It typically involves the commands you'd need to run to start the project e.g.

To run the app, run the following commands:

npm run build
npm run start

```bash
npm run start
```

## Contributing

Here you can detail any information you want to provide regarding contributing to the project. For big projects you will usually have a separate `CONTRIBUTING.md` and link to it, but for smaller projects you can simply include instructions here. These instructions can simply detail the process you want a person to take, such as to make sure to open a pull request so code can be reviewed.

## Contact

This is where you can leave your social links for people to contact you, such as a LinkedIn profile or Twitter link e.g.

[My Twitter page](www.twitter.com)

[My LinkedIn page](www.linkedin.com)

## License

You can link to your license file here if you're using one, or mention what license the codebase falls under. If you're unsure then you can simply delete this section.

## Acknowledgments

This is where you can add any acknowledgements if you'd like, such as to people who have helped you or any code snippets you'd like to mention. You can delete this section if you don't have any acknowledgements to make.




