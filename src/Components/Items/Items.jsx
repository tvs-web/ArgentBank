import React from 'react';
import './Items.scss';
import ItemCards from '../ItemCards/ItemCards';
import Data from '../../Utils/data.json';
// import '../../assets/icon-chat.png';

export default function Items() {
  return (
    <div className="items">
      {Data.map(({ id, cover, title, text }) => {
        console.log('Valeur de cardImg : ', cover);
        return (
          <ItemCards
            key={'item_' + id}
            cardId={'item_' + id}
            cardImg={cover}
            cardTitle={title}
            cardText={text}
            cardAlt="img"
          />
        );
      })}
    </div>
  );
}
