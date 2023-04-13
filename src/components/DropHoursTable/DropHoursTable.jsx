import { useState } from 'react';
import { AccessTime, ExpandLess, ExpandMore } from '@mui/icons-material';
import { TypographyWithIcon } from '../TypographyWithIcon/TypographyWithIcon';
import { Table, TableBody, TableCell, TableRow } from '@mui/material';
import { weekdays } from '@/utils/constant';

const DropHoursTable = ({ hours }) => {
  const [showTable, setShowTable] = useState(false);

  return (
    <div className="table-container">
      <TypographyWithIcon
        startIcon={<AccessTime />}
        text={`${hours.openNow ? 'Open' : 'Closed'}${showTable ? '' : ' now'}`}
        endIcon={showTable ? <ExpandLess /> : <ExpandMore />}
        onClick={() => setShowTable((prev) => !prev)}
        data-testid="hours-value"
        sx={{ cursor: 'pointer' }}
      />
      {showTable && (
        <Table>
          <TableBody>
            {weekdays.map((weekday, index) => (
              <TableRow key={weekday}>
                <TableCell>{weekday}</TableCell>
                <TableCell>
                  <ul ul style={{ listStyle: 'none' }}>
                    {hours.regular?.[index + 1].map(({ open, close }) => (
                      <li key={`${open}-${close}`}>{`${open}-${close}`}</li>
                    ))}
                  </ul>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default DropHoursTable;
