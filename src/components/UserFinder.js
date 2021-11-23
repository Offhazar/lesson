import { Component, Fragment } from 'react/cjs/react.production.min';
import UsersContext from '../store/users-context';
import Users from './Users';
import classes from './UserFindler.module.css';

class UserFinder extends Component {
  static contextType = UsersContext;
  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      serachTern: '',
    };
  }
  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users,
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.serachTern !== this.state.serachTern) {
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.serachTern)
        ),
      });
    }
  }

  searchChangeHandler(e) {
    this.setState({
      serachTern: e.target.value,
    });
  }
  render() {
    return (
      <Fragment>
        <div className={classes.findler}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [serachTern, setSearchTern] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(serachTern))
//     );
//   }, [serachTern]);

//   const searchChangeHandler = (event) => {
//     setSearchTern(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.findler}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;
