const useUsers = () => {
  const getUsers = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);

    if (!response.ok) {
      throw new Error(`Could not fetch, status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  };

  return { getUsers };
};

export default useUsers;
