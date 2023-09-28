import * as React from 'react';
type Props = {
    temp?:number
    windSpeed?:number
    windDir?:number
    report?:string
};
const Report_Box = (props: Props) => {
    return (
        <div className=" text-sm ">
          <p className='text-lg p-5 pb-0 font-semibold' >Weather Report</p>
        <div className="w-96 p-5">
          <table className='' >
            <tbody className='' >
              <tr>
                <td>Temp</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{props.temp + " °C"} </td>
              </tr>
              <tr>
                <td>Wind Speed</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{props.windSpeed + " km/h"}</td>
              </tr>
              <tr>
                <td>Wind Direction</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{props.windDir + " °"}</td>
              </tr>
              <tr>
                <td>Report</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{props.report}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Report_Box;