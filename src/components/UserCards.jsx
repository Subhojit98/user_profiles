import formatDate from '../utils/dateFormater';

const UserCards = ({ email, username, country, dob, avatar }) => {
    return (
        <li className="max-w-sm h-[25rem] border-l border-t  border-gray-400 rounded-lg relative shadow-[7px_7px_2px_4px_rgba(144,224,239))] hover:-translate-y-2 duration-300 ease-out hover:scale-105">
            <div className="w-[90%] h-20 bg-[#FFF287] mx-auto mt-7 rounded-xl"></div>
            <img
                src={avatar || ''}
                alt="User Avatar"
                className="w-20 h-20 bg-slate-200 rounded-full z-50 mx-auto border-4 absolute left-0 right-0 top-12 border-gray-700 dark:border-white  object-cover"
            />
            <p className="text-center text-xl mt-14 font-semibold">
                {username}
            </p>
            <hr className="my-6 h-[1px] border-t-0 bg-neutral-100 dark:bg-white/10 w-11/12 m-auto" />

            <div className="flex flex-col gap-5 p-6">
                <p className="inline-flex items-center justify-between">
                    <span className="font-semibold"> Email:</span>
                    <span className="text-xs w-52 pl-5 inline-flex items-center gap-2">
                        {email || 'N/A'}
                    </span>
                </p>
                <p className="inline-flex items-center justify-between">
                    <span className="font-semibold"> Country:</span>
                    <span className="text-xs w-52 pl-5 inline-flex items-center gap-2">
                        <svg
                            width="14px"
                            height="14px"
                            className="dark:fill-white"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                {' '}
                                <path
                                    d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{' '}
                                <path
                                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                                    stroke="#000000"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>{' '}
                            </g>
                        </svg>
                        {country || 'N/A'}
                    </span>
                </p>
                <p className="inline-flex items-center justify-between">
                    <span className="font-semibold"> DOB:</span>
                    <span className="text-xs w-52 pl-5 inline-flex items-center gap-2">
                        <svg
                            width="13px"
                            height="13px"
                            className="dark:fill-white"
                            fill="#000000"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                                <path d="M19,4H17V3a1,1,0,0,0-2,0V4H9V3A1,1,0,0,0,7,3V4H5A3,3,0,0,0,2,7V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V7A3,3,0,0,0,19,4Zm1,15a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V7A1,1,0,0,1,5,6H7V7A1,1,0,0,0,9,7V6h6V7a1,1,0,0,0,2,0V6h2a1,1,0,0,1,1,1Z"></path>
                            </g>
                        </svg>
                        {formatDate(dob) || 'N/A'}
                    </span>
                </p>
            </div>
        </li>
    );
};

export default UserCards;

// default
// shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]
