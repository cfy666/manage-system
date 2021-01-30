import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IndexPage from 'pages/Index';
import LoginPage from 'pages/Login';

import CollectionPage from './pages/sub/Collection';
import CoursePage from './pages/sub/Course';
import CrawlerPage from './pages/sub/Crawler';
import RecomCoursePage from './pages/sub/RecomCourse';
import SliderPage from './pages/sub/Slider';
import StudentPage from './pages/sub/Student';
import TeacherPage from './pages/sub/Teacher';
import ErrorPage from './pages/sub/Error';



function App() {
  return (
    <Router>
      <Switch>
        <Route component={ LoginPage } path="/login"></Route>
        <Route path="/" render={ props => (
          <IndexPage history={ props.history }>
            <Switch>
             <Route component={ CoursePage } path="/course"></Route>
             <Route component={ RecomCoursePage } path="/recom_course"></Route>
             <Route component={ CollectionPage } path="/collection"></Route>
             <Route component={ TeacherPage } path="/teacher"></Route>
             <Route component={ StudentPage } path="/student"></Route>
             <Route component={ CrawlerPage } path="/crawler"></Route>
             <Route component={ SliderPage } path="/slider"></Route>
             <Route component={ ErrorPage }></Route>
            </Switch>
          </IndexPage>
        )}></Route>
      </Switch>
    </Router>
  );
}

export default App;
