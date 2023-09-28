import * as React from 'react';
type Props = {
    long:string;
    lat:string;
};
const Report_Box = (props: Props) => {
    return (
        <div className="">
        <div className="w-96 p-5">
            {props.lat + " " + props.long}
          <table>
            <tbody>
              <tr>
                <td>Max. Temp</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{94646}</td>
              </tr>
              <tr>
                <td>Min. Temp</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{94646}</td>
              </tr>
              <tr>
                <td>Wind Speed</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{94646}</td>
              </tr>
              <tr>
                <td>Wind Direction</td>
                <td>&nbsp;:&nbsp;</td>
                <td>{94646}</td>
              </tr>
              <tr>
                <td>Report</td>
                <td>&nbsp;:&nbsp;</td>
                <td>dadadsaadadadasada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Report_Box;