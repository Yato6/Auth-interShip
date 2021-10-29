import useSWR from "swr";
import { fetcher } from "../components/Fetcher";
import { logOut } from "../components/History";
import { AboutAccount } from "../styled-components/Profile.styled.js";

const ProfileApp = () => {
  const { data, error } = useSWR("/profile", fetcher);
  if (error) {
    return <div>Error...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <AboutAccount>
        <h5>Account page</h5>
        <p>E-mail: {data.email}</p>
        <p>Имя пользователя: {data.username}</p>
        <p>ID: {data.id}</p>
        <p>Имя: {data.firstName}</p>
        <p>Фамилия: {data.lastName}</p>
        <button onClick={() => logOut()}>Выйти</button>
      </AboutAccount>
    </>
  );
};

export default ProfileApp;
