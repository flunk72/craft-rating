import React, { Component } from 'react';
import CraftListItem from '../CraftListItem';
// connect -  подключает компонент к стору редакса
import { connect } from 'react-redux';
import { WithCraftService } from '../Hoc';
import { craftsLoaded } from '../../actions';
import { compose } from '../../utils';
import './CraftList.css'

class CraftList extends Component {

  componentDidMount() {
    // получаем данные из сервиса
    const { craftService } = this.props;
    const data = craftService.getCrafts();

    this.props.craftsLoaded(data)
  }

  render() {
    const { crafts } = this.props;
    return (
      <div className="craft-container">
        { 
          crafts.crafts.map((craft) => {
            return (
              <div key={craft.id}><CraftListItem craft={craft}/></div>
            )
          })
        } 
      </div>
    )
  }
}
//  передает массив из редюсера в craftList. Принимает стейт и возвращает объект 
const mapStateToProps = ({ crafts }) => {
  return {
    crafts // передает в компонент свойство крафтс, значение берет из глобального стейта из редакс стор
  }
}
const mapDispatchToProps = {
  craftsLoaded
}
export default compose(
  WithCraftService(),
  connect(mapStateToProps, mapDispatchToProps)
)(CraftList);
    