import { animateScroll } from 'react-scroll';

export const scrollToBottom = () => {
  animateScroll.scrollToBottom({
    duration: 1800,
    smooth: 'linear',
  });
};
