import React, { useState } from "react";  
import { read, utils, writeFile } from 'xlsx';

const StatsCardPlayers = () => {
    const [mans, setMan] = useState([]);

    const handleImport = ($event) => {
        const files = $event.target.files;
        if (files.length) {
            const file = files[0];
            const reader = new FileReader();
            reader.onload = (event) => {
                const wb = read(event.target.result);
                const sheets = wb.SheetNames;

                if (sheets.length) {
                    const rows = utils.sheet_to_json(wb.Sheets[sheets[0]]);
                    setMan(rows)
                }
            }
            reader.readAsArrayBuffer(file);
        }
    }

    const handleExport = () => {
        const headings = [[
            'Name',
            'Runs',
            'Balls',
            'BatScore',
            'WicketsTaken',
            'MatchesPlayed',
            'BallScore',
            'PlayerImage'
            
        ]];
        const wb = utils.book_new();
        const ws = utils.json_to_sheet([]);
        utils.sheet_add_aoa(ws, headings);
        utils.sheet_add_json(ws, mans, { origin: 'A2', skipHeader: true });
        utils.book_append_sheet(wb, ws, 'Report');
        writeFile(wb, 'Players Stats downloaded.xlsx');
    }

    return (
        <>
            <div className="row mb-2 mt-5">
                <div className="col-sm-6 offset-3">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="input-group">
                                <div className="custom-file">
                                    <input type="file" name="file" className="custom-file-input" id="inputGroupFile" required onChange={handleImport}
                                        accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"/>
                                    <label className="custom-file-label" htmlFor="inputGroupFile">Choose file</label>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <button onClick={handleExport} className="btn btn-primary float-right">
                                Export <i className="fa fa-download"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 offset-3">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Runs</th>
                                <th scope="col">Balls</th>
                                <th scope="col">BatScore</th>
                                <th scope="col">WicketsTaken</th>
                                <th scope="col">MatchesPlayed</th>
                                <th scope="col">BallScore</th>
                                <th scope="col">PlayerImage</th>
                            </tr>
                        </thead>
                        <tbody> 
                                {
                                    mans.length
                                    ?
                                    mans.map((Man, index) => (
                                        <tr key={index}>
                                            <th scope="row">{ index + 1 }</th>
                                            <td>{ Man.Name }</td>
                                            <td>{ Man.Runs}</td>
                                            <td>{ Man.Balls }</td>
                                            <td>{ Man.BatScore }</td>
                                            <td>{ Man.WicketsTaken }</td>
                                            <td>{ Man.MatchesPlayed }</td>
                                            <td>{ Man.BallScore }</td>
                                            <td>{ Man.PlayerImage }</td>
                                           
                                        </tr> 
                                    ))
                                    :
                                    <tr>
                                        <td colSpan="5" className="text-center">no data found</td>
                                    </tr> 
                                }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

<StatsCardPlayers/>

export default StatsCardPlayers;