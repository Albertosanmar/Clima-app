import { useEffect } from 'react';

const Background = ({ description }) => {
  useEffect(() => {
    if (!description) return;

    
    const backgrounds = {
        'cielo claro': '/backgrounds/despejado2.jpg',
        'pocas nubes': '/backgrounds/sol-nubes.jpg',
        'nubes dispersas': '/backgrounds/sol-nubes.jpg',
        'nubes rotas': '/backgrounds/nubes-ro.jpg',
        'lluvia moderada': '/backgrounds/lluvia-g.jpg',
        'lluvia ligera': '/backgrounds/lluvia-l.jpg',
        'lluvia': '/backgrounds/lluvia-g.jpg',
        'tormenta': '/backgrounds/tormenta.jpg',
        'nieve': '/backgrounds/nevando.jpg',
        'niebla': '/backgrounds/niebla.jpg',
        'default': '/backgrounds/nubes-r.jpg', 
    };

      const lowerDesc = description.toLowerCase();
      const imageName = backgrounds[lowerDesc] || backgrounds['default'];

      document.body.style.setProperty('--bg-image', `url(${imageName})`);
  }, [description]);

  return null;
};

export default Background;


