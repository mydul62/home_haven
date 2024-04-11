import React from 'react';

const Detail = ({ data }) => {
  console.log(data);
  return (
    <div className="max-w-[1440px] w-[90%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <img src={data && data.image} alt="" />
        </div>
        <div className="col-span-1">
          <div className=" p-2 mx-auto sm:p-4 text-gray-900">
            <h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <colgroup>
                  <col />
                  <col />
                  <col />
                  <col />
                  <col />
                  <col className="w-24" />
                </colgroup>
                <tbody>
                  <tr className="border-b border-opacity-20 border-gray-200 bg-gray-100">
                    <td className="p-3">
                      <p>97412378923</p>
                    </td>
                    <td className="p-3">
                      <p>Microsoft Corporation</p>
                    </td>
                    <td className="p-3">
                      <p>14 Jan 2022</p>
                      <p className="text-gray-400">Friday</p>
                    </td>
                  </tr>
                  {/* Additional rows go here */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Detail;
