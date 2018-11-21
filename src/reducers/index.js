import * as actions from '../actions';

const initialState = {
  dreams: [
    {
      title: 'Example Dream 1',
      content: 'Lorem ipsum dolor amet whatever tbh chillwave, next level franzen literally squid truffaut pickled normcore. Slow-carb ugh neutra mlkshk mixtape. Readymade cold-pressed viral 3 wolf moon, normcore raclette taxidermy hoodie. DIY post-ironic polaroid glossier biodiesel whatever, pitchfork pickled waistcoat crucifix. Chambray try-hard man bun gochujang fanny pack yuccie. Next level retro truffaut slow-carb biodiesel typewriter. Four loko keytar direct trade intelligentsia everyday carry.',
      comments: [
        {text: 'Example comment 1'},
        {text: 'Example comment 2'}
      ]
    },
    {
      title: 'Example Dream 2',
      content: 'Lorem ipsum dolor amet whatever tbh chillwave, next level franzen literally squid truffaut pickled normcore. Slow-carb ugh neutra mlkshk mixtape. Readymade cold-pressed viral 3 wolf moon, normcore raclette taxidermy hoodie. DIY post-ironic polaroid glossier biodiesel whatever, pitchfork pickled waistcoat crucifix. Chambray try-hard man bun gochujang fanny pack yuccie. Next level retro truffaut slow-carb biodiesel typewriter. Four loko keytar direct trade intelligentsia everyday carry.',
      comments: [
        {text: 'Example comment 1'},
        {text: 'Example comment 2'}
      ]
    },
    {
      title: 'Example Dream 3',
      content: 'Lorem ipsum dolor amet whatever tbh chillwave, next level franzen literally squid truffaut pickled normcore. Slow-carb ugh neutra mlkshk mixtape. Readymade cold-pressed viral 3 wolf moon, normcore raclette taxidermy hoodie. DIY post-ironic polaroid glossier biodiesel whatever, pitchfork pickled waistcoat crucifix. Chambray try-hard man bun gochujang fanny pack yuccie. Next level retro truffaut slow-carb biodiesel typewriter. Four loko keytar direct trade intelligentsia everyday carry.',
      comments: [
        {text: 'Example comment 1'},
        {text: 'Example comment 2'}
      ]
    },
    {
      title: 'Example Dream 4',
      content: 'Lorem ipsum dolor amet whatever tbh chillwave, next level franzen literally squid truffaut pickled normcore. Slow-carb ugh neutra mlkshk mixtape. Readymade cold-pressed viral 3 wolf moon, normcore raclette taxidermy hoodie. DIY post-ironic polaroid glossier biodiesel whatever, pitchfork pickled waistcoat crucifix. Chambray try-hard man bun gochujang fanny pack yuccie. Next level retro truffaut slow-carb biodiesel typewriter. Four loko keytar direct trade intelligentsia everyday carry.',
      comments: [
        {text: 'Example comment 1'},
        {text: 'Example comment 2'}
      ]
    }
  ]
};

export const dreamReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_DREAM) {
    return Object.assign({}, state, {
      dreams: [...state.dreams, {
        title: action.title,
        content: action.content,
        comments: []
      }]
    });
  }
  else if (action.type === actions.ADD_COMMENT) {
    let dreams = state.dreams.map((dream, index) => {
      if (index !== action.dreamIndex) {
        return dream;
      }
      return Object.assign({}, dream, {
        comments: [...dream.comments, {
          text: action.text
        }]
      });
    });

    return Object.assign({}, state, {
      dreams
    });
  }
  return state;
};
