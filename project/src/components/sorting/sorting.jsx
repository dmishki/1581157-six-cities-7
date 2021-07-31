import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Sort } from '../../const';
import SortingItem from '../sorting-item/sorting-item';
import { getSort } from '../../store/sort/selectors';
import { useSelector } from 'react-redux';

function Sorting({changeSort}) {
  const [isActive, setActive] = useState(false);
  const stateSort = useSelector(getSort);
  const sort = Object.values(Sort);

  return (
    <form className="places__sorting" action="/" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0"
        onClick={() => {
          setActive(!isActive);
        }}
      >
        {stateSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={isActive ? 'places__options places__options--custom places__options--opened' : 'places__options places__options--custom'}>
        {sort.map((item) => <SortingItem key={item} text={item} stateSort={stateSort} isActive={isActive} changeSort={changeSort} setActive={setActive} />)}
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  changeSort: PropTypes.func,
};

export default Sorting;
