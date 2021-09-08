import React, { useEffect, useState } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Link, useParams } from 'react-router-dom';
import UsersList from 'components/organisms/UsersList/UsersList';

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch('/groups')
      .then((res) => res.json())
      .then((data) => {
        setGroups(data.groups);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`/students/${id || groups[0]}`)
      .then((res) => res.json())
      .then((data) => {
        setStudents(data.students);
      })
      .catch((err) => console.log(err));
  }, [id, groups]);

  return (
    <ViewWrapper>
      <nav>
        {groups.map((group) => (
          <Link key={group} to={`/group/${group}`}>
            {group}{' '}
          </Link>
        ))}
      </nav>
      <UsersList users={students} />
    </ViewWrapper>
  );
};

export default Dashboard;
