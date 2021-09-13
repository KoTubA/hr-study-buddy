import { useCallback } from 'react';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const result = await fetch('/groups', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await result.json();
        return data.groups;
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const getStudentById = useCallback(async (groupId) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const result = await fetch(`/students/${groupId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await result.json();
        return data.students;
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const result = await fetch(`/groups/${groupId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await result.json();
        return data.students;
      } catch (e) {
        console.log(e);
      }
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const result = await fetch(`/students/search`, {
          method: 'POST',
          body: searchPhrase,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await result.json();
        return data;
      } catch (e) {
        console.log(e);
      }
    }
  };

  return {
    getGroups,
    getStudentById,
    getStudentsByGroup,
    findStudents,
  };
};
