import { render, screen, fireEvent } from '@testing-library/react';
import DropHoursTable from '@/components/DropHoursTable/DropHoursTable';
import { weekdays } from '@/utils/constant';

describe('DropHoursTable', () => {
  const hours = {
    openNow: true,
    regular: {
      1: [{ open: '10:00', close: '18:00' }], // Monday
      2: [{ open: '10:00', close: '18:00' }], // Tuesday
      3: [{ open: '08:00', close: '16:30' }], // Wednesday
      4: [{ open: '09:00', close: '17:00' }], // Thursday
      5: [{ open: '11:00', close: '19:00' }], // Friday
      6: [{ open: '12:00', close: '20:00' }], // Saturday
      7: [{ open: '13:00', close: '21:00' }], // Sunday
    },
  };

  it('renders open now text when openNow is true', () => {
    render(<DropHoursTable hours={hours} />);
    expect(screen.getByText('Open now')).toBeInTheDocument();
  });

  it('renders closed now text when openNow is false', () => {
    const closedHours = { ...hours, openNow: false };
    render(<DropHoursTable hours={closedHours} />);
    expect(screen.getByText('Closed now')).toBeInTheDocument();
  });

  it('shows table when TypographyWithIcon is clicked and showTable state is false', () => {
    render(<DropHoursTable hours={hours} />);
    fireEvent.click(screen.getByTestId('hours-value'));
    expect(screen.getByRole('table')).toBeInTheDocument();
  });

  it('hides table when TypographyWithIcon is clicked and showTable state is true', () => {
    render(<DropHoursTable hours={hours} />);
    fireEvent.click(screen.getByTestId('hours-value'));
    fireEvent.click(screen.getByTestId('hours-value'));
    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });

  it('displays weekdays and hours data in table when showTable state is true', () => {
    render(<DropHoursTable hours={hours} />);
    fireEvent.click(screen.getByTestId('hours-value'));
    weekdays.forEach((weekday, index) => {
      const dayCell = screen.getByText(weekday);
      const hourData = hours.regular[index + 1];
      // Check if the cell contains the expected time range for that weekday
      hourData.forEach(({ open, close }) => {
        expect(dayCell.nextElementSibling).toHaveTextContent(`${open}-${close}`);
      });
    });
  });
});
