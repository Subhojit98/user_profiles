import { useEffect } from 'react';
import UserCards from '../components/UserCards';
import { useDispatch } from 'react-redux';
import { getUsersData } from '../services/api';
import { setUsers } from '../featues/users/users-slice';
import { useSelector } from 'react-redux';
import Loader from '../components/ui/Loader';
import { useState } from 'react';

const UserList = () => {
    const dispatch = useDispatch();
    const allUsersList = useSelector((state) => state.users.usersList);

    const [filteredUsers, setFilteredUsers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const res = await getUsersData();

            if (!res || !res.results) {
                console.log('Failed to fetch user data');
                return;
            }
            const data = res.results.map((user) => ({
                id: user.login.uuid,
                username: `${user.name.first} ${user.name.last}`,
                email: user.email,
                dob: user.dob.date,
                country: user.location.country,
                avatar: user.picture.large,
            }));

            dispatch(setUsers(data));
        };
        fetchData();
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery.trim() === '') {
                setFilteredUsers(allUsersList);
            } else {
                const filtered = allUsersList.filter(
                    (user) =>
                        user?.username
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase()) ||
                        user?.country
                            .toLowerCase()
                            .includes(searchQuery.toLowerCase())
                );
                filtered.length > 0
                    ? setFilteredUsers(filtered)
                    : setFilteredUsers(allUsersList);
            }
        }, 400);
        return () => clearTimeout(timer);
    }, [searchQuery, allUsersList]);

    return (
        <div className="px-6 md:px-8 xl:px-12 mt-4">
            <div className="w-11/12 sm:w-2/3 xl:w-[35%] mx-auto mt-10">
                <h1 className="text-lg md:text-4xl my-5 mb-8 text-center">
                    EyeQlytics User Directory
                </h1>

                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500 dark:text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="search"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg dark:bg-white dark:border-gray-600 dark:placeholder-gray-600 focus:outline-2 outline-blue-400"
                        placeholder="Search for any users.."
                        required
                    />
                </div>
            </div>

            {/* cards */}

            {filteredUsers.length === 0 && <Loader />}
            <div className="w-full mb-20">
                <ul className=" mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 p-0 sm:p-2 justify-center w-fit mx-auto md:w-full xl:w-full sm:gap-x-6">
                    {filteredUsers.map((user) => {
                        return (
                            <UserCards
                                key={user.id}
                                email={user.email}
                                username={user.username}
                                country={user.country}
                                dob={user.dob}
                                avatar={user.avatar}
                            />
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default UserList;
