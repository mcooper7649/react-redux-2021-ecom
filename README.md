## Lesson-3

Going through our folder structure for the project, breaking out homepage component into smaller components

# How to fork and clone

One quick note about cloning this project. If you wish to make commits and push the code up after cloning this repo, you should fork the project first. In order to own your own copy of this repository, you have to fork it so you get your own copy on your own profile!

You can see the fork button in the top right corner of every GitHub project; click it and a copy of the project will be added to your GitHub profile under the same name as the original project.

![alt text](https://i.ibb.co/1YN7SJ6/Screen-Shot-2019-07-01-at-2-02-40-AM.png "image to fork button")

After forking the project, simply clone it the way you would from the new forked project in your own GitHub repository and you can commit and push to it freely!


# After you fork and clone:

## Install dependencies

In your terminal after you clone your project down, remember to run either `yarn` or `npm install` to build all the dependencies in the project.


## Updated node-sass to 4.14 to match my version of

1. Instructor explains the package.json and lock files
2. Also how to troubleshoot errors, as in npm i node-sass, like we needed earlier
3. ServiceWorker.js - mainly used for progressive web app, allows us to makeour app progressive.

## Covered NPM package upgrades

1. npm audit fix
2. npm upgrade
3. npm audit fix

## Routing in React
--

1. Single Page Apps download the whole page and maniulate the dom
2. React doesn't care about Routing by default
3. It uses a components called react routing as the standard, there are other routers
4. yarn install react-router-dom or npm i react-router-dom
5. inside our index.js we can import { BrowserRouter } from react-router-dom
6. now we can wrap our <App> tag with { BrowserRouter }
7. inside our App.js file we can use the Route tag
8. the route component tags  a couple arguments
   1. exact = explicitly go to the exact url
   2. path = the url we want to go to
   3. component = the component we want to render

updates with latest version of react-router-dom syntax
```
function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/hats" element={<HatsPage />} />
      </Routes>
    </div>
```


## Exact Routing and path match
---

1. we can use the match: isExact property to tell if a url is matching the route path
2. url parameter specify that anything after : is dynamic and can be accessed
3. if we wanted to access our parameter we could use {props.match.params.topicId}

```
<Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/topics" element={<TopicsList />} />
        <Route path="/topics/:topicId" element={<TopicsDetail />} />
</Routes>


## History
--

1. There are two ways to nagivate in React
2. Use of the Link Component
3 Link is a component react-router-dom gives us that we can pass to="topics"
4. It's reacts SPA version of an anchor link


5. If we wanted to use the 2nd method we can use hiistory prop
  props.history.push('/topics')
6. history is used for more navigating more programattically


##Location Prop
--

1. Our location gives us our full path name of where we are currently

example of dynamic links
<Link to={`${props.match.url}/13`}>to Topic 13 </Link>


##withRouter NO LONGER EXISTS in v6 of react-router-dom
---

1. withRouter is a HIGHER ORDER COMPONENT
2. A function that takes a component and modifys it and return a new modified compoent
``export default withRouter(MenuItem);``

3. by wrapping our menuitem withRouter we don't have to pass our props down from parent down into children of children anymore

tes