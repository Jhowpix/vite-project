import { UserProps } from "../types/user";

import Search from "../components/Search";

import { userState } from "react";

const Home = () => {
 const [user, setUser] = userState<UserProps | null>(null);

  const loadUser = async(userName: string) => {

    const res = await fetch('https://api.github.com/users/${UserName}');
    const data = await res.json();
  };


    return (
        <div>
        <Search loadUser={loadUser} />
    </div>
    );

};
export default Home;