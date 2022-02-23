import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';

const overscrollOptions = {
  enable: true,
  effect: 'bounce',
  damping: 0.15,
  maxOverscroll: 0,
  glowColor: '#fff',
};

const options = {
  damping: 0.07

}

const Scroll = () => {

  useEffect(() => {

    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body)
    }
  }, [])



  return null;
}

export default Scroll;