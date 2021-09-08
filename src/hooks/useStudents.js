import { useEffect, useState } from 'react';

export const useStudents = ({ groupId = '' } = {}) => {
  const [students, setStudents] = useState([]);
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await fetch('/groups');
        const data = await result.json();
        setGroups(data.groups);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (!groupId) return;
    (async () => {
      try {
        const result = await fetch(`/students/${groupId}`);
        const data = await result.json();
        setStudents(data.students);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [groupId]);

  const findStudents = async (searchPhrase) => {
    try {
      const result = await fetch(`/students/search`, {
        method: 'POST',
        body: searchPhrase,
      });
      const data = await result.json();
      console.log(data);
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    students,
    groups,
    findStudents,
  };
};
