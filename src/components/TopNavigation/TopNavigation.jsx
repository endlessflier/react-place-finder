import { observer } from 'mobx-react-lite';
import { useStore } from '@/stores/useStore';
import { RoundedButton } from '../RoundedButton/RoundedButton';
import { SearchField } from '../SearchField/SearchField';

const TopNavigation = observer(() => {
  const restaurantStore = useStore();

  const handleSearchChange = (event) => {
    restaurantStore.setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    restaurantStore.fetchRestaurantList();
  };

  return (
    <form
      onSubmit={handleSearchSubmit}
      style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'center',
        overflow: 'hidden',
        padding: '12px 0 8px 0',
        border: `1px solid rgba(0, 0, 0, 0.05)`,
        boxShadow: 'inset 0px 8px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      <SearchField
        type="text"
        variant="outlined"
        value={restaurantStore.searchTerm}
        onChange={handleSearchChange}
        onCancel={() => restaurantStore.setSearchTerm('')}
        placeholder="Search for restaurants"
      />
      <RoundedButton type="submit">Search</RoundedButton>
      <RoundedButton
        id="btn-filter"
        size="medium"
        variant="secondary"
        onClick={() => restaurantStore.selectRandomRestaurant()}
      >
        Random
      </RoundedButton>
    </form>
  );
});

export default TopNavigation;
