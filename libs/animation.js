import anime from "animejs"

export const animateElement = (target,duration,propertyToAnimate,propertyValue,easing) => {
  if(propertyValue.includes(",")){
    propertyValue = propertyValue.split(',');
  }
  anime({
    targets: target,
    duration: duration,
    [propertyToAnimate]: propertyValue,
    easing: easing,
  });
}

export const animateElements = (targets,duration,propertyToAnimate,propertyValue,easing) => {
  if(propertyValue.includes(",")){
    console.log('here');
    propertyValue = propertyValue.split(',');
  }
  if(Array.isArray(propertyValue)){
    var updatedPropertyValue = function() {
      return anime.random(propertyValue[0], propertyValue[1]);
    }
  }
  anime({
    targets: targets,
    duration: duration,
    [propertyToAnimate]: updatedPropertyValue,
    easing: easing,
  });
}

export const animateElementsKeyFrame = (targets,duration,propertyToAnimate,propertyValue,easing) => {
  let colors = ['#ff4b4b','#ffb74b','#4bff59','#4b93ff','#b14bff']
  let updatedPropertyValue = function(a,b) {
    return anime.random(a, b);
  }
  
  anime({
    targets: targets,
    duration: duration,
    delay: anime.stagger(200, {from: 'center'}),
    keyframes: [
      {[propertyToAnimate]: 0},
      {[propertyToAnimate]: updatedPropertyValue(-10,propertyValue), color: colors[updatedPropertyValue(0,4)]},
      {[propertyToAnimate]: 0, color: '#000000'},
    ],
    easing: easing,
  });
}