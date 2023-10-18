import { Link } from 'react-router-dom';

const dummyUsers = [
  {
    id: 'St1',
    name: 'Jalal',
    title: 'History Quiz',
  },
  {
    id: 'St2',
    name: 'Tasnia',
    title: 'Science Quiz',
  },
];

function DummyUserList() {
  return (
    <>
      <h1>Dummy User</h1>
      <ul>
        {dummyUsers.map((event) => (
          <li key={event.id}>
            <p><Link to={event.id}>{event.id}</Link></p>
            <p><Link to={event.name}>{event.name}</Link></p>
            <p><Link to={event.title}>{event.title}</Link></p>

          </li>
        ))}
      </ul>
    </>
  );
}

export default DummyUserList;
