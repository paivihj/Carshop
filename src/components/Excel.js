import React from 'react';
import Button from '@material-ui/core/Button';
import ReactExport from 'react-export-excel';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

function Excel(props) {

  const handleClick = () => {
      const ws = XLSX.utils.json_to_sheet(props.cars);
      const wb = { Sheets: { 'data': ws}, SheetNames: ['data']};
      const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array'});
      const data = new Blob([excelBuffer], { type: 'xlsx' });
      FileSaver.saveAs(data, "cars");
  };

return (
        <div>
            <Button style={{ marginTop: 0 }} variant="outlined" color="primary" onClick={handleClick}>
                Export
            </Button>
        </div>
    );
}

export default Excel;