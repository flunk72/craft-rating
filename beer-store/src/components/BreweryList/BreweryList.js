import React, { Component } from 'react';
import BreweryListItem from '../BreweryListItem';
import { connect } from 'react-redux';
import { WithCraftService } from '../Hoc';
import { brewerysLoaded } from '../../actions';
import { compose } from '../../utils';
import './BreweryList.css'

class BreweryList extends Component {

  componentDidMount() {
    // получаем данные из сервиса
    const { craftService } = this.props;
    const dataBrew = craftService.getBrewerys();
    
    this.props.brewerysLoaded(dataBrew)
  }
  render() {
    const { brewerys } = this.props;
    return (
      <div className="brewery-container">
        { 
          brewerys.brewerys.map((brewery) => {
            return (
              <BreweryListItem key={brewery.id} brewery={brewery}/>
            )
          })
        } 
      </div>
    )
  }
}

//  передает массив из редюсера в breweryList. Принимает стейт и возвращает объект 
const mapStateToProps = ( { brewerys } ) => {
  return {
    brewerys  // передает в компонент свойство brewerys, значение берет из глобального стейта из редакс стор
  }
}
const mapDispatchToProps = {
  brewerysLoaded
}
export default compose(
  WithCraftService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BreweryList);
