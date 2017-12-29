import { connect } from 'react-redux';
import { toggleItem } from '../actions';
import ItemList from './ItemList';

const getVisibleItems = (items, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_PURCHASED':
      return items.filter(t => t.purchased)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.purchased)
  }
}

const mapStateToProps = (state) => {
  return {
    items: getVisibleItems(state.items, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onItemClick: (id) => {
      dispatch(toggleItem(id))
    }
  }
}

const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleItemList
