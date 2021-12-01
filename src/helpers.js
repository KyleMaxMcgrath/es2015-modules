const choice = (items) => (items[Math.floor(Math.random()*items.length)]);

const remove = (items, item) => {
  for(let i = 0; i < items.length; i++) {
    if(items[i]===item) {
      items = [...items.slice(0,i),...items.slice(i+1)];
      break;
    }
  }
  return items;
}

export {choice, remove};
