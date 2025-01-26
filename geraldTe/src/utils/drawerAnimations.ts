import { Easing } from 'react-native-reanimated';

export const transitionSpec = {
  open: {
    animation: 'timing',
    config: {
      duration: 500,
      easing: Easing.out(Easing.poly(5)),
    },
  },
  close: {
    animation: 'timing',
    config: {
      duration: 500,
      easing: Easing.in(Easing.poly(5)),
    },
  },
};
