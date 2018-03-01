const mongoose = require('mongoose');
const Drink = require('../models/drink');

const dbName = 'cocktails-db';
mongoose.connect(`mongodb://localhost/${dbName}`);

var drinks = [
  {
    name: 'Mojito',
    type: 'Rum',
    imageUrl: 'http://www.tsugars.com/media/1188/nuestro-mojito-moreno-1024x815-1024x815.jpg',
    ingredients: [
      {
        name: 'Rum',
        quantity: 1.5,
        unit: 'ounces'
      },
      {
        name: 'mint',
        quantity: 2,
        unit: 'leaves'
      },
      {
        name: 'sprite',
        quantity: 1,
        unit: 'cup'
      },
      {
        name: 'ice',
        quantity: 0.5,
        unit: 'cups'
      }
    ]
  },
  {
    name: 'Gin and Tonic',
    type: 'Gin',
    imageUrl: 'http://blog.ticketea.com/wp-content/uploads/2016/06/gintonic.jpg',
    ingredients: [
      {
        name: 'Gin',
        quantity: 1.5,
        unit: 'ounces'
      },
      {
        name: 'tonic water',
        quantity: 1,
        unit: 'cup'
      },
      {
        name: 'lemon',
        quantity: 1,
        unit: 'wedge'
      }
    ]
  },
  {
    name: 'Moscow Mule',
    type: 'Vodka',
    imageUrl: 'https://i.pinimg.com/originals/e5/5e/c6/e55ec6477d3682a23c3ab216c8ced0b8.jpg',
    ingredients: [
      {
        name: 'Vodka',
        quantity: 1.5,
        unit: 'ounces'
      },
      {
        name: 'ginger ale',
        quantity: 1,
        unit: 'cup'
      },
      {
        name: 'lime',
        quantity: 2,
        unit: 'wedges'
      }
    ]
  },
  {
    name: 'Mimosa',
    type: 'Champagne',
    imageUrl: 'http://s3-us-west-2.amazonaws.com/s3.shermans.test/wlnkfm/styles/delta__775x515/s3/s3fs-public/dreamstime_s_72674914.jpg?itok=A6ccoUKz',
    ingredients: [
      {
        name: 'Champagne',
        quantity: 1,
        unit: 'cup'
      },
      {
        name: 'orange juice',
        quantity: 1,
        unit: 'cup'
      }
    ]
  },
  {
    name: 'Vodka Cran',
    type: 'Vodka',
    imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2011/11/Pear-and-Cranberry-Cocktail-Recipe-1200.jpg',
    ingredients: [
      {
        name: 'Vodka',
        quantity: '1.5',
        unit: 'ounces'
      },
      {
        name: 'Cranberry juice',
        quantity: 1,
        unit: 'cup'
      },
      {
        name: 'Lime',
        quantity: 2,
        unit: 'wedges'
      }
    ]
  },
  {
    name: 'Greyhound',
    type: 'Vodka',
    imageUrl: 'https://f5petdcvm0-flywheel.netdna-ssl.com/wp-content/uploads/2012/12/IMG_1707.jpg',
    ingredients: [
      {
        name: 'Vodka',
        quantity: 1.5,
        unit: 'ounces'
      },
      {
        name: 'Grapefruit juice',
        quantity: 1,
        unit: 'cup'
      }
    ]
  },
  {
    name: 'Cuba Libre',
    type: 'Rum',
    imageUrl: 'https://drinks-dvq6ncf.netdna-ssl.com//wordpress/wp-content/uploads/2015/03/rum-and-coke.jpg',
    ingredients: [
      {
        name: 'Rum',
        quantity: 1.5,
        unit: 'ounces'
      },
      {
        name: 'Cola',
        quantity: 1,
        unit: 'cup'
      }
    ]
  },
  {
    name: 'Screwdriver',
    type: 'Vodka',
    imageUrl: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/5/0/CCADO102_Muddled-Screwdriver-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371609418528.jpeg',
    ingredients: [
      {
        name: 'Vodka',
        quantity: 1.5,
        unit: 'ounces'
      },
      {
        name: 'Orange juice',
        quantity: 1,
        unit: 'cup'
      }
    ]
  },
  {
    name: 'Dark and Stormy',
    type: 'Rum',
    imageUrl: 'https://cdn.vox-cdn.com/thumbor/JMHW04TJpdXNxmT2oS6zwJTJWsI=/898x600/cdn.vox-cdn.com/uploads/chorus_asset/file/2386450/20141022dark_n_stormy_-_schiller.0.jpg',
    ingredients: [
      {
        name: 'Rum',
        quantity: 1.5,
        unit: 'ounces'
      },
      {
        name: 'ginger ale',
        quantity: 1,
        unit: 'cup'
      }
    ]
  },
  {
    name: 'Gimlet',
    type: 'Gin',
    imageUrl: 'http://cdn.liquor.com/wp-content/uploads/2017/04/18130027/gimlet-1200x628-social.jpg',
    ingredients: [
      {
        name: 'Gin',
        quantity: 3,
        unit: 'ounces'
      },
      {
        name: 'lime juice',
        quantity: 1,
        unit: 'ounce'
      }
    ]
  }
];

Drink.create(drinks, (err) => {
  if (err) { throw (err); }
  console.log(`Created ${drinks.length} drinks`);
});
