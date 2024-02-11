import React from 'react'

function StudentTable({userListData, convertImageUrl}) {


    const renderTableRows = () => {
        return userListData?.map((user, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="flex items-center">
                    <div>
                      <div className="text-sm leading-5 text-gray-800">{user.id}</div>
                    </div>
                  </div>
                </td>
            <td className='px-6 py-4 whitespace-no-wrap border-b border-gray-500'><img className='h-16' src={convertImageUrl(user.image)} alt="profile" /></td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">
                    {user.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                 {user.email}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                    <span
                      aria-hidden=""
                      className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    />
                    <span className="relative text-xs">{user.bloodGroup}</span>
                  </span>
                </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                 {user.school}
                </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {user.mobileNo}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                 {user.address}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {user.guardianPhone}
                </td>
                {/* <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-sm leading-5">
                  <button className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
                    View Details
                  </button>
                </td> */}
          </tr>
        ));
      }
    
      return (
        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-3/4 py-4 overflow-hidden bg-white shadow-lg px-12 overflow-x-auto">
          <div className="flex justify-between">
            <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
              <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
                <div className="flex">
                  <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                    <svg
                      width={18}
                      height={18}
                      className="w-4 lg:w-auto"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                        stroke="#455A64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.9993 16.9993L13.1328 13.1328"
                        stroke="#455A64"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
                <input
                  type="text"
                  className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                  placeholder="Search"
                />
              </div>
            </div>
            <p class="text-4xl font-medium text-gray-900 dark:text-black">Student Data</p>
          </div>
        </div>
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="w-40 overflow-x-scroll">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                  ID
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  IMAGE
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  NAME
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  EMAIL
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  BLOOD GROUP
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                 SCHOOL
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                 MOBILE NO
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                 ADRESS
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                 GUARDIAN NO
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
             
            {renderTableRows()}

            </tbody>
          </table>
          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
            <div>
              <p className="text-sm leading-5 text-blue-700">
                Showing {userListData?.length} Result
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      
      );
}

export default StudentTable



{/* <div className="flex flex-col overflow-x-auto">
  <div className="sm:-mx-6 lg:-mx-8">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">
                #
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
              <th scope="col" className="px-6 py-4">
                Heading
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-nowrap px-6 py-4 font-medium ">2</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4 ">Cell</td>
              <td className="whitespace-nowrap px-6 py-4 ">Cell</td>
            </tr>
            <tr className="border-b ">
              <td className="whitespace-nowrap px-6 py-4 font-medium ">3</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
              <td className="whitespace-nowrap px-6 py-4">Cell</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
 */}