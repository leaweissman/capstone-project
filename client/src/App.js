import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Navbar from './components/Navbar';
import Okr from './pages/okr';
import Kanban from './pages/kanban';
import Scrum from './pages/scrum';
import KanbanRouting from './components/kanbancomponents/Detailpages/KanbanRouting';
import OkrRouting from './components/okrcomponents/Detailspages/OkrRouting';
import ScrumRouting from './components/scrumcomponents/AboutScrum/ScrumRouting';


function App() {

  return (
    <>
      <main>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/tasks'>
            <Tasks />
          </Route>

          <Route path='/okr'>
            <Okr />
          </Route>
          <Route path='/OkrInformation'>
            <OkrRouting />
          </Route>

          <Route path='/kanban'>
            <Kanban />
          </Route>
          <Route path="/KanbanInformation">
            <KanbanRouting />
          </Route>

          <Route path='/scrum'>
            <Scrum />
          </Route>
          <Route path='/ScrumInformation'>
            <ScrumRouting />
          </Route>

        </Switch>
      </main>
      <footer>
        <Navbar />
      </footer>
    </>
  );
}

export default App;
