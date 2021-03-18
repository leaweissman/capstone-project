import { Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Tasks from './pages/tasks';
import Navbar from './components/Navbar';
import Okr from './pages/okr';
import Kanban from './pages/kanban';
import Scrum from './pages/scrum';
import Characters from '../src/components/kanbancomponents/KanbanDetailedInfo';


function App() {

  return (
    <>
      <main>
        <Navbar />

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

          <Route path='/kanban'>
            <Kanban />
          </Route>
          <Route path="/KanbanInformation">
            <Characters />
          </Route>

          <Route path='scrum'>
            <Scrum />
          </Route>

        </Switch>
      </main>
    </>
  );
}

export default App;
