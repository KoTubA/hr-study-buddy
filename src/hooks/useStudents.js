import { useCallback } from 'react';

export const useStudents = () => {
  const getGroups = useCallback(async () => {
    try {
      const result = await fetch('/groups');
      const data = await result.json();
      return data.groups;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentById = useCallback(async (groupId) => {
    try {
      const result = await fetch(`/students/${groupId}`);
      const data = await result.json();
      return data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await fetch(`/groups/${groupId}`);
      const data = await result.json();
      return data.students;
    } catch (e) {
      console.log(e);
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const result = await fetch(`/students/search`, {
        method: 'POST',
        body: searchPhrase,
      });
      const data = await result.json();
      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return {
    getGroups,
    getStudentById,
    getStudentsByGroup,
    findStudents,
  };
};
