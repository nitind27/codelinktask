import React from 'react';

const Main = () => {
    return (
        <div className="container mx-auto mt-10 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h5 className="font-bold uppercase text-gray-600">Total Revenue</h5>
                            <h3 className="font-bold text-3xl">$3249 <span className="text-green-500"><i className="fas fa-caret-up"></i></span></h3>
                        </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-pink-600"><i className="fas fa-users fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h5 className="font-bold uppercase text-gray-600">Total Users</h5>
                            <h3 className="font-bold text-3xl">249 <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></h3>
                        </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h5 className="font-bold uppercase text-gray-600">New Users</h5>
                            <h3 className="font-bold text-3xl">2 <span className="text-yellow-600"><i className="fas fa-caret-up"></i></span></h3>
                        </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                    <div className="flex flex-row items-center">
                        <div className="flex-shrink pr-4">
                            <div className="rounded-full p-5 bg-blue-600"><i className="fas fa-server fa-2x fa-inverse"></i></div>
                        </div>
                        <div className="flex-1 text-right md:text-center">
                            <h5 className="font-bold uppercase text-gray-600">Server Uptime</h5>
                            <h3 className="font-bold text-3xl">152 days</h3>
                        </div>
                    </div>
                </div>

                {/* Add more cards as needed */}

            </div>
            <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 mt-5">
                <div className="rounded overflow-hidden shadow bg-white mx-2 w-full">
                    <div className="px-6 py-2 border-b border-light-grey">
                        <div className="font-bold text-xl">Trending Categories</div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="table-auto min-w-full">
                            <thead className="bg-grey-dark text-white text-normal">
                                <tr>
                                    <th className="px-4 py-2">#</th>
                                    <th className="px-4 py-2">Item</th>
                                    <th className="px-4 py-2">Last</th>
                                    <th className="px-4 py-2">Current</th>
                                    <th className="px-4 py-2">Change</th>
                                </tr>
                            </thead>
                            <tbody className="text-grey-darkest">
                                <tr>
                                    <td className="border px-4 py-2">1</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                            Twitter
                                        </button>
                                    </td>
                                    <td className="border px-4 py-2">4500</td>
                                    <td className="border px-4 py-2">4600</td>
                                    <td className="border px-4 py-2">
                                        <span className="text-green-500"><i className="fas fa-arrow-up"></i>5%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">2</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-primary hover:bg-primary-dark text-white font-light py-1 px-2 rounded-full">
                                            Facebook
                                        </button>
                                    </td>
                                    <td className="border px-4 py-2">10000</td>
                                    <td className="border px-4 py-2">3000</td>
                                    <td className="border px-4 py-2">
                                        <span className="text-red-500"><i className="fas fa-arrow-down"></i>65%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">3</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-success hover:bg-success-dark text-white font-light py-1 px-2 rounded-full">
                                            Amazon
                                        </button>
                                    </td>
                                    <td className="border px-4 py-2">10000</td>
                                    <td className="border px-4 py-2">3000</td>
                                    <td className="border px-4 py-2">
                                        <span className="text-red-500"><i className="fas fa-arrow-down"></i>65%</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-2">4</td>
                                    <td className="border px-4 py-2">
                                        <button className="bg-blue-500 hover:bg-blue-800 text-white font-light py-1 px-2 rounded-full">
                                            Microsoft
                                        </button>
                                    </td>
                                    <td className="border px-4 py-2">10000</td>
                                    <td className="border px-4 py-2">3000</td>
                                    <td className="border px-4 py-2">
                                        <span className="text-green-500"><i className="fas fa-arrow-up"></i>65%</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>




            <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 mt-5">
                <div className="rounded overflow-hidden shadow bg-white mx-2 w-full pt-2">
                    <div className="px-6 py-2 border-b border-light-grey">
                        <div className="font-bold text-xl">Progress Among Projects</div>
                    </div>
                    <div className="">
                        <div className="w-full">

                            <div className="shadow w-full bg-grey-light">
                                <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white" style={{ width: '45%' }}>45%
                                </div>
                            </div>


                            <div className="shadow w-full bg-grey-light mt-2">
                                <div className="bg-teal-500 text-xs leading-none py-1 text-center text-white" style={{ width: '55%' }}>55%
                                </div>
                            </div>


                            <div className="shadow w-full bg-grey-light mt-2">
                                <div className="bg-orange-500 text-xs leading-none py-1 text-center text-white" style={{ width: '65%' }}>65%
                                </div>
                            </div>


                            <div className="shadow w-full bg-grey-300 mt-2">
                                <div className="bg-red-800 text-xs leading-none py-1 text-center text-white" style={{ width: '75%' }}>75%
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="flex flex-1 flex-col md:flex-row lg:flex-row mx-2 p-1 mt-2 mx-auto lg:mx-2 md:mx-2 justify-between mt-5">

                <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
                    <img src="https://i.imgur.com/w1Bdydo.jpg" alt="" className="w-full" />
                    <div className="flex justify-center -mt-8">
                        <img src="https://i.imgur.com/8Km9tLL.jpg" alt="" className="rounded-full border-solid border-white border-2 -mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-black text-sm bold font-sans">Olivia Dunham</h3>
                        <p className="mt-2 font-sans font-light text-grey-700">Hello, i'm from another the other
                            side!</p>
                    </div>
                    <div className="flex justify-center pb-3 text-grey-dark">
                        <div className="text-center mr-3 border-r pr-3">
                            <h2>34</h2>
                            <span>Photos</span>
                        </div>
                        <div className="text-center">
                            <h2>42</h2>
                            <span>Friends</span>
                        </div>
                    </div>
                </div>

                <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
                    <img src="https://i.imgur.com/w1Bdydo.jpg" alt="" className="w-full" />
                    <div className="flex justify-center -mt-8">
                        <img src="https://i.imgur.com/8Km9tLL.jpg" alt="" className="rounded-full border-solid border-white border-2 -mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-black text-sm bold font-sans">Olivia Dunham</h3>
                        <p className="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other
                            side!</p>
                    </div>
                    <div className="flex justify-center pb-3 text-grey-dark">
                        <div className="text-center mr-3 border-r pr-3">
                            <h2>34</h2>
                            <span>Photos</span>
                        </div>
                        <div className="text-center">
                            <h2>42</h2>
                            <span>Friends</span>
                        </div>
                    </div>
                </div>

                <div className="rounded rounded-t-lg overflow-hidden shadow max-w-xs my-3">
                    <img src="https://i.imgur.com/w1Bdydo.jpg" alt="" className="w-full" />
                    <div className="flex justify-center -mt-8">
                        <img src="https://i.imgur.com/8Km9tLL.jpg" alt="" className="rounded-full border-solid border-white border-2 -mt-3" />
                    </div>
                    <div className="text-center px-3 pb-6 pt-2">
                        <h3 className="text-black text-sm bold font-sans">Olivia Dunham</h3>
                        <p className="mt-2 font-sans font-light text-grey-dark">Hello, i'm from another the other
                            side!</p>
                    </div>
                    <div className="flex justify-center pb-3 text-grey-dark">
                        <div className="text-center mr-3 border-r pr-3">
                            <h2>34</h2>
                            <span>Photos</span>
                        </div>
                        <div className="text-center">
                            <h2>42</h2>
                            <span>Friends</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Main;
