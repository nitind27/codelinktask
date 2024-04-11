import React, { useState } from 'react';
import Main from './Main';

const Sidebar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className='flex '>



                <div className={`sidebar top-[8%] bottom-0 lg:left-0 p-2 w-[250px] overflow-y-auto text-center bg-[#1F262D] ${isSidebarOpen ? '' : 'hidden' }`}>
                    <div className="text-gray-100 text-xl">
                        <div className="p-2.5 mt-1 flex items-center">
                            <i className="bi bi-app-indicator px-2 py-1 rounded-md bg-blue-600"></i>
                            <h1 className="font-bold text-gray-200 text-[15px] ml-3">Make Bazar</h1>
                            <i className="bi bi-x cursor-pointer ml-28 lg:hidden" onClick={toggleSidebar}></i>
                        </div>
                        <div className="my-2 bg-gray-600 h-[1px]"></div>
                    </div>
                    <div className="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
                        <i className="bi bi-search text-sm"></i>
                        <input type="text" placeholder="Search" className="text-[15px] ml-4 w-full bg-transparent focus:outline-none" />
                    </div>
                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <i className="bi bi-house-door-fill"></i>
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Home</span>
                    </div>
                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <i className="bi bi-bookmark-fill"></i>
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Bookmark</span>
                    </div>
                    <div className="my-4 bg-gray-600 h-[1px]"></div>
                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white" onClick={toggleDropdown}>
                        <i className="bi bi-chat-left-text-fill"></i>
                        <div className="flex justify-between w-full items-center">
                            <span className="text-[15px] ml-4 text-gray-200 font-bold">Chatbox</span>
                            <span className="text-sm" id="arrow">
                                <i className={`bi bi-chevron-down ${isDropdownOpen ? 'rotate-180' : ''}`}></i>
                            </span>
                        </div>
                    </div>
                    <div className={`text-left text-sm mt-2 w-4/5 mx-auto text-gray-200 font-bold ${isDropdownOpen ? '' : 'hidden'}`} id="submenu">
                        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Social</h1>
                        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Personal</h1>
                        <h1 className="cursor-pointer p-2 hover:bg-blue-600 rounded-md mt-1">Friends</h1>
                    </div>
                    <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
                        <i className="bi bi-box-arrow-in-right"></i>
                        <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
                    </div>
                </div>
                <Main />



            </div>
        </>
    );
};

export default Sidebar;
